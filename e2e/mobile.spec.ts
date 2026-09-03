import { expect, test } from "@playwright/test";

/** The 390 mobile board. Viewport only — a device preset would force a browser type. */
test.use({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3 });

const pages = ["/", "/about", "/how-it-works"];

for (const path of pages) {
  test(`${path} has no horizontal overflow`, async ({ page }) => {
    await page.goto(path);

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

  await nav.getByRole("link", { name: "About Us", exact: true }).click();
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

test("Rule 02: no text below 16px", async ({ page }) => {
  await page.goto("/");

  const tooSmall = await page.evaluate(() => {
    const selector = "p,a,span,li,td,th,label,h1,h2,h3,button,dt,dd";
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
