import { describe, expect, it, vi } from "vitest";

import { authModule } from "./authGuard";

// 📝 How localStorage.setItem() works in test environment
// - Vitest tests run in a simulated browser environment (jsdom),
// - so localStorage is mocked and does not affect the actual browser.

// 📝 vi.spyOn(authModule, "isTokenExpired").mockReturnValue(...)
// - vi.spyOn(): Allows you to spy on (monitor and override) a specific function in a module.
// - vi.spyOn(authModule, "isTokenExpired"):  Spies on the isTokenExpired function inside the authModule.
// - mockReturnValue(...): Overrides the real implementation of isTokenExpired with a fixed return value.

describe("isTokenExpired", () => {
  it("should return true if token is invalid", () => {
    const invalidToken = "invalid token";
    const result = authModule.isTokenExpired(invalidToken);
    expect(result).toBe(true);
  });

  it("should return true if token is valid and expired", () => {
    const expiredToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
      "eyJleHAiOjE2MDAwMDAwMDB9." +
      "abc123";
    const result = authModule.isTokenExpired(expiredToken);
    expect(result).toBe(true);
  });
});

describe("isAuthenticated", () => {
  beforeEach(() => {
    // 📝 When the test calls localStorage.clear(), it clears data inside the test context only, not the actual browser.
    localStorage.clear();
    // TODO:
    vi.restoreAllMocks();
  });

  it("should return false if there is no token in localStorage", () => {
    const result = authModule.isAuthenticated();
    expect(result).toBe(false);
  });

  it("should return false if token is valid and expired", () => {
    localStorage.setItem("token", "expired-token");
    vi.spyOn(authModule, "isTokenExpired").mockReturnValue(true);
    const result = authModule.isAuthenticated();
    expect(result).toBe(false);
  });

  it("should return true if the token is valid and not expired", () => {
    localStorage.setItem("token", "valid-token");
    vi.spyOn(authModule, "isTokenExpired").mockReturnValue(false);
    const result = authModule.isAuthenticated();
    expect(result).toBe(true);
  });
});
