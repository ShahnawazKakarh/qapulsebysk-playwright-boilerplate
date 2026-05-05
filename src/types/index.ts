/**
 * Shared TypeScript Types & Interfaces
 * QA Pulse by SK - www.skakarh.com
 */

// ─── User ────────────────────────────────────────────────────────────────────
export interface User {
  username: string;
  password: string;
}

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user" | "guest";
}

// ─── API ─────────────────────────────────────────────────────────────────────
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface Post {
  id?: number;
  userId: number;
  title: string;
  body: string;
}

export interface Comment {
  id?: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

// ─── Test Config ─────────────────────────────────────────────────────────────
export interface TestEnvironment {
  baseUrl: string;
  brandUrl: string;
  apiBaseUrl: string;
  credentials: User;
}

// ─── Visual Regression ───────────────────────────────────────────────────────
export interface SnapshotOptions {
  fullPage?: boolean;
  maxDiffPixelRatio?: number;
  threshold?: number;
  animations?: "disabled" | "allow";
}

// ─── Accessibility ───────────────────────────────────────────────────────────
export type WcagLevel = "wcag2a" | "wcag2aa" | "wcag21a" | "wcag21aa" | "wcag22aa";
export type ImpactLevel = "critical" | "serious" | "moderate" | "minor";
