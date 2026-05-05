# Contributing to QA Pulse by SK — Playwright Boilerplate

Thank you for your interest in contributing! 🎉

## How to Contribute

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/YOUR_USERNAME/qapulsebysk-playwright-boilerplate.git`
3. **Create a branch**: `git checkout -b feat/your-feature-name`
4. **Make your changes**
5. **Lint & typecheck**: `npm run lint && npm run typecheck`
6. **Commit**: `git commit -m "feat: describe your change"`
7. **Push**: `git push origin feat/your-feature-name`
8. **Open a Pull Request** against `main`

## Commit Message Format

Use conventional commits:
- `feat:` — new feature
- `fix:` — bug fix
- `chore:` — maintenance
- `test:` — adding/updating tests
- `docs:` — documentation only

## Code Style

- Run `npm run format` before committing
- Run `npm run lint` — zero errors required
- All new page objects must extend `BasePage`
- All new tests must have at least one tag (e.g. `@smoke`)

## Questions?

Visit [www.skakarh.com](https://www.skakarh.com) or open an issue.
