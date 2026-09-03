import { expect, test } from "@playwright/test";

/** The Online Agent launcher that floats over the hero on every board. */
test.describe("chat launcher", () => {
  test("greets over the hero and collapses to the avatar", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto("/");

    const greeting = page.getByText(/premium finance specialist is here to help/i);
    await expect(greeting).toBeVisible();

    // It floats bottom-right over the hero rather than sitting in the flow.
    const box = await greeting.boundingBox();
    expect(box!.x).toBeGreaterThan(1440 / 2);

    await page.getByRole("button", { name: "Close chat" }).click();
    await expect(greeting).toBeHidden();

    const launcher = page.getByRole("button", { name: "Online Agent" });
    await expect(launcher).toBeVisible();
    await launcher.click();
    await expect(greeting).toBeVisible();
  });

  test("its actions reach Apply and Contact", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("link", { name: "Apply Now" }).last()).toHaveAttribute(
      "href",
      "/apply",
    );
    await expect(page.getByRole("link", { name: "I have a question" })).toHaveAttribute(
      "href",
      "/contact",
    );
  });

  test("does not push the mobile board sideways", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);

    await expect(page.getByText(/here to help/i)).toBeVisible();

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(scrollWidth).toBeLessThanOrEqual(391);
  });
});
