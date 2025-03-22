import { describe, expect, it } from "vitest";

import { isAuthenticated, isTokenExpired } from "./authGuard";

// TODO: Questions
// 1) Understand validFutureToken issue
// 2) Generate a real token for test codes?
// 3) Should use vi?

const invalidToken = "invalid token";
// exp: 1 (January 1, 1970)
const expiredToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
  "eyJleHAiIjoxfQ." +
  "H7zFA9OSRUzj1DRR3xFxq0VpkVf92AEGrCmXOsEqk4U";
// const validFutureToken =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
//   "eyJleHAiIjo5OTk5OTk5OTk5fQ." + // exp: 9999999999
//   "h0R1RzOALXZC-SlE2mKcRZevJHVEP36Cxyh9mVKtqME";

describe("isTokenExpired", () => {
  it("should return true if token is invalid", () => {
    const result = isTokenExpired(invalidToken);
    expect(result).toBe(true);
  });

  it("should return true if token is valid and expired", () => {
    const result = isTokenExpired(expiredToken);
    expect(result).toBe(true);
  });
});

describe("isAuthenticated", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // TODO: Fix validFutureToken issue by generating a real token; it's not really valid token
  // The token is not "truly" valid — it's just a Base64 string with an exp but not signed with your backend’s JWT_SECRET
  // it("should return true if token is valid and non-expired", () => {
  //   localStorage.setItem("token", validFutureToken);
  //   const result = isAuthenticated();
  //   expect(result).toBe(true);
  // });

  it("should return false if there is no token in localStorage", () => {
    localStorage.removeItem("token");
    const result = isAuthenticated();
    expect(result).toBe(false);
  });

  it("should return false if token is invalid", () => {
    localStorage.setItem("token", invalidToken);
    const result = isAuthenticated();
    expect(result).toBe(false);
  });

  it("should return false if token is valid and expired", () => {
    localStorage.setItem("token", expiredToken);
    const result = isAuthenticated();
    expect(result).toBe(false);
  });
});
