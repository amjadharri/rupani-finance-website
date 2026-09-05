#!/usr/bin/env bash
# Deploys the site to the GoDaddy VPS (Ubuntu 24.04, user "sajjad" with sudo).
#
# Syncs the source up, builds on the server, and restarts the service. The
# build uses next.config.ts's standalone output, which emits a self-contained
# server.js plus a trimmed node_modules.
#
#   ./deploy/vps/deploy.sh
#
set -euo pipefail

HOST="${USIF_HOST:-sajjad@50.62.180.29}"
KEY="${USIF_KEY:-$HOME/.ssh/usif_vps_ed25519}"
SRC="usif-src"        # build workspace in the deploy user's home
APP="/var/www/usif"   # what systemd runs

SSH_OPTS=(-i "$KEY" -o StrictHostKeyChecking=accept-new)
ssh_() { ssh "${SSH_OPTS[@]}" "$HOST" "$@"; }

echo "==> Syncing source to $HOST:~/$SRC"
# node_modules and build output are rebuilt server-side; .next/.git would just
# be megabytes of churn over the wire.
rsync -az --delete \
  -e "ssh ${SSH_OPTS[*]}" \
  --exclude '.git' \
  --exclude 'node_modules' \
  --exclude '.next' \
  --exclude 'out' \
  --exclude '.vercel' \
  --exclude '.swc' \
  --exclude 'tsconfig.tsbuildinfo' \
  ./ "$HOST:$SRC/"

echo "==> Installing dependencies and building"
ssh_ 'bash -s' <<'REMOTE'
set -euo pipefail
cd ~/usif-src

# NODE_ENV is deliberately left unset: npm ci installs devDependencies by
# default, and forcing "development" here makes `next build` emit a broken
# prerender (React resolves its dev build and /_global-error throws).
export BUILD_STANDALONE=true
export NEXT_TELEMETRY_DISABLED=1
export NEXT_PUBLIC_SITE_URL="https://usinsurancefundings.com"

npm ci --no-audit --no-fund
npm run build

# Assemble what the service runs. The standalone output deliberately omits
# static assets and public/, so they are copied in alongside it.
sudo -n rm -rf /var/www/usif
sudo -n mkdir -p /var/www/usif
sudo -n cp -r .next/standalone/. /var/www/usif/
sudo -n mkdir -p /var/www/usif/.next
sudo -n cp -r .next/static /var/www/usif/.next/static
[ -d public ] && sudo -n cp -r public /var/www/usif/public
sudo -n chown -R www-data:www-data /var/www/usif
REMOTE

echo "==> Restarting service"
ssh_ 'sudo -n systemctl restart usif-web && sleep 3 && systemctl is-active usif-web'

echo "==> Checking response"
ssh_ 'curl -sS -o /dev/null -w "app on 127.0.0.1:3000 -> %{http_code}\n" http://127.0.0.1:3000/'
