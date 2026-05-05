# Architecture Guide
**QA Pulse by SK — Playwright Boilerplate**
🌐 www.skakarh.com

---

## Core Design Principles

1. **Single Responsibility** — Each class does one thing well
2. **DRY** — No copy-paste; shared logic lives in helpers/base classes
3. **Explicit over Magic** — No hidden globals, all dependencies injected
4. **Fail Fast** — Assertions close to actions; no sleep()
5. **Self-Documenting** — Tests read like English sentences

---

## Layer Architecture

```
┌─────────────────────────────────────────────┐
│              TEST SPECS (.spec.ts)           │
│   tests/e2e | api | visual | a11y | component│
└──────────────────┬──────────────────────────┘
                   │ import from
┌──────────────────▼──────────────────────────┐
│           FIXTURES (src/fixtures/)           │
│      pageFixture.ts | apiFixture.ts          │
└──────┬────────────────────┬─────────────────┘
       │                    │
┌──────▼──────┐    ┌────────▼────────┐
│  PAGE OBJECTS│    │   API CLIENTS   │
│ src/pages/  │    │   src/api/      │
│ BasePage    │    │   ApiClient     │
│ LoginPage   │    │   PostsApi      │
│ HomePage    │    └─────────────────┘
└──────┬──────┘
       │ uses
┌──────▼──────────────────────────────────────┐
│            HELPERS & UTILITIES               │
│  waitHelpers | randomData | dateHelpers      │
│  a11yHelper | logger                         │
└─────────────────────────────────────────────┘
       │ uses
┌──────▼──────────────────────────────────────┐
│         CONSTANTS & TYPES                    │
│  src/constants/index.ts                      │
│  src/types/index.ts                          │
└─────────────────────────────────────────────┘
```

---

## Adding a New Page

1. Create `src/pages/example/MyPage.ts` extending `BasePage`
2. Add it to `src/fixtures/pageFixture.ts`
3. Write tests in `tests/e2e/mypage.spec.ts`

## Adding a New API Endpoint

1. Create `src/api/endpoints/MyApi.ts`
2. Use `ApiClient` methods (get/post/put/delete)
3. Write tests in `tests/api/myapi.spec.ts`

## Adding a New Component

1. Create `src/components/MyComponent.ts` extending `BaseComponent`
2. Compose it inside a Page Object constructor
3. Write component tests in `tests/component/`
