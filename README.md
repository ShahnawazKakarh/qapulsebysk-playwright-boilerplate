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

## 🌿 Choose Your Language

> **Two parallel branches — same features, different language. Pick yours and clone directly.**

| Branch | Language | Clone Command |
|--------|----------|---------------|
| ✅ [`master`](https://github.com/QAPulse-by-SK/playwright-boilerplate/tree/master) ← **You are here** | **TypeScript** | `git clone https://github.com/QAPulse-by-SK/playwright-boilerplate.git` |
| 🟡 [`javascript`](https://github.com/QAPulse-by-SK/playwright-boilerplate/tree/javascript) | **JavaScript** | `git clone -b javascript https://github.com/QAPulse-by-SK/playwright-boilerplate.git` |

> ⚠️ These branches are **independent** and are never merged into each other. See [BRANCHES.md](./BRANCHES.md) for full details.

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
| 🔧 **Advanced** | Network interception · Data-driven · Drag & drop · JS alerts · Viewport testing |

---

## 📁 Project Structure

```
playwright-boilerplate/
│
├── 📂 .github/workflows/
│   └── playwright.yml              # Sharded CI + GitHub Pages + PR comments
├── 📂 ci/
│   ├── Jenkinsfile
│   └── azure-pipelines.yml
├── 📂 docs/
│   ├── ARCHITECTURE.md
│   ├── REPORTING.md
│   └── ACCESSIBILITY.md
├── 📂 src/
│   ├── pages/                      # BasePage + page objects
│   ├── components/                 # Reusable UI components
│   ├── api/                        # ApiClient + endpoint classes
│   ├── fixtures/                   # pageFixture + apiFixture
│   ├── helpers/                    # a11yHelper, waitHelpers, randomData
│   ├── constants/                  # URLS, ROUTES, CREDENTIALS, TAGS
│   ├── types/                      # Shared TypeScript interfaces
│   └── utils/                      # logger
├── 📂 tests/
│   ├── e2e/                        # UI tests + advanced examples
│   ├── api/                        # API tests
│   ├── visual/                     # Visual regression
│   ├── accessibility/              # Axe-core a11y tests
│   └── component/                  # Component tests
├── 📂 reporters/
│   └── jsonSummary.js
├── 📂 test-data/
│   └── users.json
├── global-setup.ts
├── global-teardown.ts
├── .env.example
├── playwright.config.ts
├── tsconfig.json
├── BRANCHES.md
├── CONTRIBUTING.md
├── CHANGELOG.md
└── README.md
```

---

## 🚀 Quick Start

```bash
# Clone (TypeScript)
git clone https://github.com/QAPulse-by-SK/playwright-boilerplate.git
cd playwright-boilerplate
npm install
npx playwright install
cp .env.example .env
npm test
```

---

## 🧪 Running Tests

```bash
npm run test:e2e          # E2E UI tests
npm run test:api          # API tests
npm run test:visual       # Visual regression
npm run test:a11y         # Accessibility
npm run test:component    # Component tests
npm run test:smoke        # @smoke tag
npm run test:regression   # @regression tag
npm run test:critical     # @critical tag
npm run test:chromium     # Chrome only
npm run test:firefox      # Firefox only
npm run test:webkit       # Safari only
npm run test:debug        # Debugger
npm run test:headed       # Watch in browser
npm run test:update-snapshots  # Regenerate visual baselines
```

---

## 📊 Reporting

```bash
npm run report:html       # Playwright HTML report
npm run report:allure     # Allure dashboard
npm run report:json       # Terminal summary
```

---

## ♿ Accessibility Testing

```typescript
const a11y = new A11yHelper(page);
await a11y.assertNoViolations();           // Full WCAG 2.1 AA
await a11y.assertNoCriticalViolations();   // Critical only
await a11y.assertKeyboardNavigable();      // Tab order
await a11y.assertImagesHaveAltText();      // Alt text
await a11y.assertFormLabels();             // Label association
await a11y.assertSingleH1();              // Heading structure
await a11y.assertAriaLandmarks();         // ARIA landmarks
await a11y.assertComponentAccessible("nav"); // Scoped scan
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

## 🔁 CI/CD

- **GitHub Actions** — Sharded · GitHub Pages · PR comments
- **Jenkins** — `ci/Jenkinsfile`
- **Azure DevOps** — `ci/azure-pipelines.yml`

---

## 🤝 Contributing

- TypeScript → PR to `master`
- JavaScript → PR to `javascript`
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
