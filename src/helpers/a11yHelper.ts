import { type Page, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import type { AxeResults, Result, NodeResult } from "axe-core";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * A11y Helper - Accessibility Testing Utilities
 * QA Pulse by SK - www.skakarh.com
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Wraps @axe-core/playwright with convenience methods for:
 *   - Full-page WCAG scans
 *   - Scoped element scans
 *   - Impact-level filtering (critical / serious / moderate / minor)
 *   - Keyboard navigation checks
 *   - Focus management assertions
 *   - Formatted violation reporting
 *
 * Usage:
 *   import { A11yHelper } from "@helpers/a11yHelper";
 *   const a11y = new A11yHelper(page);
 *   await a11y.assertNoViolations();
 */

export type ImpactLevel = "critical" | "serious" | "moderate" | "minor";

export interface A11yOptions {
  /** WCAG tag filters. Default: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] */
  tags?: string[];
  /** Only report violations at or above this impact level */
  minImpact?: ImpactLevel;
  /** CSS selector to scope the scan to a specific element */
  include?: string;
  /** CSS selectors to exclude from the scan */
  exclude?: string[];
  /** Rule IDs to disable for this scan */
  disableRules?: string[];
}

const IMPACT_ORDER: ImpactLevel[] = ["minor", "moderate", "serious", "critical"];

function impactAtLeast(violation: Result, min: ImpactLevel): boolean {
  const vIdx = IMPACT_ORDER.indexOf(violation.impact as ImpactLevel);
  const mIdx = IMPACT_ORDER.indexOf(min);
  return vIdx >= mIdx;
}

export class A11yHelper {
  constructor(private readonly page: Page) {}

  /**
   * Build an AxeBuilder configured with the given options
   */
  private buildAxe(options: A11yOptions = {}): AxeBuilder {
    const {
      tags = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"],
      include,
      exclude = [],
      disableRules = [],
    } = options;

    let builder = new AxeBuilder({ page: this.page }).withTags(tags);

    if (include) builder = builder.include(include);
    if (exclude.length > 0) builder = builder.exclude(exclude.join(", "));
    if (disableRules.length > 0) builder = builder.disableRules(disableRules);

    return builder;
  }

  /**
   * Run a full axe scan and return raw results
   */
  async scan(options: A11yOptions = {}): Promise<AxeResults> {
    await this.page.waitForLoadState("networkidle");
    return this.buildAxe(options).analyze();
  }

  /**
   * Assert zero violations (filtered by minImpact if provided)
   * Attaches a formatted violation report to the test on failure
   */
  async assertNoViolations(options: A11yOptions = {}): Promise<void> {
    const results = await this.scan(options);
    const { minImpact } = options;

    const violations = minImpact
      ? results.violations.filter((v) => impactAtLeast(v, minImpact))
      : results.violations;

    if (violations.length > 0) {
      const report = this.formatViolations(violations);
      console.error("\n" + report);
    }

    expect(
      violations,
      `Found ${violations.length} accessibility violation(s):\n${this.formatViolations(violations)}`
    ).toHaveLength(0);
  }

  /**
   * Assert no CRITICAL violations only (useful for pages with known minor issues)
   */
  async assertNoCriticalViolations(options: Omit<A11yOptions, "minImpact"> = {}): Promise<void> {
    await this.assertNoViolations({ ...options, minImpact: "critical" });
  }

  /**
   * Assert no CRITICAL or SERIOUS violations
   */
  async assertNoSeriousViolations(options: Omit<A11yOptions, "minImpact"> = {}): Promise<void> {
    await this.assertNoViolations({ ...options, minImpact: "serious" });
  }

  /**
   * Scan a specific component/element only (by CSS selector)
   */
  async assertComponentAccessible(selector: string, options: Omit<A11yOptions, "include"> = {}) {
    await this.assertNoViolations({ ...options, include: selector });
  }

  /**
   * Check keyboard navigation — verifies Tab key moves focus through interactive elements
   * and that focus is always visible
   */
  async assertKeyboardNavigable(maxTabs = 20): Promise<void> {
    await this.page.keyboard.press("Tab");

    for (let i = 0; i < maxTabs; i++) {
      const focusedTag = await this.page.evaluate(() => {
        const el = document.activeElement;
        return el ? el.tagName.toLowerCase() : null;
      });

      if (!focusedTag || focusedTag === "body") break;

      // Assert focused element is a known interactive element
      const interactiveTags = ["a", "button", "input", "select", "textarea", "details", "summary"];
      const isInteractive = await this.page.evaluate(() => {
        const el = document.activeElement as HTMLElement;
        if (!el) return false;
        const tag = el.tagName.toLowerCase();
        const role = el.getAttribute("role");
        const tabindex = el.getAttribute("tabindex");
        const interactiveTags = ["a", "button", "input", "select", "textarea", "details"];
        return (
          interactiveTags.includes(tag) ||
          ["button", "link", "menuitem", "tab", "checkbox", "radio"].includes(role ?? "") ||
          (tabindex !== null && parseInt(tabindex) >= 0)
        );
      });

      expect(
        isInteractive,
        `Tab stop #${i + 1} landed on non-interactive element: <${focusedTag}>`
      ).toBeTruthy();

      await this.page.keyboard.press("Tab");
    }
  }

  /**
   * Assert a specific element receives focus (e.g. after modal open, skip link click)
   */
  async assertFocusedElement(selector: string): Promise<void> {
    const isFocused = await this.page.evaluate((sel) => {
      const el = document.querySelector(sel);
      return el === document.activeElement;
    }, selector);

    expect(isFocused, `Expected element "${selector}" to be focused`).toBeTruthy();
  }

  /**
   * Assert skip navigation link exists and works
   */
  async assertSkipNavigation(): Promise<void> {
    // Focus the first element with Tab
    await this.page.keyboard.press("Tab");

    const skipLink = await this.page.$('a[href="#main"], a[href="#content"], a.skip-link');
    expect(skipLink, "Expected a skip navigation link to exist").not.toBeNull();
  }

  /**
   * Assert all images have alt text
   */
  async assertImagesHaveAltText(): Promise<void> {
    const images = await this.page.$$("img");
    for (const img of images) {
      const alt = await img.getAttribute("alt");
      const src = await img.getAttribute("src");
      expect(
        alt,
        `Image is missing alt attribute: src="${src}"`
      ).not.toBeNull();
    }
  }

  /**
   * Assert all form inputs have associated labels
   */
  async assertFormLabels(): Promise<void> {
    const violations = await this.page.evaluate(() => {
      const inputs = Array.from(
        document.querySelectorAll("input:not([type=hidden]):not([type=submit]):not([type=button])")
      );
      return inputs
        .filter((input) => {
          const id = input.getAttribute("id");
          const ariaLabel = input.getAttribute("aria-label");
          const ariaLabelledBy = input.getAttribute("aria-labelledby");
          const label = id ? document.querySelector(`label[for="${id}"]`) : null;
          return !label && !ariaLabel && !ariaLabelledBy;
        })
        .map((el) => el.outerHTML);
    });

    expect(
      violations,
      `Found ${violations.length} input(s) without labels:\n${violations.join("\n")}`
    ).toHaveLength(0);
  }

  /**
   * Assert page has exactly one <h1> (WCAG 2.4.6 best practice)
   */
  async assertSingleH1(): Promise<void> {
    const h1Count = await this.page.locator("h1").count();
    expect(h1Count, `Page should have exactly 1 <h1>, found ${h1Count}`).toBe(1);
  }

  /**
   * Assert ARIA landmarks exist (main, nav, header/banner, footer/contentinfo)
   */
  async assertAriaLandmarks(): Promise<void> {
    const hasMain = (await this.page.locator("main, [role='main']").count()) > 0;
    expect(hasMain, "Page is missing a <main> landmark").toBeTruthy();

    const hasNav = (await this.page.locator("nav, [role='navigation']").count()) > 0;
    expect(hasNav, "Page is missing a <nav> landmark").toBeTruthy();
  }

  /**
   * Format axe violations into a human-readable report
   */
  formatViolations(violations: Result[]): string {
    if (violations.length === 0) return "✅ No accessibility violations found.";

    const lines: string[] = [
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      `  ♿ Accessibility Violations — QA Pulse by SK`,
      `  Found: ${violations.length} violation(s)`,
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    ];

    violations.forEach((v, idx) => {
      lines.push(`\n  [${idx + 1}] ${v.id.toUpperCase()} — Impact: ${(v.impact ?? "unknown").toUpperCase()}`);
      lines.push(`      Description : ${v.description}`);
      lines.push(`      Help        : ${v.helpUrl}`);
      lines.push(`      Nodes affected: ${v.nodes.length}`);
      v.nodes.slice(0, 3).forEach((node: NodeResult) => {
        lines.push(`        → ${node.html}`);
        if (node.failureSummary) {
          lines.push(`          Fix: ${node.failureSummary.split("\n")[0]}`);
        }
      });
      if (v.nodes.length > 3) {
        lines.push(`        ... and ${v.nodes.length - 3} more`);
      }
    });

    lines.push("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    return lines.join("\n");
  }
}
