# 🌿 Branch Guide
**QA Pulse by SK — Playwright Boilerplate**
🌐 www.skakarh.com

---

## Which Branch Should I Use?

| Branch | Language | Who Should Use It |
|--------|----------|-------------------|
| [`main`](https://github.com/ShahnawazKakarh/qapulsebysk-playwright-boilerplate/tree/main) | **TypeScript** | Teams using TypeScript, strict typing, path aliases |
| [`javascript`](https://github.com/ShahnawazKakarh/qapulsebysk-playwright-boilerplate/tree/javascript) | **JavaScript** | Teams preferring plain JS, no build step, simpler setup |

---

## ⚠️ Important

- These are **parallel branches** — they are NOT merged into each other
- Do NOT open PRs from `javascript` → `main` or vice versa
- Each branch is a **complete, independent boilerplate**
- Both branches have identical features and folder structure
- The only difference is the language

---

## Cloning a Specific Branch

### TypeScript (main)
```bash
git clone https://github.com/ShahnawazKakarh/qapulsebysk-playwright-boilerplate.git
cd qapulsebysk-playwright-boilerplate
npm install
npx playwright install
```

### JavaScript
```bash
git clone -b javascript https://github.com/ShahnawazKakarh/qapulsebysk-playwright-boilerplate.git
cd qapulsebysk-playwright-boilerplate
npm install
npx playwright install
```

---

## Contributing

- Bug fixes or improvements for TypeScript → PR to `main`
- Bug fixes or improvements for JavaScript → PR to `javascript`
- New features should be added to **both branches** separately

See [CONTRIBUTING.md](./CONTRIBUTING.md) for full guidelines.

---

*Created by QA Pulse by SK · www.skakarh.com*
