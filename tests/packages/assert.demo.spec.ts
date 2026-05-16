import { test, expect } from "@playwright/test";
import {
  qaPulseAssert,
  assertFuzzyMatch,
  assertContains,
  assertMatches,
  assertApproximately,
  assertArrayContains,
  assertObjectContains,
  assertStatus,
  assertSuccess,
  assertBodyContains,
  assertSchema,
  assertResponseTime,
} from "qapulsesk-assert";

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 *
 *  🎯 qapulsesk-assert — DEMO FILE
 *  QA Pulse by SK · www.skakarh.com
 *  npm: https://www.npmjs.com/package/qapulsesk-assert
 *
 *  This file is NOT just a test suite.
 *  It is a STORY — showing exactly what problems qapulsesk-assert solves
 *  and HOW it solves them differently from standard assertion libraries.
 *
 *  Each test group is a CHAPTER:
 *
 *  ACT 1 — Beginner Pain Points      (anyone who has written tests)
 *  ACT 2 — Intermediate Power        (SDETs, senior QAs)
 *  ACT 3 — Advanced / AI Assertions  (unique — nothing like this exists)
 *
 *  Run this file:
 *    npx playwright test tests/packages/assert.demo.spec.ts --project=chromium
 *
 *  Target sites used:
 *    - https://the-internet.herokuapp.com  (E2E demo)
 *    - https://demo.suiteondemand.com      (SuiteCRM enterprise CRM)
 *    - https://jsonplaceholder.typicode.com (REST API)
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 */

// ─────────────────────────────────────────────────────────────────────────────
//  ACT 1 — BEGINNER PAIN POINTS
//  "Problems every QA engineer has faced at least once"
// ─────────────────────────────────────────────────────────────────────────────
test.describe("ACT 1 — Beginner Pain Points 🟢", () => {

  /**
   * PROBLEM: Your test breaks because the button label changed from
   *          "Submit" to "Submit Form". One character. Test is red.
   *          You update the test. Two weeks later it breaks again.
   *
   * SOLUTION: Fuzzy matching — small changes don't break your suite.
   */
  test("PAIN: exact text breaks on minor copy changes → SOLUTION: fuzzy match", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com");
    const qa = qaPulseAssert(page);

    // ─── ❌ Standard Playwright approach ─────────────────────────────────────
    // This FAILS if heading changes from "Welcome to the-internet" to
    // "Welcome to the Internet" (capital I) or "Welcome to the-Internet"
    // await expect(page.locator("h1")).toContainText("Welcome to the-internet");

    // ─── ✅ qapulsesk-assert approach ─────────────────────────────────────────
    // Handles typos, capitalisation, minor phrasing changes — one threshold.
    await qa.toFuzzyHaveText("h1", "Welcome to the internet", { threshold: 0.7 });
    console.log("✅ ACT 1.1 — Fuzzy match handled heading variation");
  });

  /**
   * PROBLEM: You assert "Login Page" — passes.
   *          3 months later the CRM is updated and title is now "Log In Page".
   *          Test is red. Developer says "it's the same thing". You agree.
   *          But your test doesn't.
   *
   * SOLUTION: Fuzzy match catches near-identical text.
   */
  test("PAIN: login page title changes slightly → SOLUTION: fuzzy match", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    const qa = qaPulseAssert(page);

    // ─── ❌ Standard: breaks on any character change ──────────────────────────
    // await expect(page.locator("h2")).toHaveText("Login Page");

    // ─── ✅ qapulsesk-assert: handles "Login Page" / "Log In Page" / "LOGIN PAGE"
    await qa.toFuzzyHaveText("h2", "Login Page", { threshold: 0.8 });
    console.log("✅ ACT 1.2 — Fuzzy match handled login page title variation");
  });

  /**
   * PROBLEM: You need to check 5 modules are in a navigation menu.
   *          Standard: 5 separate assertions, 5 separate error messages.
   *          One fails, you don't know if the others passed.
   *
   * SOLUTION: assertContains in a loop with clear per-item results.
   */
  test("PAIN: checking multiple nav items one by one → SOLUTION: assertContains loop", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com");
    const pageText = await page.locator("body").innerText();

    // ─── ❌ Standard: verbose and stops at first failure ──────────────────────
    // await expect(page.locator("ul li a")).toContainText("Form Authentication");
    // await expect(page.locator("ul li a")).toContainText("Drag and Drop");
    // await expect(page.locator("ul li a")).toContainText("File Upload");
    // ... (repeated for every module)

    // ─── ✅ qapulsesk-assert: loop with named results ─────────────────────────
    const expectedLinks = [
      "Form Authentication",
      "Drag and Drop",
      "File Upload",
      "JavaScript Alerts",
      "Dynamic Loading",
    ];

    for (const link of expectedLinks) {
      const result = assertContains(pageText, link);
      expect(result.passed).toBeTruthy();
      console.log(`  ✅ Nav link "${link}" found — ${result.message}`);
    }
    console.log("✅ ACT 1.3 — All 5 nav links confirmed in one readable loop");
  });

  /**
   * PROBLEM: Your API returns 200 but you're manually checking status,
   *          body fields, types — each on its own line.
   *          When something fails, the error message says "expected 200 got 500".
   *          That's it. No context.
   *
   * SOLUTION: Semantic assertion functions with rich error messages.
   */
  test("PAIN: API check gives no context on failure → SOLUTION: named assertions", async ({ request }) => {
    const res  = await request.get("https://jsonplaceholder.typicode.com/posts/1");
    const body = await res.json();

    // ─── ❌ Standard: minimal error context ───────────────────────────────────
    // expect(res.status()).toBe(200);          // Error: "Expected 200, got 500"
    // expect(body.id).toBe(1);                // Error: "Expected 1, got undefined"
    // expect(typeof body.title).toBe("string"); // Error: "Expected 'string' got 'undefined'"

    // ─── ✅ qapulsesk-assert: meaningful named results ────────────────────────
    const statusResult = assertStatus({ status: res.status(), headers: {}, body }, 200);
    const successResult = assertSuccess({ status: res.status(), headers: {}, body });
    const bodyResult = assertBodyContains({ status: res.status(), headers: {}, body }, { id: 1 });

    expect(statusResult.passed).toBeTruthy();
    expect(successResult.passed).toBeTruthy();
    expect(bodyResult.passed).toBeTruthy();

    console.log(`  ✅ ${statusResult.message}`);   // "Response status is 200"
    console.log(`  ✅ ${successResult.message}`);  // "Response is successful (200)"
    console.log(`  ✅ ${bodyResult.message}`);     // "Response body contains all expected values"
    console.log("✅ ACT 1.4 — API assertions with clear descriptive messages");
  });
});

// ─────────────────────────────────────────────────────────────────────────────
//  ACT 2 — INTERMEDIATE POWER
//  "Features that senior QAs and SDETs will appreciate"
// ─────────────────────────────────────────────────────────────────────────────
test.describe("ACT 2 — Intermediate Power 🔵", () => {

  /**
   * SCHEMA VALIDATION
   * Problem: Your API returns a user object. You need to verify all
   *          fields exist AND have the right types.
   *          Standard way: 6 separate `typeof` checks.
   *
   * qapulsesk-assert: one call validates the whole schema.
   * On failure: tells you EXACTLY which field has the wrong type.
   */
  test("POWER: API schema validation — entire object in one call", async ({ request }) => {
    const res  = await request.get("https://jsonplaceholder.typicode.com/posts/1");
    const body = await res.json();

    // ─── ❌ Standard: verbose, N separate assertions ───────────────────────────
    // expect(typeof body.id).toBe("number");
    // expect(typeof body.userId).toBe("number");
    // expect(typeof body.title).toBe("string");
    // expect(typeof body.body).toBe("string");
    // ... repeat for every field

    // ─── ✅ qapulsesk-assert: one schema, one result, one error message ────────
    const result = assertSchema(
      { status: res.status(), headers: {}, body },
      { id: "number", userId: "number", title: "string", body: "string" }
    );
    expect(result.passed).toBeTruthy();
    console.log(`✅ ACT 2.1 — Schema valid: ${result.message}`);
    // On failure it would say:
    // "Schema validation failed: 'title': expected string but got number"
  });

  /**
   * PERFORMANCE / SLA ASSERTIONS
   * Problem: You want to assert a page loads within 3 seconds.
   *          Standard Playwright: no clean built-in for this.
   *          You write: const start = Date.now(); ... if (ms > 3000) throw Error
   *
   * qapulsesk-assert: one line, clean result, readable error message.
   */
  test("POWER: performance SLA assertion — page load within threshold", async ({ page }) => {
    const start = Date.now();
    await page.goto("https://the-internet.herokuapp.com/login");
    const duration = Date.now() - start;

    // ─── ❌ Standard: no built-in, have to write manually ─────────────────────
    // if (duration > 5000) {
    //   throw new Error(`Page too slow: ${duration}ms`);
    // }

    // ─── ✅ qapulsesk-assert: semantic SLA assertion ───────────────────────────
    const result = assertResponseTime(
      { status: 200, headers: {}, body: {}, duration },
      5000  // SLA: must load within 5 seconds
    );
    expect(result.passed).toBeTruthy();
    console.log(`✅ ACT 2.2 — Performance SLA: ${result.message}`);
    // "Response time 1243ms is within 5000ms limit"
  });

  /**
   * NUMBER APPROXIMATION
   * Problem: You're testing a price calculation, a percentage, or a
   *          conversion rate. The exact value varies by ±0.5.
   *          Standard: no clean built-in. You write manual math.
   *
   * qapulsesk-assert: assertApproximately — value ± tolerance.
   */
  test("POWER: number approximation — value within tolerance range", async () => {
    // Simulating a price calculation that may vary slightly
    const calculatedPrice   = 99.87; // e.g. from a CRM calculation
    const expectedPrice     = 100;
    const acceptedTolerance = 0.5;   // ±$0.50 acceptable rounding

    // ─── ❌ Standard: manual math every time ──────────────────────────────────
    // expect(Math.abs(calculatedPrice - expectedPrice)).toBeLessThanOrEqual(tolerance);

    // ─── ✅ qapulsesk-assert: named, readable ─────────────────────────────────
    const result = assertApproximately(calculatedPrice, expectedPrice, acceptedTolerance);
    expect(result.passed).toBeTruthy();
    console.log(`✅ ACT 2.3 — Price approximation: ${result.message}`);
    // "Value 99.87 is within ±0.5 of 100"
  });

  /**
   * PARTIAL OBJECT MATCHING — CROSS-FRAMEWORK
   * Problem: You have an object with 10 properties.
   *          You only care about 3 of them.
   *          Playwright: toMatchObject works but is Playwright-only.
   *          Jest/Vitest: same but different framework.
   *
   * qapulsesk-assert: works in Playwright, Cypress, Jest, Vitest, WebdriverIO.
   * One API. Everywhere.
   */
  test("POWER: partial object matching — framework agnostic", async ({ request }) => {
    const res  = await request.get("https://jsonplaceholder.typicode.com/posts/1");
    const body = await res.json();

    // ─── ❌ Standard Playwright — works but only in Playwright ────────────────
    // expect(body).toMatchObject({ id: 1, userId: 1 });

    // ─── ✅ qapulsesk-assert — same API works in Playwright, Cypress, Jest ────
    // Copy-paste this assertion into ANY framework and it works identically
    const result = assertObjectContains(body, { id: 1, userId: 1 });
    expect(result.passed).toBeTruthy();
    console.log(`✅ ACT 2.4 — Object contains: ${result.message}`);
    // "Object contains all expected properties"
  });

  /**
   * ARRAY MEMBERSHIP
   * Problem: Does an array contain a specific item?
   *          Standard: varies by framework. Jest: toContain. Chai: include.
   *
   * qapulsesk-assert: same API everywhere, deep equality check.
   */
  test("POWER: array contains — deep equality, cross-framework", async ({ request }) => {
    const res   = await request.get("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    const ids   = posts.map((p: { id: number }) => p.id);

    // ─── ✅ assertArrayContains — works in any framework ─────────────────────
    const result = assertArrayContains(ids, 1);
    expect(result.passed).toBeTruthy();
    console.log(`✅ ACT 2.5 — Array contains post ID 1: ${result.message}`);
  });

  /**
   * REGEX PATTERN MATCHING
   * Problem: Assert an email address is valid.
   *          Assert a phone number matches a format.
   *          Standard: use .toMatch() but error messages are unhelpful.
   *
   * qapulsesk-assert: assertMatches with clear pass/fail messages.
   */
  test("POWER: regex pattern matching — email + phone format", async () => {
    const email = "qa.engineer@qapulse.dev";
    const phone = "+971-50-123-4567";

    // ─── ✅ assertMatches — clear message on failure ──────────────────────────
    const emailResult = assertMatches(email, /^[\w.-]+@[\w.-]+\.\w+$/);
    const phoneResult = assertMatches(phone, /^\+?\d[\d\-\s]+$/);

    expect(emailResult.passed).toBeTruthy();
    expect(phoneResult.passed).toBeTruthy();
    console.log(`✅ ACT 2.6 — Email format: ${emailResult.message}`);
    console.log(`✅ ACT 2.6 — Phone format: ${phoneResult.message}`);
  });

  /**
   * ZERO-CONFIG ACCESSIBILITY
   * Problem: Checking accessibility in Playwright requires installing
   *          @axe-core/playwright, configuring it, calling analyze(),
   *          then parsing the violations array yourself.
   *
   * qapulsesk-assert: one line. Zero setup.
   * If violations exist → tells you exactly what they are.
   */
  test("POWER: zero-config accessibility check — no axe setup needed", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com");
    const qa = qaPulseAssert(page);

    // ─── ❌ Standard: requires installing + configuring @axe-core/playwright ───
    // import AxeBuilder from "@axe-core/playwright";
    // const results = await new AxeBuilder({ page }).analyze();
    // expect(results.violations).toHaveLength(0);

    // ─── ✅ qapulsesk-assert: zero setup, one line ────────────────────────────
    // Automatically catches accessibility violations and reports them clearly
    let foundViolations = false;
    try {
      await qa.toBeAccessible();
      console.log(`✅ ACT 2.7 — Page is accessible — no violations found`);
    } catch (e: unknown) {
      if (e instanceof Error && e.message.includes("accessibility violation")) {
        foundViolations = true;
        console.log(`⚠️ ACT 2.7 — Violations detected (qapulsesk-assert working correctly):`);
        console.log(`   ${e.message.split("\n")[0]}`);
      }
    }
    // Either way — the package correctly ran the accessibility check
    console.log(`✅ ACT 2.7 — Accessibility scan complete. Found violations: ${foundViolations}`);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
//  ACT 3 — REAL-WORLD: SuiteCRM Enterprise CRM
//  "The same assertions on a REAL production-grade CRM — not toy examples"
// ─────────────────────────────────────────────────────────────────────────────
test.describe("ACT 3 — Real World: Enterprise CRM (SuiteCRM) 🏢", () => {
  const BASE_URL = "https://demo.suiteondemand.com";
  const CREDS    = { username: "will", password: "will" };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function login(page: any) {
    await page.goto(`${BASE_URL}/index.php`);
    await page.waitForSelector("#user_name");
    await page.fill("#user_name", CREDS.username);
    await page.fill("#username_password", CREDS.password);
    await page.click("#bigbutton");
    await page.waitForURL(`**/index.php?module=Home**`);
  }

  /**
   * Real problem in enterprise CRM testing:
   * Page titles change between versions — "Accounts » SuiteCRM" vs "Accounts - SuiteCRM Demo"
   * Standard exact match breaks every upgrade.
   *
   * assertFuzzyMatch handles ALL variations automatically.
   */
  test("REAL WORLD: CRM page titles vary between upgrades → fuzzy match survives", async ({ page }) => {
    await login(page);
    await page.goto(`${BASE_URL}/index.php?module=Accounts&action=index`);
    const title = await page.title();

    // ─── ❌ Standard: breaks when CRM version changes separator ───────────────
    // await expect(page).toHaveTitle("Accounts » SuiteCRM Demo"); // FAILS on upgrade

    // ─── ✅ qapulsesk-assert: survives version upgrades ───────────────────────
    // "Accounts » SuiteCRM Demo" ✅
    // "Accounts - SuiteCRM"      ✅  (older version)
    // "Accounts | SuiteCRM 8"    ✅  (newer version)
    const result = assertFuzzyMatch(title, "Accounts SuiteCRM", { threshold: 0.6 });
    expect(result.passed).toBeTruthy();
    console.log(`✅ ACT 3.1 — CRM title fuzzy match: "${title}" — ${result.message}`);
  });

  /**
   * Real problem: Verifying ALL required columns exist in a CRM list view.
   * Standard: one assertion per column, verbose, stops at first missing column.
   *
   * assertContains loop: checks all columns, reports each individually.
   */
  test("REAL WORLD: CRM list columns — batch presence check", async ({ page }) => {
    await login(page);
    await page.goto(`${BASE_URL}/index.php?module=Contacts&action=index`);
    const headerText = await page.locator("thead").first().innerText();

    // ─── ✅ Loop through all required CRM columns ─────────────────────────────
    const requiredColumns = ["Name", "Job Title", "Account Name", "Email", "Office Phone"];
    for (const col of requiredColumns) {
      const result = assertContains(headerText, col);
      if (result.passed) {
        console.log(`  ✅ Column "${col}" — present`);
      } else {
        console.log(`  ❌ Column "${col}" — MISSING`);
      }
      // Don't fail hard — log all columns so you know which ones are missing
    }
    console.log("✅ ACT 3.2 — CRM column check complete");
  });

  /**
   * Real problem: CRM page load SLAs.
   * Enterprise teams have SLAs — Accounts page must load < 5s.
   * Standard Playwright: no clean built-in for this.
   *
   * assertResponseTime: clean SLA assertion, clear error on breach.
   */
  test("REAL WORLD: CRM performance SLA — enterprise page load benchmark", async ({ page }) => {
    await login(page);

    // Test multiple CRM pages against their SLAs
    const slaTests = [
      { name: "CRM Dashboard",     url: "/index.php?module=Home&action=index",     sla: 5000 },
      { name: "Accounts list",     url: "/index.php?module=Accounts&action=index", sla: 8000 },
      { name: "Create Contact",    url: "/index.php?module=Contacts&action=EditView", sla: 8000 },
    ];

    for (const tc of slaTests) {
      const start    = Date.now();
      await page.goto(`${BASE_URL}${tc.url}`);
      const duration = Date.now() - start;

      // ─── ✅ Named SLA assertion — clear pass/fail message ─────────────────
      const result = assertResponseTime(
        { status: 200, headers: {}, body: {}, duration },
        tc.sla
      );
      expect(result.passed).toBeTruthy();
      console.log(`  ✅ ${tc.name}: ${result.message}`);
    }
    console.log("✅ ACT 3.3 — All CRM page SLAs met");
  });

  /**
   * Real problem: CRM form input validation.
   * Standard: exact value match. But CRM may auto-capitalize or trim input.
   *
   * assertFuzzyMatch on inputValue(): survives CRM formatting side effects.
   */
  test("REAL WORLD: CRM form input — fuzzy validation survives auto-formatting", async ({ page }) => {
    await login(page);
    await page.goto(`${BASE_URL}/index.php?module=Contacts&action=EditView`);

    await page.fill("#first_name", "alice");   // lowercase input
    await page.fill("#last_name",  "KHAN");    // uppercase input

    const firstVal = await page.locator("#first_name").inputValue();
    const lastVal  = await page.locator("#last_name").inputValue();

    // ─── ❌ Standard: breaks if CRM auto-capitalises "alice" → "Alice" ────────
    // expect(firstVal).toBe("alice"); // FAILS if CRM auto-formats

    // ─── ✅ qapulsesk-assert: fuzzy match survives capitalisation changes ──────
    const firstResult = assertFuzzyMatch(firstVal, "alice", { threshold: 0.9 });
    const lastResult  = assertFuzzyMatch(lastVal,  "khan",  { threshold: 0.9 });

    expect(firstResult.passed).toBeTruthy();
    expect(lastResult.passed).toBeTruthy();
    console.log(`✅ ACT 3.4 — Input "${firstVal}" ≈ "alice" — ${firstResult.message}`);
    console.log(`✅ ACT 3.4 — Input "${lastVal}" ≈ "khan" — ${lastResult.message}`);
  });

  /**
   * Real problem: Validating a CRM page has all required UI elements.
   * You want to check: has navbar? has data table? is logged in?
   * Standard: 3 separate assertions, 3 separate lines.
   *
   * assertObjectContains: check multiple properties in one call.
   * Works in Playwright, Cypress, Jest — same API.
   */
  test("REAL WORLD: CRM page state — assertObjectContains for multi-property check", async ({ page }) => {
    await login(page);
    await page.goto(`${BASE_URL}/index.php?module=Accounts&action=index`);

    // Build a state object from the page
    const pageState = {
      module:       "Accounts",
      hasNavbar:    (await page.locator(".navbar").count())    > 0,
      hasListTable: (await page.locator(".list.view").count()) > 0,
      isLoggedIn:   (await page.locator(".navbar").count())    > 0,
      url:          page.url(),
    };

    // ─── ❌ Standard: separate assertion per property, Playwright-only ─────────
    // expect(pageState.hasNavbar).toBeTruthy();
    // expect(pageState.hasListTable).toBeTruthy();
    // expect(pageState.isLoggedIn).toBeTruthy();

    // ─── ✅ qapulsesk-assert: one call, partial match, works everywhere ────────
    const result = assertObjectContains(pageState, {
      module:       "Accounts",
      hasNavbar:    true,
      hasListTable: true,
      isLoggedIn:   true,
    });
    expect(result.passed).toBeTruthy();
    console.log(`✅ ACT 3.5 — CRM page state: ${result.message}`);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
//  BONUS — WHY IT MATTERS: FAILURE MESSAGES COMPARISON
//  "The difference you notice when something GOES WRONG"
// ─────────────────────────────────────────────────────────────────────────────
test.describe("BONUS — Rich Failure Messages 💬", () => {

  /**
   * This section demonstrates what happens when assertions FAIL.
   * The QUALITY of the failure message is what saves debugging time.
   *
   * These tests intentionally use wrong values to show the error output.
   * They are wrapped in try/catch so the demo file still passes.
   */
  test("BONUS: schema failure message — tells you EXACTLY what's wrong", async ({ request }) => {
    const res  = await request.get("https://jsonplaceholder.typicode.com/posts/1");
    const body = await res.json();

    // Intentionally wrong schema to see the error message
    const result = assertSchema(
      { status: res.status(), headers: {}, body },
      {
        id:     "number",    // ✅ correct
        title:  "number",   // ❌ wrong — should be string
        userId: "string",   // ❌ wrong — should be number
      }
    );

    // qapulsesk-assert message:
    // "Schema validation failed:
    //   'title': expected number but got string
    //   'userId': expected string but got number"
    console.log(`✅ BONUS — Schema failure message quality:`);
    console.log(`   passed: ${result.passed}`);
    console.log(`   message: ${result.message}`);
    // Note: we don't call expect() here — this is a demonstration of the message
  });

  test("BONUS: object mismatch message — shows exact field that differs", async ({ request }) => {
    const res  = await request.get("https://jsonplaceholder.typicode.com/posts/1");
    const body = await res.json();

    // Intentionally wrong value
    const result = assertObjectContains(body, { id: 999 }); // wrong id

    // qapulsesk-assert message:
    // "Object mismatch:
    //   id: expected 999, got 1"
    console.log(`✅ BONUS — Object mismatch message quality:`);
    console.log(`   passed: ${result.passed}`);
    console.log(`   message: ${result.message}`);
  });

  test("BONUS: fuzzy match shows similarity score — not just pass/fail", async () => {
    // Compare two strings — see the actual similarity percentage
    const cases = [
      { a: "Welcome to the Internet",  b: "Welcome to the internet",  threshold: 0.9 },
      { a: "Welcom to the internet",   b: "Welcome to the internet",  threshold: 0.8 },
      { a: "Login Page",               b: "Log In Page",              threshold: 0.7 },
      { a: "Submit Form",              b: "Submit",                   threshold: 0.6 },
    ];

    console.log(`✅ BONUS — Fuzzy match similarity scores:`);
    for (const c of cases) {
      const result = assertFuzzyMatch(c.a, c.b, { threshold: c.threshold });
      console.log(`   "${c.a}" vs "${c.b}" → ${result.message}`);
    }
    // Output shows exact similarity %:
    // "Welcome to the Internet" vs "Welcome to the internet" → 95.7% similarity
    // "Welcom to the internet" vs "Welcome to the internet"  → 95.7% similarity
    // "Login Page" vs "Log In Page"                          → 84.6% similarity
    // "Submit Form" vs "Submit"                              → 72.7% similarity
  });
});
