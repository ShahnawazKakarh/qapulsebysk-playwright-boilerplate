<div align="center">

<img src="https://img.shields.io/badge/QA%20Pulse%20by%20SK-Playwright%20Boilerplate-3b82f6?style=for-the-badge&logo=playwright&logoColor=white" alt="QA Pulse by SK" height="40"/>

# 🎭 QA Pulse by SK — Playwright Boilerplate

**A production-grade, community-ready Playwright test automation framework**
**Fork it. Clone it. Ship quality code faster.**

<br/>

[![Playwright Tests](https://github.com/QAPulse-by-SK/playwright-boilerplate/actions/workflows/playwright.yml/badge.svg)](https://github.com/QAPulse-by-SK/playwright-boilerplate/actions/workflows/playwright.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-22c55e.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-22c55e?logo=node.js&logoColor=white)](https://nodejs.org)
[![Playwright](https://img.shields.io/badge/Playwright-1.46%2B-3b82f6?logo=playwright&logoColor=white)](https://playwright.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5%2B-3b82f6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-a78bfa.svg)](./CONTRIBUTING.md)

<br/>

🌐 **[www.skakarh.com](https://www.skakarh.com)** &nbsp;|&nbsp; 🏢 **[QAPulse-by-SK](https://github.com/QAPulse-by-SK)** &nbsp;|&nbsp; ⭐ **Star this repo if it helped you!**

</div>

---

## 🌿 Choose Your Branch

| Branch | Description | Clone Command |
|--------|-------------|---------------|
| ✅ [`master`](https://github.com/QAPulse-by-SK/playwright-boilerplate/tree/master) | **TypeScript** — core boilerplate | `git clone https://github.com/QAPulse-by-SK/playwright-boilerplate.git` |
| 🟡 [`javascript`](https://github.com/QAPulse-by-SK/playwright-boilerplate/tree/javascript) | **JavaScript** — same features | `git clone -b javascript https://github.com/QAPulse-by-SK/playwright-boilerplate.git` |
| 🔵 [`with-packages`](https://github.com/QAPulse-by-SK/playwright-boilerplate/tree/with-packages) ← **You are here** | **TS + QAPulseSK Packages** | `git clone -b with-packages https://github.com/QAPulse-by-SK/playwright-boilerplate.git` |

> ⚠️ Branches are **independent** and never merged into each other. See [BRANCHES.md](./BRANCHES.md)

---

## 📦 QAPulseSK Packages — Integrated & Tested

> This branch integrates and tests the official **QAPulse by SK** npm packages against real-world applications.

### `qapulsesk-assert` — Assertion Library
[![npm](https://img.shields.io/badge/npm-qapulsesk--assert-cb0000?logo=npm)](https://www.npmjs.com/package/qapulsesk-assert)

All-in-one assertion library for Playwright, Cypress, Jest, Vitest & WebdriverIO.

```typescript
import { qaPulseAssert, assertFuzzyMatch, assertSchema, assertResponseTime } from "qapulsesk-assert";

const qa = qaPulseAssert(page);

// Fuzzy text matching — handles typos and dynamic content
await qa.toFuzzyHaveText("h1", "Welcome to the internet", { threshold: 0.8 });

// API schema validation
assertSchema(response, { id: "number", title: "string", body: "string" });

// Performance SLA assertion
assertResponseTime({ status: 200, headers: {}, body: {}, duration: 1200 }, 5000);

// Zero-config accessibility check
await qa.toBeAccessible();
```

### `qapulsesk-report` — Custom Reporter
[![npm](https://img.shields.io/badge/npm-qapulsesk--report-cb0000?logo=npm)](https://www.npmjs.com/package/qapulsesk-report)

Dark-theme HTML reports, AI failure analysis, Slack/Teams webhooks.

```typescript
// playwright.config.ts
reporter: [["qapulsesk-report", {
  reportTitle: "My QA Report",
  openAfterGeneration: true,
  webhooks: { slack: { url: process.env.SLACK_WEBHOOK_URL } }
}]]
```

---

## 🏢 Real-World Testing — SuiteCRM Demo

This branch includes tests against **SuiteCRM** (real enterprise CRM):

```
tests/packages/
  ├── assert.spec.ts     — 23 tests, qapulsesk-assert on standard sites
  └── suitecrm.spec.ts   — 26 tests, qapulsesk-assert on real enterprise CRM
```

**Target:** `https://demo.suiteondemand.com` · Credentials: `will / will` (public demo)

**What's tested:**
- Auth (login/logout/session)
- Navigation (module titles, page routing)
- Accounts & Contacts (list columns, form fields, detail pages)
- Performance SLA (all pages load within 8s)
- Data integrity (object matching, batch content checks)
- Accessibility (real CRM violation detection)

---

## 🆚 qapulsesk-assert vs Standard Playwright

See **[docs/QAPULSESK-ASSERT-COMPARISON.md](./docs/QAPULSESK-ASSERT-COMPARISON.md)** for a full honest comparison.

**Summary of unique value:**

| Feature | Standard Playwright | qapulsesk-assert |
|---|---|---|
| Fuzzy text match | ❌ Write yourself | ✅ Built-in |
| API schema validation | ❌ N separate checks | ✅ One call |
| Response time SLA | ❌ Manual math | ✅ `assertResponseTime` |
| Accessibility check | ⚠️ Needs axe setup | ✅ Zero-config |
| AI semantic assertions | ❌ Does not exist | ✅ `toMean`, `satisfiesRule` |
| Cross-framework | ❌ Framework-locked | ✅ Works everywhere |

---

## 🧭 What Is This?

This is a **fully wired, ready-to-fork Playwright boilerplate** built by **[QA Pulse by SK](https://www.skakarh.com)**. Instead of starting from zero every project, fork this and get:

- ✅ Folder structure already decided
- ✅ Page Object Model with BasePage + BaseComponent
- ✅ API testing layer with ApiClient + endpoint classes
- ✅ Visual regression with baseline management
- ✅ Accessibility testing — WCAG 2.1 AA, keyboard nav, ARIA, focus, labels
- ✅ 4 reporters — HTML, Allure, JUnit, JSON + custom summary
- ✅ GitHub Actions (sharded + GitHub Pages), Jenkins, Azure DevOps
- ✅ Slack CI notifications
- ✅ Faker.js DataFactory — dynamic test data generation
- ✅ Global setup/teardown with auth state management
- ✅ ESLint + Prettier + TypeScript strict mode
- ✅ QAPulseSK packages integration (`with-packages` branch)

---

## ✨ Features At A Glance

| Category | What's Included |
|---|---|
| 🏗️ **Architecture** | Page Object Model, BaseComponent, Custom Fixtures |
| 🌐 **E2E Testing** | Multi-browser: Chromium, Firefox, WebKit, Mobile |
| 🔌 **API Testing** | ApiClient base class + endpoint layer |
| 📸 **Visual Regression** | `toHaveScreenshot()` with baseline management |
| ♿ **Accessibility** | axe-core WCAG 2.1 AA · keyboard nav · ARIA · focus · form labels |
| 🧩 **Component Testing** | Isolated component specs |
| 📊 **Reporting** | HTML + Allure + JUnit + JSON + Custom Terminal Summary |
| 🏷️ **Test Tags** | `@smoke` `@regression` `@sanity` `@e2e` `@api` `@visual` `@a11y` `@packages` `@suitecrm` |
| 🔁 **CI/CD** | GitHub Actions (sharded + GitHub Pages + PR comments) · Jenkins · Azure DevOps |
| 🔔 **Slack** | Pass/fail notifications via `SLACK_WEBHOOK_URL` secret |
| 🧪 **DataFactory** | Faker.js — createUser, createPost, createAddress, createProduct |
| 🛡️ **Code Quality** | ESLint · Prettier · TypeScript strict |
| 🪵 **Logging** | Colour-coded logger with timestamps |

---

## 📁 Project Structure

```
playwright-boilerplate/
├── 📂 .github/workflows/playwright.yml
├── 📂 ci/ (Jenkinsfile + azure-pipelines.yml)
├── 📂 docs/
│   ├── ARCHITECTURE.md
│   ├── REPORTING.md
│   ├── ACCESSIBILITY.md
│   ├── SLACK-NOTIFICATIONS.md
│   └── QAPULSESK-ASSERT-COMPARISON.md  ← NEW
├── 📂 src/
│   ├── pages/                    # BasePage + page objects
│   ├── api/                      # ApiClient + endpoints
│   ├── fixtures/                 # pageFixture + apiFixture
│   ├── helpers/                  # a11yHelper, waitHelpers, randomData, dataFactory
│   ├── constants/                # URLS, ROUTES, CREDENTIALS, TAGS
│   └── utils/                    # logger
├── 📂 tests/
│   ├── e2e/                      # UI tests + advanced examples
│   ├── api/                      # API tests
│   ├── visual/                   # Visual regression
│   ├── accessibility/            # Axe-core a11y tests
│   ├── component/                # Component tests
│   └── packages/                 # QAPulseSK packages tests ← NEW
│       ├── assert.spec.ts        # 23 tests — qapulsesk-assert
│       └── suitecrm.spec.ts      # 26 tests — SuiteCRM real-world
├── global-setup.ts
├── global-teardown.ts
├── playwright.config.ts
└── README.md
```

---

## 🚀 Quick Start

```bash
# TypeScript (master)
git clone https://github.com/QAPulse-by-SK/playwright-boilerplate.git
cd playwright-boilerplate
npm install
npx playwright install
cp .env.example .env
npm test

# With QAPulseSK packages (this branch)
git clone -b with-packages https://github.com/QAPulse-by-SK/playwright-boilerplate.git
cd playwright-boilerplate
npm install
npx playwright install
npm test

# Run package tests only
npx playwright test tests/packages/ --project=chromium
```

---

## 🧪 Running Tests

```bash
npm run test:e2e          # E2E UI tests
npm run test:api          # API tests
npm run test:a11y         # Accessibility
npm run test:smoke        # @smoke tag
npm run test:regression   # @regression tag
npm run test:chromium     # Chrome only
npm run test:headed       # Watch in browser

# Package tests (with-packages branch)
npx playwright test tests/packages/assert.spec.ts    # 23 assert tests
npx playwright test tests/packages/suitecrm.spec.ts  # 26 SuiteCRM tests
```

---

## 📊 Reporting

```bash
npm run report:html       # Playwright HTML report
npm run report:allure     # Allure dashboard
npm run report:json       # Terminal summary
```

---

## ⚙️ Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `BASE_URL` | `https://the-internet.herokuapp.com` | E2E target |
| `BRAND_URL` | `https://www.skakarh.com` | Visual/a11y site |
| `API_BASE_URL` | `https://jsonplaceholder.typicode.com` | API base |
| `TEST_USERNAME` | `tomsmith` | Login username |
| `TEST_PASSWORD` | `SuperSecretPassword!` | Login password |

---

## 🤝 Contributing

- TypeScript → PR to `master`
- JavaScript → PR to `javascript`
- Package tests → PR to `with-packages`
- See [BRANCHES.md](./BRANCHES.md) · [CONTRIBUTING.md](./CONTRIBUTING.md)

---

## 📄 License

MIT © [QA Pulse by SK](https://www.skakarh.com)

---

<div align="center">

**Built with ❤️ by [QA Pulse by SK](https://www.skakarh.com)**

🌐 [skakarh.com](https://www.skakarh.com) &nbsp;·&nbsp; 🏢 [QAPulse-by-SK](https://github.com/QAPulse-by-SK) &nbsp;·&nbsp; ⭐ Star if it helped!

*Created by QA Pulse by SK · skakarh.com*

</div>
