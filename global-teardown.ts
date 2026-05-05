import { logger } from "./src/utils/logger";

/**
 * Global Teardown — Runs ONCE after the entire test suite
 * QA Pulse by SK - www.skakarh.com
 *
 * Tasks:
 *   1. Log test suite completion
 *   2. Clean up temp files if needed
 */
export default async function globalTeardown() {
  logger.info("Global teardown running...");
  logger.success("Test suite complete. Report: playwright-report/index.html");
  logger.info("Allure report: npm run report:allure");
}
