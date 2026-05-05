import { type APIRequestContext, type APIResponse } from "@playwright/test";

/**
 * ApiClient - Base API client wrapping Playwright's request context
 * QA Pulse by SK - www.skakarh.com
 */
export class ApiClient {
  constructor(private readonly request: APIRequestContext) {}

  async get(endpoint: string, params?: Record<string, string>): Promise<APIResponse> {
    return this.request.get(endpoint, { params });
  }

  async post(endpoint: string, data: unknown): Promise<APIResponse> {
    return this.request.post(endpoint, { data });
  }

  async put(endpoint: string, data: unknown): Promise<APIResponse> {
    return this.request.put(endpoint, { data });
  }

  async patch(endpoint: string, data: unknown): Promise<APIResponse> {
    return this.request.patch(endpoint, { data });
  }

  async delete(endpoint: string): Promise<APIResponse> {
    return this.request.delete(endpoint);
  }

  async parseJson<T>(response: APIResponse): Promise<T> {
    return response.json() as Promise<T>;
  }
}
