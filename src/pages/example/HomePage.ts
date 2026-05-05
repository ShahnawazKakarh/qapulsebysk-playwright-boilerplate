import { type Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { NavBar } from "../../components/NavBar";

/**
 * HomePage - Page Object for the-internet.herokuapp.com home page
 * QA Pulse by SK - www.skakarh.com
 */
export class HomePage extends BasePage {
  // Components
  public navBar: NavBar;

  // Locators
  readonly heading = this.page.locator("h1.heading");
  readonly subHeading = this.page.locator("h2");
  readonly links = this.page.locator("ul li a");

  constructor(page: Page) {
    super(page);
    this.navBar = new NavBar(page, page.locator("body"));
  }

  async open() {
    await super.open("/");
  }

  async getHeadingText(): Promise<string> {
    return this.heading.innerText();
  }

  async getAllLinkTexts(): Promise<string[]> {
    return this.links.allInnerTexts();
  }

  async clickLink(linkText: string) {
    await this.page.getByRole("link", { name: linkText }).click();
  }
}
