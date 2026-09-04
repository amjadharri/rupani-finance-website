import { expect, test } from "@playwright/test";

/** The 390 mobile board. Viewport only — a device preset would force a browser type. */
test.use({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3 });

const pages = [
  "/",
  "/about",
  "/how-it-works",
  "/what-we-finance",
  "/who-we-serve",
  "/states-we-fund",
  "/why-choose-usif",
  "/blogs",
  "/blogs/agents-dont-have-to-fear-premium-financing",
  "/faqs",
  "/testimonials",
  "/contact",
];

for (const path of pages) {
  test(`${path} has no horizontal overflow`, async ({ page }) => {
    await page.goto(path);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForFunction(() =>
      [...document.images].every((img) => img.complete || img.loading === "lazy"),
    );

    const { viewport, scrollWidth } = await page.evaluate(() => ({
      viewport: window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));

    expect(viewport).toBe(390);
    expect(scrollWidth).toBeLessThanOrEqual(viewport + 1);
  });
}

test("mobile navigation opens and links through", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Toggle navigation" }).click();
  const nav = page.locator("#mobile-nav");
  await expect(nav).toBeVisible();

  // About Us appears twice in the mobile panel: the section link and the same
  // destination inside its submenu. The first is the section link.
  await nav.getByRole("link", { name: "About Us", exact: true }).first().click();
  await expect(page).toHaveURL(/\/about$/);
});

test("Rule 06: tap targets are at least 44px tall", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Toggle navigation" }).click();

  const targets = page.locator("[data-tap]");
  const count = await targets.count();
  expect(count).toBeGreaterThan(0);

  const undersized: string[] = [];
  for (let i = 0; i < count; i += 1) {
    const el = targets.nth(i);
    if (!(await el.isVisible())) continue;

    const box = await el.boundingBox();
    if (box && box.height < 44) {
      undersized.push(`${(await el.textContent())?.trim()} = ${Math.round(box.height)}px`);
    }
  }

  expect(undersized).toEqual([]);
});

for (const path of pages) {
  test(`Rule 02: no text below 16px on ${path}`, async ({ page }) => {
    await page.goto(path);

    const tooSmall = await page.evaluate(() => {
      const selector = "p,a,span,li,td,th,label,h1,h2,h3,h4,button,dt,dd,abbr,time,strong";
      return [...document.querySelectorAll(selector)]
        .filter((el) => {
          const hasOwnText = [...el.childNodes].some(
            (n) => n.nodeType === Node.TEXT_NODE && n.textContent?.trim(),
          );
          if (!hasOwnText) return false;
          if (el.closest("[data-logo]")) return false;
          return parseFloat(getComputedStyle(el).fontSize) < 16;
        })
        .map((el) => `${getComputedStyle(el).fontSize} "${el.textContent?.trim().slice(0, 30)}"`);
    });

    expect(tooSmall).toEqual([]);
  });
}
