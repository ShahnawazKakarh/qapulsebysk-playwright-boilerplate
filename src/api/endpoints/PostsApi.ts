import { type APIResponse } from "@playwright/test";
import { ApiClient } from "../ApiClient";

export interface Post {
  id?: number;
  userId: number;
  title: string;
  body: string;
}

/**
 * PostsApi - Endpoint class for /posts resource
 * QA Pulse by SK - www.skakarh.com
 */
export class PostsApi {
  constructor(private readonly client: ApiClient) {}

  async getAllPosts(): Promise<APIResponse> {
    return this.client.get("/posts");
  }

  async getPostById(id: number): Promise<APIResponse> {
    return this.client.get(`/posts/${id}`);
  }

  async createPost(post: Omit<Post, "id">): Promise<APIResponse> {
    return this.client.post("/posts", post);
  }

  async updatePost(id: number, post: Post): Promise<APIResponse> {
    return this.client.put(`/posts/${id}`, post);
  }

  async deletePost(id: number): Promise<APIResponse> {
    return this.client.delete(`/posts/${id}`);
  }
}
