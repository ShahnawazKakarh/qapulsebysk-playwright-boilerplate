import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const isCI = !!process.env.CI;

// Absolute path to qapulsesk-report Playwright adapter
const qapulseskReporter = path.resolve(
  __dirname,
  "node_modules/qapulsesk-report/dist/adapters/playwright.js"
);

export default defineConfig({
  timeout: 60_000,
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 4 : undefined,

  globalSetup:    "./global-setup.ts",
  globalTeardown: "./global-teardown.ts",

  /*
   * ─── REPORTERS ────────────────────────────────────────────────────────────
   * LOCAL  : line + html + json + allure + qapulsesk-report
   * CI     : line + html + junit + json + blob + allure + qapulsesk-report
   *
   * qapulsesk-report generates a dark-theme branded HTML report.
   * Open after run: qapulse-report/qapulse-report.html
   */
  reporter: isCI
    ? [
        ["line"],
        ["html",    { open: "never",      outputFolder: "playwright-report" }],
        ["junit",   { outputFile: "test-results/junit.xml" }],
        ["json",    { outputFile: "test-results/results.json" }],
        ["blob",    { outputDir: "blob-report" }],
        ["allure-playwright", { outputFolder: "allure-results", suiteTitle: true }],
        [qapulseskReporter, {
          outputDir:           "qapulse-report",
          reportTitle:         "QA Pulse by SK — Test Report",
          openAfterGeneration: false,
          history: { enabled: true },
        }],
      ]
    : [
        ["line"],
        ["html",    { open: "on-failure", outputFolder: "playwright-report" }],
        ["json",    { outputFile: "test-results/results.json" }],
        ["allure-playwright", { outputFolder: "allure-results", suiteTitle: true }],
        // ── QAPulseSK branded dark-theme report ───────────────────────────────
        [qapulseskReporter, {
          outputDir:           "qapulse-report",
          reportTitle:         "QA Pulse by SK — Test Report",
          openAfterGeneration: false,  // flip to true to auto-open in browser
          history: { enabled: true },  // shows trend chart across multiple runs
        }],
      ],

  use: {
    baseURL:         process.env.BASE_URL || "https://the-internet.herokuapp.com",
    trace:           isCI ? "on-first-retry" : "retain-on-failure",
    screenshot:      "only-on-failure",
    video:           "retain-on-failure",
    testIdAttribute: "data-testid",
  },

  outputDir: "test-results/artifacts",

  projects: [
    { name: "chromium",      use: { ...devices["Desktop Chrome"]  } },
    { name: "firefox",       use: { ...devices["Desktop Firefox"] } },
    { name: "webkit",        use: { ...devices["Desktop Safari"]  } },
    { name: "Mobile Chrome", use: { ...devices["Pixel 5"]         } },
    { name: "Mobile Safari", use: { ...devices["iPhone 12"]       } },
  ],
});
