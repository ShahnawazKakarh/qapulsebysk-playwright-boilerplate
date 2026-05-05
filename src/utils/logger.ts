/**
 * Logger - Structured test logging utility
 * QA Pulse by SK - www.skakarh.com
 *
 * Provides consistent, colour-coded console output during test runs.
 * Works with Allure step attachments.
 */

type LogLevel = "info" | "warn" | "error" | "success" | "debug" | "step";

const PREFIX = "🎭 [QA Pulse]";

const COLORS = {
  info:    "\x1b[36m",  // Cyan
  warn:    "\x1b[33m",  // Yellow
  error:   "\x1b[31m",  // Red
  success: "\x1b[32m",  // Green
  debug:   "\x1b[35m",  // Magenta
  step:    "\x1b[34m",  // Blue
  reset:   "\x1b[0m",
};

const ICONS: Record<LogLevel, string> = {
  info:    "ℹ️ ",
  warn:    "⚠️ ",
  error:   "❌",
  success: "✅",
  debug:   "🔍",
  step:    "▶️ ",
};

function log(level: LogLevel, message: string, data?: unknown): void {
  const color = COLORS[level];
  const icon = ICONS[level];
  const timestamp = new Date().toISOString().split("T")[1].slice(0, 8);
  const formatted = `${color}${PREFIX} ${icon} [${timestamp}] ${message}${COLORS.reset}`;

  if (level === "error") {
    console.error(formatted, data !== undefined ? data : "");
  } else {
    console.log(formatted, data !== undefined ? data : "");
  }
}

export const logger = {
  info:    (msg: string, data?: unknown) => log("info", msg, data),
  warn:    (msg: string, data?: unknown) => log("warn", msg, data),
  error:   (msg: string, data?: unknown) => log("error", msg, data),
  success: (msg: string, data?: unknown) => log("success", msg, data),
  debug:   (msg: string, data?: unknown) => log("debug", msg, data),
  step:    (msg: string, data?: unknown) => log("step", msg, data),
};
