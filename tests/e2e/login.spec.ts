import { test, expect } from "../../src/fixtures/pageFixture";

/**
 * E2E Tests - Login Page
 * Site: https://the-internet.herokuapp.com/login
 * QA Pulse by SK - www.skakarh.com
 *
 * Tags: @smoke @e2e @regression @critical
 */
test.describe("Login Page", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();
  });

  test("should login with valid credentials @smoke @e2e @critical", async ({ loginPage }) => {
    await loginPage.login(
      process.env.TEST_USERNAME || "tomsmith",
      process.env.TEST_PASSWORD || "SuperSecretPassword!"
    );
    const isLoggedIn = await loginPage.isLoggedIn();
    expect(isLoggedIn).toBeTruthy();
  });

  test("should show error with invalid credentials @regression @e2e", async ({ loginPage }) => {
    await loginPage.login("wronguser", "wrongpassword");
    const message = await loginPage.getFlashMessage();
    expect(message).toContain("Your username is invalid");
  });

  test("should logout successfully @smoke @e2e @critical", async ({ loginPage }) => {
    await loginPage.login(
      process.env.TEST_USERNAME || "tomsmith",
      process.env.TEST_PASSWORD || "SuperSecretPassword!"
    );
    await loginPage.logout();
    const message = await loginPage.getFlashMessage();
    expect(message).toContain("You logged out");
  });
});
