import { type Page } from "@playwright/test";

/**
 * BasePage - Abstract base class for all Page Objects
 * QA Pulse by SK - www.skakarh.com
 *
 * All page classes extend this. Provides shared navigation,
 * wait helpers, and common interactions.
 */
export abstract class BasePage {
  constructor(readonly page: Page) {}

  async open(path: string = "/") {
    await this.page.goto(path);
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState("networkidle");
  }

  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `test-results/${name}.png` });
  }
}
