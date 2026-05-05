/**
 * JSON Summary Reporter
 * QA Pulse by SK - www.skakarh.com
 *
 * Reads test-results/results.json and prints a clean summary to console.
 * Usage: npm run report:json
 */

const fs = require("fs");
const path = require("path");

const resultsPath = path.join(__dirname, "../test-results/results.json");

if (!fs.existsSync(resultsPath)) {
  console.error("❌ No results.json found. Run tests first: npm test");
  process.exit(1);
}

const results = JSON.parse(fs.readFileSync(resultsPath, "utf-8"));

const { stats } = results;

const passed = stats.expected ?? 0;
const failed = stats.unexpected ?? 0;
const skipped = stats.skipped ?? 0;
const flaky = stats.flaky ?? 0;
const total = passed + failed + skipped;
const duration = ((stats.duration ?? 0) / 1000).toFixed(2);
const passRate = total > 0 ? ((passed / total) * 100).toFixed(1) : "0.0";

console.log("\n");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("  🎭  QA Pulse by SK — Playwright Test Summary");
console.log("  🌐  www.skakarh.com");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(`  ✅  Passed  : ${passed}`);
console.log(`  ❌  Failed  : ${failed}`);
console.log(`  ⏭️   Skipped : ${skipped}`);
console.log(`  🔄  Flaky   : ${flaky}`);
console.log(`  📊  Total   : ${total}`);
console.log(`  📈  Pass %  : ${passRate}%`);
console.log(`  ⏱️   Duration: ${duration}s`);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

if (failed > 0) {
  console.log("\n  ❌ Failed Tests:");
  results.suites?.forEach((suite) => {
    suite.specs?.forEach((spec) => {
      spec.tests?.forEach((test) => {
        if (test.status === "unexpected") {
          console.log(`     → ${suite.title} > ${spec.title}`);
        }
      });
    });
  });
}

console.log("\n  📄 Full HTML Report : playwright-report/index.html");
console.log("  📊 Allure Report    : npm run report:allure");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
