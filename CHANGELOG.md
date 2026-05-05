# Changelog
All notable changes to this project will be documented here.
Format: [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)

---

## [1.0.0] - 2024-05-05

### Added
- Initial release by QA Pulse by SK
- Page Object Model with BasePage + BaseComponent
- API testing layer with ApiClient + PostsApi + CommentsApi
- Visual regression with Playwright toHaveScreenshot()
- Accessibility testing with @axe-core/playwright (WCAG 2.1 AA)
- A11yHelper utility with keyboard nav, ARIA, focus, form label checks
- Component testing layer
- Custom fixtures: pageFixture + apiFixture
- Global setup/teardown with auth state management
- Constants layer (URLS, ROUTES, CREDENTIALS, TIMEOUTS, TAGS)
- Shared TypeScript types
- Logger utility with colour-coded output
- 4 reporters: HTML, Allure, JUnit, JSON + custom summary
- GitHub Actions: sharded (4x) + GitHub Pages + PR comments
- Jenkins declarative pipeline
- Azure DevOps multi-browser pipeline
- ESLint + Prettier + TypeScript strict mode
- dotenv environment config
- Advanced examples: network interception, data-driven, drag-drop, alerts
- Docs: ARCHITECTURE.md, REPORTING.md, ACCESSIBILITY.md
- MIT License
- CONTRIBUTING.md

---

*Created by QA Pulse by SK · www.skakarh.com*
