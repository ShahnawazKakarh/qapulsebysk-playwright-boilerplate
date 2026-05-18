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
| ✅ [`master`](https://github.com/QAPulse-by-SK/playwright-boilerplate/tree/master) ← **You are here** | **TypeScript** — core boilerplate | `git clone https://github.com/QAPulse-by-SK/playwright-boilerplate.git` |
| 🟡 [`javascript`](https://github.com/QAPulse-by-SK/playwright-boilerplate/tree/javascript) | **JavaScript** — same features | `git clone -b javascript https://github.com/QAPulse-by-SK/playwright-boilerplate.git` |
| 🔵 [`with-packages`](https://github.com/QAPulse-by-SK/playwright-boilerplate/tree/with-packages) | **TS + QAPulseSK packages** | `git clone -b with-packages https://github.com/QAPulse-by-SK/playwright-boilerplate.git` |

> ⚠️ Branches are **independent** — never merged. See [BRANCHES.md](./BRANCHES.md)

---

## 📦 QAPulseSK Packages (`with-packages` branch)

> Want to see the full ecosystem in action? Switch to the [`with-packages`](https://github.com/QAPulse-by-SK/playwright-boilerplate/tree/with-packages) branch which integrates all 3 QAPulseSK npm packages with **101 passing tests** against real-world sites including SuiteCRM.

| Package | What It Does |
|---------|--------------|
| [`qapulsesk-assert`](https://www.npmjs.com/package/qapulsesk-assert) | Fuzzy assertions, schema validation, AI-powered checks |
| [`qapulsesk-report`](https://www.npmjs.com/package/qapulsesk-report) | Dark-theme HTML reports, Slack webhooks, AI failure analysis |
| [`qapulsesk-gen`](https://www.npmjs.com/package/qapulsesk-gen) | HAR → tests, recordings → tests, plain English → tests |

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
| 🏷️ **Test Tags** | `@smoke` `@regression` `@sanity` `@e2e` `@api` `@visual` `@a11y` `@component` `@critical` |
| 🔁 **CI/CD** | GitHub Actions (sharded + Pages + PR comments) · Jenkins · Azure DevOps |
| 🔔 **Slack** | Pass/fail notifications via `SLACK_WEBHOOK_URL` secret |
| 🧪 **DataFactory** | Faker.js — createUser, createPost, createAddress, createProduct |
| 🛡️ **Code Quality** | ESLint · Prettier · TypeScript strict |
| 🪵 **Logging** | Colour-coded logger with timestamps |

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
│   ├── ACCESSIBILITY.md
│   └── SLACK-NOTIFICATIONS.md
├── 📂 src/
│   ├── pages/                      # BasePage + page objects
│   ├── components/                 # Reusable UI components
│   ├── api/                        # ApiClient + endpoint classes
│   ├── fixtures/                   # pageFixture + apiFixture
│   ├── helpers/                    # a11yHelper, waitHelpers, randomData, dataFactory
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
await a11y.assertNoViolations();
await a11y.assertNoCriticalViolations();
await a11y.assertKeyboardNavigable();
await a11y.assertImagesHaveAltText();
await a11y.assertFormLabels();
await a11y.assertSingleH1();
await a11y.assertAriaLandmarks();
await a11y.assertComponentAccessible("nav");
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
