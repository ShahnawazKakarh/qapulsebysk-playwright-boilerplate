# Reporting Guide
**QA Pulse by SK — Playwright Boilerplate**
🌐 www.skakarh.com

---

## Available Reporters

| Reporter | Output | Command |
|----------|--------|---------|
| HTML (Playwright) | `playwright-report/index.html` | `npm run report:html` |
| Allure | `allure-report/` | `npm run report:allure` |
| JSON Summary | Terminal | `npm run report:json` |
| JUnit XML | `test-results/junit.xml` | *(auto, for CI)* |

---

## HTML Report
Auto-generated after every run. Opens on failure locally.
```bash
npm run report:html
```

---

## Allure Report

### Prerequisites
```bash
npm install -g allure-commandline
```

### Generate + Open
```bash
npm run report:allure
```

### What Allure Shows
- Test history & trends
- `test.step()` breakdown
- Screenshots/videos on failure
- Environment info
- Suite categorization

---

## JUnit XML (CI)
Used by **Jenkins** and **Azure DevOps** to display test results inline.
Auto-generated to `test-results/junit.xml` when `CI=true`.

---

## GitHub Pages (CI)
On every push to `main`, the GitHub Actions workflow:
1. Runs tests across 4 shards
2. Merges blob reports
3. Publishes HTML report to GitHub Pages
4. Comments the report URL on the PR

---

## Custom JSON Summary
```bash
npm run report:json
```
Prints:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🎭  QA Pulse by SK — Playwright Summary
  ✅  Passed  : 42
  ❌  Failed  : 0
  ⏭️   Skipped : 2
  📈  Pass %  : 100.0%
  ⏱️   Duration: 38.2s
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```
