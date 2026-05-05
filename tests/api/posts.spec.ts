import { test, expect } from "../../src/fixtures/apiFixture";
import { PostsApi } from "../../src/api/endpoints/PostsApi";

/**
 * API Tests - Posts Endpoint
 * API: https://jsonplaceholder.typicode.com
 * QA Pulse by SK - www.skakarh.com
 *
 * Tags: @smoke @api @regression
 */
test.describe("Posts API", () => {
  let postsApi: PostsApi;

  test.beforeEach(async ({ apiClient }) => {
    postsApi = new PostsApi(apiClient);
  });

  test("GET /posts - should return list of posts @smoke @api", async () => {
    const response = await postsApi.getAllPosts();
    expect(response.status()).toBe(200);
    const posts = await response.json();
    expect(Array.isArray(posts)).toBeTruthy();
    expect(posts.length).toBeGreaterThan(0);
  });

  test("GET /posts/:id - should return a single post @smoke @api", async () => {
    const response = await postsApi.getPostById(1);
    expect(response.status()).toBe(200);
    const post = await response.json();
    expect(post).toHaveProperty("id", 1);
    expect(post).toHaveProperty("title");
    expect(post).toHaveProperty("body");
  });

  test("POST /posts - should create a new post @regression @api", async () => {
    const newPost = { userId: 1, title: "QA Pulse Test Post", body: "Created by QA Pulse by SK" };
    const response = await postsApi.createPost(newPost);
    expect(response.status()).toBe(201);
    const created = await response.json();
    expect(created).toHaveProperty("id");
    expect(created.title).toBe(newPost.title);
  });

  test("PUT /posts/:id - should update a post @regression @api", async () => {
    const updated = { id: 1, userId: 1, title: "Updated Title", body: "Updated body" };
    const response = await postsApi.updatePost(1, updated);
    expect(response.status()).toBe(200);
    const post = await response.json();
    expect(post.title).toBe("Updated Title");
  });

  test("DELETE /posts/:id - should delete a post @regression @api", async () => {
    const response = await postsApi.deletePost(1);
    expect(response.status()).toBe(200);
  });
});
