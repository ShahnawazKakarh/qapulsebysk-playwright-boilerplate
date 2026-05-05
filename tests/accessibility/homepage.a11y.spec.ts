import { test, expect } from "@playwright/test";
import { A11yHelper } from "../../src/helpers/a11yHelper";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * Accessibility Test Suite
 * QA Pulse by SK - www.skakarh.com
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Covers:
 *   1. Full-page WCAG 2.1 AA scans
 *   2. Component-scoped scans
 *   3. Keyboard navigation
 *   4. ARIA landmarks
 *   5. Image alt text
 *   6. Form label association
 *   7. Heading structure (single H1)
 *   8. Focus management
 *   9. Impact-level filtering (critical/serious only)
 *
 * Tags: @a11y @regression @smoke (critical tests only)
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ─── skakarh.com — Brand Site ────────────────────────────────────────────────
test.describe("A11y — skakarh.com (QA Pulse Brand Site)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(process.env.BRAND_URL || "https://www.skakarh.com");
    await page.waitForLoadState("networkidle");
  });

  test("full page WCAG 2.1 AA scan — no violations @a11y @regression @critical", async ({
    page,
  }) => {
    const a11y = new A11yHelper(page);
    await a11y.assertNoViolations({
      tags: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"],
    });
  });

  test("no critical or serious violations @a11y @smoke @critical", async ({ page }) => {
    const a11y = new A11yHelper(page);
    await a11y.assertNoSeriousViolations();
  });

  test("all images have alt text @a11y @regression", async ({ page }) => {
    const a11y = new A11yHelper(page);
    await a11y.assertImagesHaveAltText();
  });

  test("page has a single H1 heading @a11y @regression", async ({ page }) => {
    const a11y = new A11yHelper(page);
    await a11y.assertSingleH1();
  });

  test("ARIA landmarks are present — main and nav @a11y @regression", async ({ page }) => {
    const a11y = new A11yHelper(page);
    await a11y.assertAriaLandmarks();
  });

  test("keyboard navigation — Tab moves through interactive elements @a11y @regression", async ({
    page,
  }) => {
    const a11y = new A11yHelper(page);
    await a11y.assertKeyboardNavigable(15);
  });
});

// ─── the-internet — Login Page ────────────────────────────────────────────────
test.describe("A11y — the-internet Login Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.waitForLoadState("networkidle");
  });

  test("login form — no critical violations @a11y @smoke @critical", async ({ page }) => {
    const a11y = new A11yHelper(page);
    await a11y.assertNoCriticalViolations({
      tags: ["wcag2a", "wcag2aa"],
    });
  });

  test("login form inputs have associated labels @a11y @regression", async ({ page }) => {
    const a11y = new A11yHelper(page);
    await a11y.assertFormLabels();
  });

  test("login form — component scoped scan @a11y @regression", async ({ page }) => {
    const a11y = new A11yHelper(page);
    await a11y.assertComponentAccessible("#login", {
      tags: ["wcag2a", "wcag2aa"],
    });
  });

  test("keyboard Tab order on login form is correct @a11y @regression", async ({ page }) => {
    // Tab to username
    await page.keyboard.press("Tab");
    const usernameIsFocused = await page.evaluate(
      () => document.activeElement?.getAttribute("id") === "username"
    );
    expect(usernameIsFocused, "First Tab should focus #username").toBeTruthy();

    // Tab to password
    await page.keyboard.press("Tab");
    const passwordIsFocused = await page.evaluate(
      () => document.activeElement?.getAttribute("id") === "password"
    );
    expect(passwordIsFocused, "Second Tab should focus #password").toBeTruthy();

    // Tab to submit button
    await page.keyboard.press("Tab");
    const submitIsFocused = await page.evaluate(
      () => document.activeElement?.getAttribute("type") === "submit"
    );
    expect(submitIsFocused, "Third Tab should focus submit button").toBeTruthy();
  });

  test("can submit login form using keyboard only — no mouse @a11y @regression", async ({
    page,
  }) => {
    // Navigate entirely by keyboard
    await page.keyboard.press("Tab"); // username
    await page.keyboard.type("tomsmith");
    await page.keyboard.press("Tab"); // password
    await page.keyboard.type("SuperSecretPassword!");
    await page.keyboard.press("Tab"); // button
    await page.keyboard.press("Enter"); // submit

    await page.waitForLoadState("networkidle");
    const url = page.url();
    expect(url).toContain("/secure");
  });
});

// ─── the-internet — Home Page ─────────────────────────────────────────────────
test.describe("A11y — the-internet Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com");
    await page.waitForLoadState("networkidle");
  });

  test("home page — no critical violations @a11y @smoke", async ({ page }) => {
    const a11y = new A11yHelper(page);
    await a11y.assertNoCriticalViolations();
  });

  test("home page has a single H1 @a11y @regression", async ({ page }) => {
    const a11y = new A11yHelper(page);
    await a11y.assertSingleH1();
  });

  test("navigation links are keyboard accessible @a11y @regression", async ({ page }) => {
    // Verify all links in the list are reachable via Tab
    const linkCount = await page.locator("ul li a").count();
    expect(linkCount).toBeGreaterThan(0);

    // Tab through first 5 links and confirm focus lands on <a> tags
    for (let i = 0; i < Math.min(5, linkCount); i++) {
      await page.keyboard.press("Tab");
      const focusedTag = await page.evaluate(
        () => document.activeElement?.tagName.toLowerCase()
      );
      expect(["a", "button", "input"], `Tab stop ${i + 1} should be interactive`).toContain(
        focusedTag
      );
    }
  });
});

// ─── Colour Contrast — axe best-practice rules ────────────────────────────────
test.describe("A11y — Colour Contrast", () => {
  test("skakarh.com — no colour contrast violations @a11y @regression", async ({ page }) => {
    await page.goto(process.env.BRAND_URL || "https://www.skakarh.com");
    await page.waitForLoadState("networkidle");
    const a11y = new A11yHelper(page);
    await a11y.assertNoViolations({
      tags: ["cat.color"],
      disableRules: [],
    });
  });
});
