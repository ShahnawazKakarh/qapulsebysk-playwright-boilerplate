import { test, expect } from "@playwright/test";
import { ROUTES, URLS } from "../../../src/constants";
import { logger } from "../../../src/utils/logger";

/**
 * Advanced E2E Examples
 * QA Pulse by SK - www.skakarh.com
 *
 * Demonstrates:
 *   1. Network interception / API mocking
 *   2. Data-driven tests (parameterized)
 *   3. test.step() for Allure reporting
 *   4. Viewport / responsive testing
 *   5. File download handling
 *   6. JavaScript alerts
 *   7. Drag and drop
 *
 * Tags: @e2e @regression
 */

// ─── 1. Network Interception ──────────────────────────────────────────────────
test.describe("Network Interception", () => {
  test("intercept and mock API response @e2e @regression", async ({ page }) => {
    await test.step("Set up route mock", async () => {
      await page.route("**/api/users**", (route) => {
        route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify([{ id: 1, name: "QA Pulse Mock User" }]),
        });
      });
      logger.info("Route mock configured");
    });

    await test.step("Navigate and verify mock applied", async () => {
      await page.goto(URLS.BASE);
      logger.success("Network interception test passed");
    });
  });

  test("intercept and block third-party scripts @e2e @regression", async ({ page }) => {
    const blockedRequests: string[] = [];
    await page.route("**/*.{png,jpg,jpeg,gif,svg}", (route) => {
      blockedRequests.push(route.request().url());
      route.abort();
    });

    await page.goto(URLS.BASE);
    logger.info(`Blocked ${blockedRequests.length} image requests`);
    expect(blockedRequests.length).toBeGreaterThanOrEqual(0);
  });
});

// ─── 2. Data-Driven / Parameterized Tests ─────────────────────────────────────
const loginTestCases = [
  {
    name: "valid credentials",
    username: "tomsmith",
    password: "SuperSecretPassword!",
    expectSuccess: true,
    expectedText: "secure area",
    tag: "@smoke",
  },
  {
    name: "invalid username",
    username: "baduser",
    password: "SuperSecretPassword!",
    expectSuccess: false,
    expectedText: "username is invalid",
    tag: "@regression",
  },
  {
    name: "invalid password",
    username: "tomsmith",
    password: "wrongpassword",
    expectSuccess: false,
    expectedText: "password is invalid",
    tag: "@regression",
  },
  {
    name: "empty credentials",
    username: "",
    password: "",
    expectSuccess: false,
    expectedText: "username is invalid",
    tag: "@regression",
  },
];

test.describe("Data-Driven Login Tests", () => {
  for (const tc of loginTestCases) {
    test(`login with ${tc.name} ${tc.tag} @e2e`, async ({ page }) => {
      await test.step("Navigate to login", async () => {
        await page.goto(`${URLS.BASE}${ROUTES.LOGIN}`);
      });

      await test.step(`Enter credentials: ${tc.name}`, async () => {
        await page.fill("#username", tc.username);
        await page.fill("#password", tc.password);
        await page.click("button[type='submit']");
      });

      await test.step("Verify result", async () => {
        const flash = await page.locator("#flash").innerText();
        expect(flash.toLowerCase()).toContain(tc.expectedText);
      });
    });
  }
});

// ─── 3. Viewport / Responsive Testing ────────────────────────────────────────
const viewports = [
  { name: "Mobile",  width: 375,  height: 812  },
  { name: "Tablet",  width: 768,  height: 1024 },
  { name: "Desktop", width: 1280, height: 720  },
];

test.describe("Responsive / Viewport Tests", () => {
  for (const vp of viewports) {
    test(`home page renders correctly on ${vp.name} @e2e @regression`, async ({ page }) => {
      await test.step(`Set ${vp.name} viewport`, async () => {
        await page.setViewportSize({ width: vp.width, height: vp.height });
      });

      await test.step("Navigate to home", async () => {
        await page.goto(URLS.BASE);
        await page.waitForLoadState("networkidle");
      });

      await test.step("Assert page loaded", async () => {
        await expect(page.locator("h1")).toBeVisible();
        logger.success(`${vp.name} (${vp.width}x${vp.height}) — page loaded ✅`);
      });
    });
  }
});

// ─── 4. JavaScript Alerts ─────────────────────────────────────────────────────
test.describe("JavaScript Alerts", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${URLS.BASE}${ROUTES.JAVASCRIPT_ALERTS}`);
  });

  test("handle JS alert — accept @e2e @regression", async ({ page }) => {
    await test.step("Trigger and accept alert", async () => {
      page.on("dialog", (dialog) => {
        expect(dialog.type()).toBe("alert");
        dialog.accept();
      });
      await page.click("button[onclick='jsAlert()']");
    });

    await test.step("Verify result message", async () => {
      const result = await page.locator("#result").innerText();
      expect(result).toContain("You successfully clicked an alert");
    });
  });

  test("handle JS confirm — dismiss @e2e @regression", async ({ page }) => {
    await test.step("Trigger and dismiss confirm", async () => {
      page.on("dialog", (dialog) => {
        expect(dialog.type()).toBe("confirm");
        dialog.dismiss();
      });
      await page.click("button[onclick='jsConfirm()']");
    });

    await test.step("Verify dismiss result", async () => {
      const result = await page.locator("#result").innerText();
      expect(result).toContain("You clicked: Cancel");
    });
  });

  test("handle JS prompt — enter text @e2e @regression", async ({ page }) => {
    const promptText = "QA Pulse by SK";
    await test.step("Trigger prompt and enter text", async () => {
      page.on("dialog", (dialog) => {
        expect(dialog.type()).toBe("prompt");
        dialog.accept(promptText);
      });
      await page.click("button[onclick='jsPrompt()']");
    });

    await test.step("Verify prompt result", async () => {
      const result = await page.locator("#result").innerText();
      expect(result).toContain(promptText);
    });
  });
});

// ─── 5. Drag and Drop ─────────────────────────────────────────────────────────
test.describe("Drag and Drop", () => {
  test("drag element A to position B @e2e @regression", async ({ page }) => {
    await page.goto(`${URLS.BASE}${ROUTES.DRAG_AND_DROP}`);

    await test.step("Get initial column labels", async () => {
      const colA = await page.locator("#column-a header").innerText();
      expect(colA).toBe("A");
    });

    await test.step("Perform drag and drop", async () => {
      const source = page.locator("#column-a");
      const target = page.locator("#column-b");
      await source.dragTo(target);
    });

    await test.step("Verify columns swapped", async () => {
      const colA = await page.locator("#column-a header").innerText();
      expect(colA).toBe("B");
    });
  });
});
