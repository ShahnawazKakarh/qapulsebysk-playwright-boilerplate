# 🌿 Branch Guide
**QA Pulse by SK — Playwright Boilerplate**
🌐 www.skakarh.com

---

## Which Branch Should I Use?

| Branch | Language | Description | Who Should Use It |
|--------|----------|-------------|-------------------|
| [`master`](https://github.com/QAPulse-by-SK/playwright-boilerplate/tree/master) | **TypeScript** | Core boilerplate | Most teams — clean starting point |
| [`javascript`](https://github.com/QAPulse-by-SK/playwright-boilerplate/tree/javascript) | **JavaScript** | Core boilerplate | Teams preferring plain JS |
| [`with-packages`](https://github.com/QAPulse-by-SK/playwright-boilerplate/tree/with-packages) | **TypeScript** | + QAPulseSK packages | Teams wanting assert + report + gen |

---

## 🔵 `with-packages` Branch

This branch extends `master` with the official **QAPulse by SK** npm packages integrated and tested:

| Package | Version | What It Does |
|---------|---------|--------------|
| [`qapulsesk-assert`](https://www.npmjs.com/package/qapulsesk-assert) | v1.0.5 | Fuzzy assertions, schema validation, AI-powered checks |
| [`qapulsesk-report`](https://www.npmjs.com/package/qapulsesk-report) | v1.0.3 | Dark-theme HTML reports, Slack webhooks, AI failure analysis |
| [`qapulsesk-gen`](https://www.npmjs.com/package/qapulsesk-gen) | v1.0.3 | HAR → tests, recordings → tests, plain English → tests |

**Additional tests in `with-packages`:**
```
tests/packages/
  ├── assert.spec.ts        — 23 tests (qapulsesk-assert full suite)
  ├── assert.demo.spec.ts   — 19 tests (storytelling demo — before/after)
  ├── report.demo.spec.ts   — 18 tests (report showcase)
  ├── gen.demo.spec.ts      — 13 tests (generation demo)
  ├── suitecrm.spec.ts      — 26 tests (real enterprise CRM)
  └── demo-data/
      ├── suitecrm-login.har        (HAR recording)
      └── generated/                (auto-generated test files)
```

**Total: 101 passing + 1 intentional fail + 2 skipped**

---

## ⚠️ Important Rules

- Branches are **parallel and independent** — never merged into each other
- `master` → `javascript` → `with-packages` each stand alone
- PRs for TypeScript fixes → `master`
- PRs for JavaScript fixes → `javascript`
- PRs for package integration → `with-packages`

---

## Cloning

```bash
# TypeScript (recommended)
git clone https://github.com/QAPulse-by-SK/playwright-boilerplate.git

# JavaScript
git clone -b javascript https://github.com/QAPulse-by-SK/playwright-boilerplate.git

# With QAPulseSK packages
git clone -b with-packages https://github.com/QAPulse-by-SK/playwright-boilerplate.git
```

---

*Created by QA Pulse by SK · www.skakarh.com*
