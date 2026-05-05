# Accessibility Testing Guide
**QA Pulse by SK — Playwright Boilerplate**
🌐 www.skakarh.com

---

## Overview

This boilerplate includes a production-grade accessibility testing layer using `@axe-core/playwright`. It covers:

- ♿ WCAG 2.1 A & AA compliance
- ⌨️ Keyboard navigation
- 🏷️ ARIA landmarks & roles
- 🖼️ Image alt text
- 📝 Form label association
- 🎨 Colour contrast
- 🎯 Focus management
- 🔤 Heading structure

---

## The A11yHelper Class

Located at `src/helpers/a11yHelper.ts`. Wraps axe-core with convenience methods:

```typescript
const a11y = new A11yHelper(page);

// Full WCAG 2.1 AA scan
await a11y.assertNoViolations();

// Only critical violations
await a11y.assertNoCriticalViolations();

// Scoped to one component
await a11y.assertComponentAccessible("nav");

// Keyboard navigation
await a11y.assertKeyboardNavigable();

// Images have alt text
await a11y.assertImagesHaveAltText();

// Form inputs have labels
await a11y.assertFormLabels();

// Single H1
await a11y.assertSingleH1();

// ARIA landmarks present
await a11y.assertAriaLandmarks();
```

---

## Impact Levels

| Level | Description | When to use |
|-------|-------------|-------------|
| `critical` | Blocks disabled users entirely | Must fix before release |
| `serious` | Very difficult to work around | Should fix before release |
| `moderate` | Some workaround exists | Fix in next sprint |
| `minor` | Low impact | Fix when possible |

---

## Running A11y Tests

```bash
# All accessibility tests
npm run test:a11y

# Smoke a11y only (critical tests)
npx playwright test --grep "@a11y @smoke"

# Specific test
npx playwright test tests/accessibility --grep "skakarh"
```

---

## Interpreting Violations

The `A11yHelper.formatViolations()` method prints:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ♿ Accessibility Violations — QA Pulse by SK
  Found: 2 violation(s)

  [1] COLOR-CONTRAST — Impact: SERIOUS
      Description : Elements must have sufficient color contrast
      Help        : https://dequeuniversity.com/...
      Nodes: 3
        → <p class="muted-text">Some text</p>
          Fix: Element has insufficient color contrast of 3.5...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## WCAG Tags Reference

| Tag | Standard |
|-----|----------|
| `wcag2a` | WCAG 2.0 Level A |
| `wcag2aa` | WCAG 2.0 Level AA |
| `wcag21a` | WCAG 2.1 Level A |
| `wcag21aa` | WCAG 2.1 Level AA |
| `wcag22aa` | WCAG 2.2 Level AA |
| `best-practice` | axe best practices |
| `cat.color` | Color contrast only |
