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

## 🧭 What Is This?

This is a **fully wired, ready-to-fork Playwright boilerplate** built by **QA Pulse by SK**. Instead of starting from zero every project, fork this and get:

- ✅ Folder structure already decided
- ✅ Page Object Model wired up
- ✅ API testing layer ready
- ✅ Visual regression configured
- ✅ Accessibility testing with axe-core
- ✅ 4 reporters out of the box (HTML, Allure, JUnit, JSON)
- ✅ GitHub Actions, Jenkins, Azure DevOps pipelines
- ✅ ESLint + Prettier + TypeScript strict mode
- ✅ `.env` based config — no hardcoded secrets ever

---

## ✨ Features At A Glance

| Category | What's Included |
|---|---|
| 🏗️ **Architecture** | Page Object Model, BaseComponent, Custom Fixtures |
| 🌐 **E2E Testing** | Multi-browser: Chromium, Firefox, WebKit, Mobile |
| 🔌 **API Testing** | ApiClient base class + endpoint layer |
| 📸 **Visual Regression** | `toHaveScreenshot()` with baseline management |
| ♿ **Accessibility** | axe-core WCAG 2.1 AA full-page scans |
| 🧩 **Component Testing** | Isolated component specs |
| 📊 **Reporting** | HTML + Allure + JUnit + JSON + Custom Summary |
| 🏷️ **Test Tags** | `@smoke` `@regression` `@sanity` `@e2e` `@api` `@visual` `@a11y` `@component` `@critical` |
| 🔁 **CI/CD** | GitHub Actions (sharded + GitHub Pages) · Jenkins · Azure DevOps |
| 🛡️ **Code Quality** | ESLint · Prettier · TypeScript strict |
| 🔐 **Config** | dotenv · `.env.example` · env-based baseURL |

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
├── 📂 src/
│   ├── 📂 pages/
│   │   ├── BasePage.ts             # Abstract base — all pages extend this
│   │   ├── BaseComponent.ts        # Abstract base — all components extend this
│   │   └── example/
│   │       ├── HomePage.ts         # Example: home page POM
│   │       └── LoginPage.ts        # Example: login page POM
│   │
│   ├── 📂 components/
│   │   └── NavBar.ts               # Example reusable component
│   │
│   ├── 📂 api/
│   │   ├── ApiClient.ts            # Base API client (GET/POST/PUT/PATCH/DELETE)
│   │   └── endpoints/
│   │       └── PostsApi.ts         # Example endpoint class
│   │
│   ├── 📂 fixtures/
│   │   ├── pageFixture.ts          # All page objects — single import in specs
│   │   └── apiFixture.ts           # API client fixture
│   │
│   └── 📂 helpers/
│       ├── waitHelpers.ts          # Custom wait utilities
│       ├── randomData.ts           # Test data generators
│       └── dateHelpers.ts          # Date/time utilities
│
├── 📂 tests/
│   ├── e2e/                        # End-to-end UI tests
│   │   ├── home.spec.ts
│   │   └── login.spec.ts
│   ├── api/                        # API tests
│   │   └── posts.spec.ts
│   ├── visual/                     # Visual regression tests
│   │   └── homepage.visual.spec.ts
│   ├── accessibility/              # Axe-core a11y tests
│   │   └── homepage.a11y.spec.ts
│   └── component/                  # Component-level tests
│       └── navbar.component.spec.ts
│
├── 📂 reporters/
│   └── jsonSummary.js              # Custom console summary reporter
│
├── 📂 test-data/
│   └── users.json                  # Static test data
│
├── 📂 playwright-report/           # HTML report output (gitignored)
├── 📂 allure-results/              # Allure raw output (gitignored)
├── 📂 test-results/                # JUnit XML + JSON (gitignored)
│
├── .env.example                    # Environment variables template
├── .eslintrc.json                  # ESLint config
├── .prettierrc.json                # Prettier config
├── .gitignore
├── playwright.config.ts            # Master Playwright config
├── tsconfig.json                   # TypeScript config
├── package.json
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

---

## 🚀 Quick Start

### 1. Fork & Clone

```bash
# Fork via GitHub UI, then:
git clone https://github.com/YOUR_USERNAME/qapulsebysk-playwright-boilerplate.git
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
# Edit .env — set BASE_URL, credentials etc.
```

### 4. Run Tests

```bash
npm test
```

---

## 🧪 Running Tests

### By Test Type

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
npm run test:chromium     # Chrome only
npm run test:firefox      # Firefox only
npm run test:webkit       # Safari only
```

### Debug & Development

```bash
npm run test:debug        # Step-through debugger
npm run test:headed       # Watch tests run in browser
npm run test:update-snapshots  # Regenerate visual baselines
```

---

## 📊 Reporting

This boilerplate ships with **4 reporters** out of the box:

### 1. 🌐 HTML Report (Playwright built-in)
```bash
npm run report:html
# Opens playwright-report/index.html in browser
```

### 2. 📊 Allure Report (Rich dashboard with history & trends)
```bash
npm run report:allure
# Generates + opens Allure dashboard
```
> 💡 Requires [Allure CLI](https://docs.qameta.io/allure/#_installing_a_commandline) installed globally: `npm install -g allure-commandline`

### 3. 📋 JSON Summary (Quick terminal summary)
```bash
npm run report:json
# Prints pass/fail/skip counts to terminal
```

### 4. 🏢 JUnit XML (CI integration)
Auto-generated at `test-results/junit.xml` on every run — consumed by Jenkins and Azure DevOps automatically.

---

## 📸 Visual Regression

Generate baselines (first time or after intentional UI changes):

```bash
npm run test:update-snapshots
```

Run visual tests (compares against saved baselines):

```bash
npm run test:visual
```

> Baselines are stored in `tests/visual/snapshots/` and committed to the repo.

---

## ♿ Accessibility Testing

Runs WCAG 2.1 AA checks using axe-core on both:
- `https://the-internet.herokuapp.com` — demo site
- `https://www.skakarh.com` — QA Pulse brand site

```bash
npm run test:a11y
```

---

## 🔌 API Testing

Uses Playwright's built-in `request` context via `ApiClient`:

```typescript
// tests/api/posts.spec.ts
import { test, expect } from "../../src/fixtures/apiFixture";
import { PostsApi } from "../../src/api/endpoints/PostsApi";

test("GET /posts returns list @smoke @api", async ({ apiClient }) => {
  const postsApi = new PostsApi(apiClient);
  const response = await postsApi.getAllPosts();
  expect(response.status()).toBe(200);
});
```

---

## ✍️ Writing Your First Test

**Step 1** — Create a page object:
```typescript
// src/pages/example/MyPage.ts
import { BasePage } from "../BasePage";

export class MyPage extends BasePage {
  readonly heading = this.page.locator("h1");

  async open() {
    await super.open("/my-page");
  }

  async getHeading() {
    return this.heading.innerText();
  }
}
```

**Step 2** — Register in fixture:
```typescript
// src/fixtures/pageFixture.ts — add:
myPage: async ({ page }, use) => {
  await use(new MyPage(page));
},
```

**Step 3** — Write your spec:
```typescript
// tests/e2e/my-page.spec.ts
import { test, expect } from "../../src/fixtures/pageFixture";

test("page has correct heading @smoke @e2e", async ({ myPage }) => {
  await myPage.open();
  expect(await myPage.getHeading()).toBe("My Page Title");
});
```

---

## 🏷️ Test Tags Reference

| Tag | Usage |
|-----|-------|
| `@smoke` | Quick sanity — run before every deploy |
| `@regression` | Full suite — run on PRs and nightly |
| `@sanity` | Post-deploy health check |
| `@critical` | Must-pass — failures = block release |
| `@e2e` | End-to-end UI tests |
| `@api` | API-only tests |
| `@visual` | Visual regression |
| `@a11y` | Accessibility |
| `@component` | Component-level |

Run any tag: `npx playwright test --grep @critical`

---

## ⚙️ Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `BASE_URL` | `https://the-internet.herokuapp.com` | E2E test target |
| `BRAND_URL` | `https://www.skakarh.com` | Brand site (visual/a11y) |
| `API_BASE_URL` | `https://jsonplaceholder.typicode.com` | API test base |
| `TEST_USERNAME` | `tomsmith` | Login test user |
| `TEST_PASSWORD` | `SuperSecretPassword!` | Login test password |
| `CI` | _(auto-set)_ | Switches to CI reporter mode |

---

## 🔁 CI/CD

### GitHub Actions
Triggers on push to `main` and all PRs. Runs 4 parallel shards and publishes HTML report to GitHub Pages. PR gets auto-commented with report link.

### Jenkins
```groovy
// Use ci/Jenkinsfile in your Jenkins pipeline
```

### Azure DevOps
```yaml
# Use ci/azure-pipelines.yml in your Azure DevOps pipeline
```

---

## 🌿 Branches

| Branch | Language | Status |
|--------|----------|--------|
| `main` | TypeScript | ✅ Active |
| `javascript` | JavaScript | ✅ Active |

---

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/amazing-feature`
3. Commit: `git commit -m "feat: add amazing feature"`
4. Push: `git push origin feat/amazing-feature`
5. Open a Pull Request ✅

---

## 📄 License

MIT © [QA Pulse by SK](https://www.skakarh.com) — free to use, modify, and distribute.

---

<div align="center">

**Built with ❤️ by [QA Pulse by SK](https://www.skakarh.com)**

🌐 [skakarh.com](https://www.skakarh.com) &nbsp;·&nbsp; 🐙 [GitHub](https://github.com/ShahnawazKakarh) &nbsp;·&nbsp; ⭐ Star this repo if it helped you!

*Created by QA Pulse by SK · skakarh.com*

</div>
