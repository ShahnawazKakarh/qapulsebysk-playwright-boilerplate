import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

const isCI = !!process.env.CI;

export default defineConfig({
  timeout: 60_000,
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 4 : undefined,

  // Global setup/teardown — runs once before/after the entire suite
  globalSetup: "./global-setup.ts",
  globalTeardown: "./global-teardown.ts",

  /*
   * ─── REPORTERS ────────────────────────────────────────────────────────────
   * LOCAL  : line + html (auto-opens on failure) + json + allure
   * CI     : line + html (never opens) + junit + json + blob + allure
   */
  reporter: isCI
    ? [
        ["line"],
        ["html", { open: "never", outputFolder: "playwright-report" }],
        ["junit", { outputFile: "test-results/junit.xml" }],
        ["json", { outputFile: "test-results/results.json" }],
        ["blob", { outputDir: "blob-report" }],
        ["allure-playwright", { outputFolder: "allure-results", suiteTitle: true }],
      ]
    : [
        ["line"],
        ["html", { open: "on-failure", outputFolder: "playwright-report" }],
        ["json", { outputFile: "test-results/results.json" }],
        ["allure-playwright", { outputFolder: "allure-results", suiteTitle: true }],
      ],

  use: {
    baseURL: process.env.BASE_URL || "https://the-internet.herokuapp.com",
    trace: isCI ? "on-first-retry" : "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    testIdAttribute: "data-testid",
  },

  outputDir: "test-results/artifacts",

  projects: [
    // ── Auth setup project — runs first, saves storageState ────────────────
    {
      name: "setup",
      testMatch: /.*\.setup\.ts/,
    },

    // ── Desktop Browsers ──────────────────────────────────────────────────
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
      dependencies: ["setup"],
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
      dependencies: ["setup"],
      testIgnore: [/.*visual\.spec\.ts/, /.*a11y\.spec\.ts/],
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
      dependencies: ["setup"],
      testIgnore: [/.*visual\.spec\.ts/],
    },

    // ── Mobile Browsers ───────────────────────────────────────────────────
    {
      name: "mobile-chrome",
      use: { ...devices["Pixel 5"] },
      dependencies: ["setup"],
      testIgnore: [/.*visual\.spec\.ts/],
    },
    {
      name: "mobile-safari",
      use: { ...devices["iPhone 12"] },
      dependencies: ["setup"],
      testIgnore: [/.*visual\.spec\.ts/],
    },
  ],
});
