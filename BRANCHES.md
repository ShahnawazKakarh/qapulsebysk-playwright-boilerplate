# 🌿 Branch Guide
**QA Pulse by SK — Playwright Boilerplate**
🌐 www.skakarh.com

---

## Which Branch Should I Use?

| Branch | Language | Who Should Use It |
|--------|----------|-------------------|
| [`master`](https://github.com/QAPulse-by-SK/playwright-boilerplate/tree/master) | **TypeScript** | Teams using TypeScript, strict typing, path aliases |
| [`javascript`](https://github.com/QAPulse-by-SK/playwright-boilerplate/tree/javascript) | **JavaScript** | Teams preferring plain JS, no build step, simpler setup |

---

## ⚠️ Important

- These are **parallel branches** — they are NOT merged into each other
- Do NOT open PRs from `javascript` → `master` or vice versa
- Each branch is a **complete, independent boilerplate**
- Both branches have identical features and folder structure
- The only difference is the language

---

## Cloning a Specific Branch

### TypeScript (master)
```bash
git clone https://github.com/QAPulse-by-SK/playwright-boilerplate.git
cd playwright-boilerplate
npm install
npx playwright install
```

### JavaScript
```bash
git clone -b javascript https://github.com/QAPulse-by-SK/playwright-boilerplate.git
cd playwright-boilerplate
npm install
npx playwright install
```

---

## Contributing

- TypeScript fixes/features → PR to `master`
- JavaScript fixes/features → PR to `javascript`
- New features should be added to **both branches** separately

See [CONTRIBUTING.md](./CONTRIBUTING.md) for full guidelines.

---

*Created by QA Pulse by SK · www.skakarh.com*
