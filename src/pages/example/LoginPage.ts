import { type Page } from "@playwright/test";
import { BasePage } from "../BasePage";

/**
 * LoginPage - Page Object for the-internet.herokuapp.com/login
 * QA Pulse by SK - www.skakarh.com
 */
export class LoginPage extends BasePage {
  readonly usernameInput = this.page.locator("#username");
  readonly passwordInput = this.page.locator("#password");
  readonly loginButton = this.page.locator("button[type='submit']");
  readonly flashMessage = this.page.locator("#flash");
  readonly logoutButton = this.page.locator("a[href='/logout']");

  constructor(page: Page) {
    super(page);
  }

  async open() {
    await super.open("/login");
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getFlashMessage(): Promise<string> {
    return this.flashMessage.innerText();
  }

  async isLoggedIn(): Promise<boolean> {
    return this.logoutButton.isVisible();
  }

  async logout() {
    await this.logoutButton.click();
  }
}
