import { expect, test } from "@playwright/test";

/** The 1440 desktop board. */
test.use({ viewport: { width: 1440, height: 1000 } });

test("homepage renders the hero, statement and rate card", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText("A Premium");
  await expect(page.getByText("USIF provides a unique opportunity")).toBeVisible();
  await expect(page.getByRole("row", { name: /\$500 – 2,000/ })).toContainText("13.00%");
});

test("primary navigation reaches About Us", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("navigation", { name: "Main" }).getByRole("link", { name: "About Us" }).click();

  await expect(page).toHaveURL(/\/about$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("About U.S.");
});

test("Premium Financing menu opens and reaches How It Works", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Premium Financing" }).click();
  await page.getByRole("link", { name: "How It Works", exact: true }).click();

  await expect(page).toHaveURL(/\/how-it-works$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Financing that works");
});

test("quote form submits and confirms", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("Full Name").fill("Dana Reed");
  await page.getByLabel("Email").fill("dana@agency.com");
  await page.getByRole("button", { name: "Get a Call Back" }).click();

  await expect(page.getByRole("status")).toContainText(/we will call you back soon/i);
});

test("advantages accordion switches panels", async ({ page }) => {
  await page.goto("/");

  const head = page.getByRole("button", { name: /Quick service/ });
  await head.scrollIntoViewIfNeeded();
  await head.click();

  await expect(head).toHaveAttribute("aria-expanded", "true");
});

test("content column is 1280 inside 80px gutters", async ({ page }) => {
  await page.goto("/");
  // Measure only once the hero has laid out, otherwise the rect can read zero.
  await page.locator("h1").waitFor({ state: "visible" });

  const measured = await page.evaluate(() => {
    const container = document.querySelector("h1")!.closest("[data-container]")!;
    const style = getComputedStyle(container);
    const rect = container.getBoundingClientRect();
    return {
      gutter: style.paddingLeft,
      clientWidth: document.documentElement.clientWidth,
      content: Math.round(
        rect.width - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight),
      ),
    };
  });

  // 1280 column inside 80px gutters, less whatever a classic scrollbar takes.
  expect(measured.gutter).toBe("80px");
  expect(measured.content).toBe(Math.min(1280, measured.clientWidth - 160));
});

test("type scale matches the design system", async ({ page }) => {
  await page.goto("/");
  await page.locator("h1").waitFor({ state: "visible" });
  await page.evaluate(() => document.fonts.ready);

  const type = await page.evaluate(() => {
    const cs = (el: Element) => getComputedStyle(el);
    const h1 = document.querySelector("h1")!;
    const body = [...document.querySelectorAll("p")].find((p) =>
      p.textContent!.startsWith("An established"),
    )!;
    return {
      h1Size: parseFloat(cs(h1).fontSize),
      h1LineHeight: parseFloat(cs(h1).lineHeight),
      h1Weight: cs(h1).fontWeight,
      bodySize: parseFloat(cs(body).fontSize),
      bodyLineHeight: parseFloat(cs(body).lineHeight),
    };
  });

  // R/Display/XL — Archivo Light 58 / 108%
  expect(type.h1Size).toBe(58);
  expect(type.h1LineHeight).toBeCloseTo(58 * 1.08, 1);
  expect(type.h1Weight).toBe("300");
  // E/Body/M — Public Sans Regular 17 / 28
  expect(type.bodySize).toBe(17);
  expect(type.bodyLineHeight).toBe(28);
});

test("every page exposes exactly one h1 and a title", async ({ page }) => {
  for (const path of ["/", "/about", "/how-it-works"]) {
    await page.goto(path);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page).toHaveTitle(/USIF|U\.S\. Insurance Funding/);
  }
});

test("sitemap and robots are served", async ({ page }) => {
  expect((await page.request.get("/sitemap.xml")).ok()).toBeTruthy();
  expect((await page.request.get("/robots.txt")).ok()).toBeTruthy();
});
