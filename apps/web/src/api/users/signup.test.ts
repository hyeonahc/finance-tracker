import { describe, expect, it, vi } from "vitest";

import { ISignupRequest, ISignupResponse, signup } from "./signup";

// 📝 Unit Testing Summary:
// - Tests the `signup` function in isolation.
// - Mocks the API call (fetch), so the test does not rely on a real backend.
// - Focuses on verifying logic and behavior, not external dependencies.

const mockSignUpReqData: ISignupRequest = {
  email: "test@test.com",
  firstName: "test",
  lastName: "test",
  password: "securepassword123",
};

// const duplicateSignupData: ISignupRequest = {
//   email: "liam.smith@example.com",
//   firstName: "test",
//   lastName: "test",
//   password: "securepassword123",
// };

const mockSignUpResData: ISignupResponse = {
  _id: "abc123",
  email: "test@test.com",
  firstName: "test",
  lastName: "test",
  message: "Signup successful",
};

describe("signup API request", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  // [Unit Testing]
  // 1. This test verifies the frontend logic, the signup function correctly handles a successful API response and returns the expected data
  it("should return signup response data when the API call is successful", async () => {
    // Instruct Vitest to use a mock fetch instead of the real one
    vi.stubGlobal(
      "fetch",
      // This is the fake fetch function that replaces the real one
      vi.fn(() =>
        // The mock fetch returns a Promise, just like the real fetch
        Promise.resolve({
          json: () => Promise.resolve(mockSignUpResData), // Returns mock response data
          ok: true, // Simulates a successful response
        } as Response),
      ),
    );

    const result = await signup(mockSignUpReqData);
    expect(result).toEqual(mockSignUpResData);
  });

  // [Unit Testing]
  // 2. This test verifies the frontend logic, the signup function correctly handles a failed API response by throwing an appropriate error when the backend returns an error message
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

    await expect(signup(mockSignUpReqData)).rejects.toThrow(
      "Email already exists",
    );
  });

  // [Integration Testing]
  // 3. This test ensures the signup function throws the correct error when trying to register a user with an existing email
  // it("should return 'Error: Error creating user: User with this email already exists'", async () => {
  //   await expect(signup(duplicateSignupData)).rejects.toThrow(
  //     "Error creating user: User with this email already exists",
  //   );
  // });
});
