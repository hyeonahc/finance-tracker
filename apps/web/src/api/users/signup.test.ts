import { beforeEach, describe, expect, it, vi } from "vitest";

import { ISignupRequest, ISignupResponse, signup } from "./signup";

// TODO: Questions
// 1) vi vs jest
// 2) vi.stubGlobal & vi.fn

const mockUserData: ISignupRequest = {
  email: "test@example.com", // TODO: invalid email format passed
  firstName: "Test",
  lastName: "User",
  password: "securepassword123", // TODO: invalid password passed
};

const mockResponseData: ISignupResponse = {
  _id: "abc123",
  email: "test@example.com",
  firstName: "Test",
  lastName: "User",
  message: "Signup successful",
};

describe("signup API request", () => {
  // TODO:  Why is this step necessary?
  beforeEach(() => {
    vi.restoreAllMocks(); // reset previous mocks
  });

  it("should return signup response data when the API call is successful", async () => {
    // TODO: Why the below code is needd?
    vi.stubGlobal(
      // replaces the real fetch function with a mocked version just for this test
      "fetch",
      vi.fn(() =>
        // when fetch is called, execute the below fake function instead
        Promise.resolve({
          json: () => Promise.resolve(mockResponseData), // returns mock data when .json() is called
          ok: true, // pretends it succeeded
        } as Response),
      ),
    );

    const result = await signup(mockUserData);
    expect(result).toEqual(mockResponseData);
  });

  it("should throw an error when the API call fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({ message: "Email already exists" }),
          ok: false,
        } as Response),
      ),
    );

    await expect(signup(mockUserData)).rejects.toThrow("Email already exists");
  });
});
