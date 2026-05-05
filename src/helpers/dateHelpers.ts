/**
 * Date Helpers - Date and time utilities for tests
 * QA Pulse by SK - www.skakarh.com
 */
export function todayFormatted(format: "YYYY-MM-DD" | "DD/MM/YYYY" = "YYYY-MM-DD"): string {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return format === "YYYY-MM-DD" ? `${yyyy}-${mm}-${dd}` : `${dd}/${mm}/${yyyy}`;
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function timestamp(): string {
  return new Date().toISOString().replace(/[:.]/g, "-");
}
