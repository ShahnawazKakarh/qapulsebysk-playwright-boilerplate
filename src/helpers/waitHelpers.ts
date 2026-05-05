import { type Page } from "@playwright/test";

/**
 * Wait Helpers - Custom wait utilities
 * QA Pulse by SK - www.skakarh.com
 */
export async function waitForUrl(page: Page, urlPattern: string | RegExp, timeout = 10000) {
  await page.waitForURL(urlPattern, { timeout });
}

export async function waitForText(page: Page, text: string, timeout = 10000) {
  await page.getByText(text).waitFor({ state: "visible", timeout });
}

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
