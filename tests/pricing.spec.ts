import { expect, test } from "@playwright/test";

const MD_BREAKPOINT = 768;

test.describe("Pricing page", () => {
  test.describe("Pricing plans", () => {
    test("switches between monthly and yearly billing", async ({ page }) => {
      await page.goto("/pricing");

      const billingSwitch = page.getByRole("switch", {
        name: "Yearly billing",
      });

      await expect(billingSwitch).toHaveAttribute("aria-checked", "false");

      await expect(page.getByText("$19.00", { exact: true })).toBeVisible();
      await expect(page.getByText("$39.00", { exact: true })).toBeVisible();
      await expect(page.getByText("$99.00", { exact: true })).toBeVisible();

      await expect(page.getByText("per month", { exact: true })).toHaveCount(3);

      await billingSwitch.click();

      await expect(billingSwitch).toHaveAttribute("aria-checked", "true");

      await expect(page.getByText("$190.00", { exact: true })).toBeVisible();
      await expect(page.getByText("$390.00", { exact: true })).toBeVisible();
      await expect(page.getByText("$990.00", { exact: true })).toBeVisible();

      await expect(page.getByText("per year", { exact: true })).toHaveCount(3);

      await billingSwitch.click();

      await expect(billingSwitch).toHaveAttribute("aria-checked", "false");

      await expect(page.getByText("$19.00", { exact: true })).toBeVisible();
      await expect(page.getByText("$39.00", { exact: true })).toBeVisible();
      await expect(page.getByText("$99.00", { exact: true })).toBeVisible();
    });
  });

  test.describe("Comparison section", () => {
    test("displays the comparison list below the md breakpoint", async ({
      page,
    }) => {
      await page.setViewportSize({ width: MD_BREAKPOINT - 1, height: 880 });

      await page.goto("/pricing");

      await expect(page.getByRole("heading", { name: "Compare" })).toBeHidden();

      await expect(page.getByRole("table")).toBeHidden();

      await expect(
        page.getByText("THE FEATURES", { exact: true }),
      ).toBeVisible();
    });

    test("displays the comparison table from the tablet breackpoint upward", async ({
      page,
    }) => {
      await page.setViewportSize({ width: 768, height: 1024 });

      await page.goto("/pricing");

      await expect(
        page.getByRole("heading", { name: "Compare" }),
      ).toBeVisible();

      await expect(page.getByRole("table")).toBeVisible();

      await expect(
        page.getByText("THE FEATURES", { exact: true }),
      ).toBeHidden();
    });
  });
});
