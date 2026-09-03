import { expect, test } from "@playwright/test";

/**
 * The shade pop-up, exercised on the preview board. Delete this alongside
 * `/popup-preview` once the pop-up is wired to a real trigger.
 */
test.describe("shade pop-up", () => {
  test("opens over a shade and closes on Escape", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto("/popup-preview");

    const dialog = page.getByRole("dialog", { name: "Get a quote today" });
    await expect(dialog).toBeHidden();

    await page.getByRole("button", { name: /Open the quote pop-up/ }).click();
    await expect(dialog).toBeVisible();

    // The page behind must hold still while the shade is up.
    await expect(page.locator("html")).toHaveCSS("overflow-x", "hidden");

    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
  });

  test("closes when the shade is clicked but not the card", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto("/popup-preview");

    await page.getByRole("button", { name: /Open the notice pop-up/ }).click();
    const dialog = page.getByRole("dialog", { name: /policy details/ });
    await expect(dialog).toBeVisible();

    await dialog.getByText("Have the carrier").click();
    await expect(dialog).toBeVisible();

    await page.mouse.click(60, 60);
    await expect(dialog).toBeHidden();
  });

  test("confirms the quote without leaving the pop-up", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto("/popup-preview");

    await page.getByRole("button", { name: /Open the quote pop-up/ }).click();
    await page.getByLabel("Full Name").fill("Dana Reed");
    await page.getByLabel("Email").fill("dana@agency.com");
    await page.getByRole("button", { name: "Get a Call Back" }).click();

    await expect(page.getByRole("status")).toContainText(/callback request has been noted/i);
    await expect(page).toHaveURL(/\/popup-preview$/);
  });

  test("keeps the 44px tap target on the mobile board", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/popup-preview");

    await page.getByRole("button", { name: /Open the quote pop-up/ }).click();

    // Computed height rather than the bounding box: the card is still easing
    // in when the dialog first paints, and a transform would read short.
    const close = page.getByRole("dialog").getByRole("button", { name: "Close" });
    await expect(close).toHaveCSS("height", "44px");
  });
});
