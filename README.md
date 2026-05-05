<div align="center">

<img src="https://img.shields.io/badge/QA%20Pulse%20by%20SK-Playwright%20Boilerplate-3b82f6?style=for-the-badge&logo=playwright&logoColor=white" alt="QA Pulse by SK" height="40"/>

# 🎭 QA Pulse by SK — Playwright Boilerplate

**A production-grade, community-ready Playwright test automation framework**
**Fork it. Clone it. Ship quality code faster.**

<br/>

[![Playwright Tests](https://github.com/ShahnawazKakarh/qapulsebysk-playwright-boilerplate/actions/workflows/playwright.yml/badge.svg)](https://github.com/ShahnawazKakarh/qapulsebysk-playwright-boilerplate/actions/workflows/playwright.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-22c55e.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-22c55e?logo=node.js&logoColor=white)](https://nodejs.org)
[![Playwright](https://img.shields.io/badge/Playwright-1.46%2B-3b82f6?logo=playwright&logoColor=white)](https://playwright.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5%2B-3b82f6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-a78bfa.svg)](./CONTRIBUTING.md)

<br/>

🌐 **[www.skakarh.com](https://www.skakarh.com)** &nbsp;|&nbsp; 👤 **[ShahnawazKakarh](https://github.com/ShahnawazKakarh)** &nbsp;|&nbsp; ⭐ **Star this repo if it helped you!**

</div>

---

## 🌿 Choose Your Language

> **Two parallel branches — same features, different language. Pick yours and clone directly.**

| Branch | Language | Clone Command |
|--------|----------|---------------|
| ✅ [`main`](https://github.com/ShahnawazKakarh/qapulsebysk-playwright-boilerplate/tree/main) ← **You are here** | **TypeScript** | `git clone https://github.com/ShahnawazKakarh/qapulsebysk-playwright-boilerplate.git` |
| 🟡 [`javascript`](https://github.com/ShahnawazKakarh/qapulsebysk-playwright-boilerplate/tree/javascript) | **JavaScript** | `git clone -b javascript https://github.com/ShahnawazKakarh/qapulsebysk-playwright-boilerplate.git` |

> ⚠️ These branches are **independent** and are never merged into each other. See [BRANCHES.md](./BRANCHES.md) for full details.

---

## 🧭 What Is This?

This is a **fully wired, ready-to-fork Playwright boilerplate** built by **[QA Pulse by SK](https://www.skakarh.com)**. Instead of starting from zero every project, fork this and get:

- ✅ Folder structure already decided
- ✅ Page Object Model wired up with BasePage + BaseComponent
- ✅ API testing layer with ApiClient + endpoint classes
- ✅ Visual regression with baseline management
- ✅ Accessibility testing — WCAG 2.1 AA, keyboard nav, ARIA, focus, labels
- ✅ 4 reporters out of the box — HTML, Allure, JUnit, JSON + custom summary
- ✅ GitHub Actions (sharded + GitHub Pages), Jenkins, Azure DevOps
- ✅ Global setup/teardown with auth state management
- ✅ Constants, Types, Logger utility
- ✅ ESLint + Prettier + TypeScript strict mode
- ✅ dotenv — no hardcoded secrets ever

---

## ✨ Features At A Glance

| Category | What's Included |
|---|---|
| 🏗️ **Architecture** | Page Object Model, BaseComponent, Custom Fixtures |
| 🌐 **E2E Testing** | Multi-browser: Chromium, Firefox, WebKit, Mobile |
| 🔌 **API Testing** | ApiClient base class + endpoint layer |
| 📸 **Visual Regression** | `toHaveScreenshot()` with baseline management |
| ♿ **Accessibility** | axe-core WCAG 2.1 AA · keyboard nav · ARIA · focus · form labels · H1 · colour contrast |
| 🧩 **Component Testing** | Isolated component specs |
| 📊 **Reporting** | HTML + Allure + JUnit + JSON + Custom Terminal Summary |
| 🏷️ **Test Tags** | `@smoke` `@regression` `@sanity` `@e2e` `@api` `@visual` `@a11y` `@component` `@critical` `@slow` |
| 🔁 **CI/CD** | GitHub Actions (sharded + GitHub Pages + PR comments) · Jenkins · Azure DevOps |
| 🛡️ **Code Quality** | ESLint · Prettier · TypeScript strict |
| 🔐 **Config** | dotenv · `.env.example` · env-based baseURL |
| 🪵 **Logging** | Colour-coded logger with timestamps |
| 🔧 **Advanced** | Network interception · Data-driven tests · Drag & drop · JS alerts · Viewport testing |

---

## 📁 Project Structure

```
qapulsebysk-playwright-boilerplate/
│
├── 📂 .github/workflows/
│   └── playwright.yml              # Sharded CI + GitHub Pages + PR comments
│
├── 📂 ci/
│   ├── Jenkinsfile                 # Jenkins declarative pipeline
│   └── azure-pipelines.yml        # Azure DevOps multi-browser pipeline
│
├── 📂 docs/
│   ├── ARCHITECTURE.md            # Layer architecture guide
│   ├── REPORTING.md               # Reporter setup & usage
│   └── ACCESSIBILITY.md           # Full a11y testing guide
│
├── 📂 src/
│   ├── pages/
│   │   ├── BasePage.ts             # Abstract base — all pages extend this
│   │   ├── BaseComponent.ts        # Abstract base — all components extend this
│   │   └── example/
│   │       ├── HomePage.ts
│   │       └── LoginPage.ts
│   ├── components/
│   │   └── NavBar.ts
│   ├── api/
│   │   ├── ApiClient.ts            # Base API client (GET/POST/PUT/PATCH/DELETE)
│   │   └── endpoints/
│   │       └── PostsApi.ts
│   ├── fixtures/
│   │   ├── pageFixture.ts          # Single import for all page objects
│   │   └── apiFixture.ts
│   ├── helpers/
│   │   ├── a11yHelper.ts           # Full accessibility helper (10+ methods)
│   │   ├── waitHelpers.ts
│   │   ├── randomData.ts
│   │   └── dateHelpers.ts
│   ├── constants/
│   │   └── index.ts                # URLS, ROUTES, CREDENTIALS, TIMEOUTS, TAGS
│   ├── types/
│   │   └── index.ts                # Shared TypeScript interfaces
│   └── utils/
│       └── logger.ts               # Colour-coded structured logger
│
├── 📂 tests/
│   ├── e2e/
│   │   ├── home.spec.ts
│   │   ├── login.spec.ts
│   │   └── advanced/
│   │       └── advanced.spec.ts    # Network intercept, data-driven, drag-drop, alerts
│   ├── api/
│   │   └── posts.spec.ts
│   ├── visual/
│   │   └── homepage.visual.spec.ts
│   ├── accessibility/
│   │   └── homepage.a11y.spec.ts   # WCAG, keyboard, ARIA, focus, labels, contrast
│   └── component/
│       └── navbar.component.spec.ts
│
├── 📂 reporters/
│   └── jsonSummary.js              # Custom terminal summary reporter
│
├── 📂 test-data/
│   └── users.json
│
├── global-setup.ts                 # Login once, save auth state, create dirs
├── global-teardown.ts
├── .env.example                    # Environment variables template
├── playwright.config.ts            # Master Playwright config
├── tsconfig.json
├── .eslintrc.json
├── .prettierrc.json
├── BRANCHES.md                     # Branch guide — TS vs JS
├── CONTRIBUTING.md
├── CHANGELOG.md
└── README.md
```

---

## 🚀 Quick Start

### 1. Fork & Clone (TypeScript)

```bash
git clone https://github.com/ShahnawazKakarh/qapulsebysk-playwright-boilerplate.git
cd qapulsebysk-playwright-boilerplate
```

### 2. Install

```bash
npm install
npx playwright install
```

### 3. Configure Environment

```bash
cp .env.example .env
# Edit .env with your values
```

### 4. Run Tests

```bash
npm test
```

---

## 🧪 Running Tests

### By Type
```bash
npm run test:e2e          # End-to-end UI tests (Chromium)
npm run test:api          # API tests
npm run test:visual       # Visual regression
npm run test:a11y         # Accessibility tests
npm run test:component    # Component tests
```

### By Tag
```bash
npm run test:smoke        # @smoke — fast sanity check
npm run test:regression   # @regression — full suite
npm run test:sanity       # @sanity
npm run test:critical     # @critical — must-pass tests
```

### By Browser
```bash
npm run test:chromium
npm run test:firefox
npm run test:webkit
```

### Debug & Dev
```bash
npm run test:debug
npm run test:headed
npm run test:update-snapshots
```

---

## 📊 Reporting

```bash
npm run report:html           # Open Playwright HTML report
npm run report:allure         # Generate + open Allure dashboard
npm run report:json           # Terminal summary (pass/fail/skip counts)
```

See [docs/REPORTING.md](./docs/REPORTING.md) for full details.

---

## ♿ Accessibility Testing

Powered by `@axe-core/playwright` via the `A11yHelper` class:

```typescript
const a11y = new A11yHelper(page);

await a11y.assertNoViolations();              // Full WCAG 2.1 AA scan
await a11y.assertNoCriticalViolations();      // Critical only
await a11y.assertKeyboardNavigable();         // Tab order check
await a11y.assertImagesHaveAltText();         // Alt text check
await a11y.assertFormLabels();                // Label association
await a11y.assertSingleH1();                  // Heading structure
await a11y.assertAriaLandmarks();             // main + nav landmarks
await a11y.assertComponentAccessible("nav");  // Scoped scan
```

See [docs/ACCESSIBILITY.md](./docs/ACCESSIBILITY.md) for full guide.

---

## ✍️ Writing Your First Test

```typescript
// src/pages/example/MyPage.ts
import { BasePage } from "../BasePage";
export class MyPage extends BasePage {
  readonly heading = this.page.locator("h1");
  async open() { await super.open("/my-page"); }
  async getHeading() { return this.heading.innerText(); }
}

// src/fixtures/pageFixture.ts — add:
myPage: async ({ page }, use) => { await use(new MyPage(page)); }

// tests/e2e/my-page.spec.ts
import { test, expect } from "../../src/fixtures/pageFixture";
test("page heading @smoke @e2e", async ({ myPage }) => {
  await myPage.open();
  expect(await myPage.getHeading()).toBe("My Title");
});
```

---

## 🏷️ Test Tags Reference

| Tag | Usage |
|-----|-------|
| `@smoke` | Quick sanity — run before every deploy |
| `@regression` | Full suite — run on PRs and nightly |
| `@sanity` | Post-deploy health check |
| `@critical` | Must-pass — failures block release |
| `@e2e` | End-to-end UI tests |
| `@api` | API-only tests |
| `@visual` | Visual regression |
| `@a11y` | Accessibility |
| `@component` | Component-level |
| `@slow` | Long-running tests |

Run any tag: `npx playwright test --grep @critical`

---

## ⚙️ Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `BASE_URL` | `https://the-internet.herokuapp.com` | E2E test target |
| `BRAND_URL` | `https://www.skakarh.com` | Brand site for visual/a11y |
| `API_BASE_URL` | `https://jsonplaceholder.typicode.com` | API test base |
| `TEST_USERNAME` | `tomsmith` | Login test username |
| `TEST_PASSWORD` | `SuperSecretPassword!` | Login test password |
| `CI` | _(auto-set)_ | Switches to CI reporter mode |

---

## 🔁 CI/CD

### GitHub Actions
Auto-triggers on push to `master` and all PRs. Runs 4 parallel shards, publishes HTML report to GitHub Pages, comments report link on PRs.

### Jenkins
Use `ci/Jenkinsfile` in your Jenkins pipeline.

### Azure DevOps
Use `ci/azure-pipelines.yml` in your Azure DevOps pipeline.

---

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

- TypeScript fixes/features → PR to `main`
- JavaScript fixes/features → PR to `javascript`
- See [BRANCHES.md](./BRANCHES.md) for branch strategy

---

## 📄 License

MIT © [QA Pulse by SK](https://www.skakarh.com)

---

<div align="center">

**Built with ❤️ by [QA Pulse by SK](https://www.skakarh.com)**

🌐 [skakarh.com](https://www.skakarh.com) &nbsp;·&nbsp; 🐙 [GitHub](https://github.com/ShahnawazKakarh) &nbsp;·&nbsp; ⭐ Star this repo if it helped you!

*Created by QA Pulse by SK · skakarh.com*

</div>
