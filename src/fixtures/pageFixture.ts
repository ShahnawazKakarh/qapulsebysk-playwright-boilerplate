import { test as base } from "@playwright/test";
import { HomePage } from "../pages/example/HomePage";
import { LoginPage } from "../pages/example/LoginPage";

/**
 * Page Fixtures - Single import for all page objects
 * QA Pulse by SK - www.skakarh.com
 *
 * Usage in spec files:
 *   import { test, expect } from "@fixtures/pageFixture";
 *   test("my test", async ({ homePage, loginPage }) => { ... });
 */
export type PageObjects = {
  homePage: HomePage;
  loginPage: LoginPage;
};

export const test = base.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

export { expect, Page, Locator } from "@playwright/test";
