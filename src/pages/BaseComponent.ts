import { type Locator, type Page } from "@playwright/test";

/**
 * BaseComponent - Abstract base class for reusable page components
 * QA Pulse by SK - www.skakarh.com
 *
 * Components like NavBar, Footer etc. extend this.
 * A component takes a root Locator + the Page instance.
 */
export abstract class BaseComponent {
  constructor(
    readonly page: Page,
    readonly root: Locator
  ) {}

  async isVisible(): Promise<boolean> {
    return this.root.isVisible();
  }

  async waitForVisible() {
    await this.root.waitFor({ state: "visible" });
  }
}
