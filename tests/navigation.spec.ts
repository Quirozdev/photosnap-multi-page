import { LINKS } from "@/core/config/navigation.config";
import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("desktop navigation navigates to all main pages", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });

    await page.goto("/");

    const navigation = page.getByRole("navigation", {
      name: "Main navigation",
    });

    const desktopLinks = LINKS.filter((link) => link.href !== "/");

    for (const link of desktopLinks) {
      await navigation.getByRole("link", { name: link.label }).click();

      await expect(page).toHaveURL(new RegExp(`${link.href}$`));
    }
  });

  test("logo navigates back to homepage", async ({ page }) => {
    await page.goto("/pricing");

    await page
      .getByRole("banner")
      .getByRole("link", { name: "Go to homepage" })
      .click();

    await expect(page).toHaveURL(/\/$/);
  });

  test("footer navigation navigates to the correct page", async ({ page }) => {
    await page.goto("/pricing");

    await page.locator("footer").getByRole("link", { name: "Stories" }).click();

    await expect(page).toHaveURL(/\/stories$/);
  });

  test.describe("Mobile navigation", () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
      await page.goto("/");
    });

    test("opens and closes the mobile menu", async ({ page }) => {
      const mobileMenuButton = page.getByRole("button", {
        name: "Open mobile menu",
      });

      const mobileNavigation = page.locator(
        'nav[aria-label="Mobile navigation"]',
      );

      await expect(mobileMenuButton).toHaveAttribute("aria-expanded", "false");

      await expect(mobileNavigation).toHaveAttribute("inert", "");

      await mobileMenuButton.click();

      const closeButton = page.getByRole("button", {
        name: "Close mobile menu",
      });

      await expect(closeButton).toHaveAttribute("aria-expanded", "true");

      await expect(mobileNavigation).not.toHaveAttribute("inert");

      await expect(page.locator("main")).toHaveAttribute("inert", "");
      await expect(page.locator("footer")).toHaveAttribute("inert", "");

      await expect(page.locator("html")).toHaveClass(/overflow-y-hidden/);

      await expect(page.locator("html")).toHaveClass(/scrollbar-gutter-stable/);

      await closeButton.click();

      await expect(mobileMenuButton).toHaveAttribute("aria-expanded", "false");

      await expect(mobileNavigation).toHaveAttribute("inert", "");

      await expect(page.locator("main")).not.toHaveAttribute("inert");
      await expect(page.locator("footer")).not.toHaveAttribute("inert");

      await expect(page.locator("html")).not.toHaveClass(/overflow-y-hidden/);

      await expect(page.locator("html")).not.toHaveClass(
        /scrollbar-gutter-stable/,
      );
    });

    test("Close the mobile menu when Escape is pressed", async ({ page }) => {
      await page.getByRole("button", { name: "Open mobile menu" }).click();

      await page.keyboard.press("Escape");

      await expect(
        page.getByRole("button", { name: "Open mobile menu" }),
      ).toHaveAttribute("aria-expanded", "false");

      await expect(
        page.locator('nav[aria-label="Mobile navigation"]'),
      ).toHaveAttribute("inert", "");
    });

    test("closes the mobile menu when clicking the backdrop", async ({
      page,
    }) => {
      const mobileNavigation = page.locator(
        'nav[aria-label="Mobile navigation"]',
      );

      await page.getByRole("button", { name: "Open mobile menu" }).click();

      await mobileNavigation.locator('[aria-hidden="true"]').click();

      await expect(
        page.getByRole("button", { name: "Open mobile menu" }),
      ).toHaveAttribute("aria-expanded", "false");

      await expect(mobileNavigation).toHaveAttribute("inert", "");
    });

    test("navigates to a page and closes the mobile menu", async ({ page }) => {
      const mobileNavigation = page.locator(
        'nav[aria-label="Mobile navigation"]',
      );

      await page.getByRole("button", { name: "Open mobile menu" }).click();

      await mobileNavigation.getByRole("link", { name: "Stories" }).click();

      await expect(page).toHaveURL(/\/stories$/);

      await expect(
        page.getByRole("button", { name: "Open mobile menu" }),
      ).toHaveAttribute("aria-expanded", "false");

      await expect(mobileNavigation).toHaveAttribute("inert", "");
    });
  });
});
