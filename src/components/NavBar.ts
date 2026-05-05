import { type Page, type Locator } from "@playwright/test";
import { BaseComponent } from "../pages/BaseComponent";

/**
 * NavBar Component - Reusable navigation bar component
 * QA Pulse by SK - www.skakarh.com
 */
export class NavBar extends BaseComponent {
  constructor(page: Page, root: Locator) {
    super(page, root);
  }
}
