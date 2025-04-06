import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  exp: number; // Expiration time (Unix timestamp)
}

export const authModule = {
  // isTokenExpired
  // - If the token is invalid or expired, return true
  // - If there is no token in localStorage, return false
  isAuthenticated: (): boolean => {
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    }
    return !authModule.isTokenExpired(token);
  },

  // isAuthenticated
  // - If there is a token in localStorage, return !isTokenExpired(token)
  // - If the token is valid and not expired, return false
  isTokenExpired: (token: string): boolean => {
    try {
      const decodedToken: DecodedToken = jwtDecode<DecodedToken>(token);
      return decodedToken.exp * 1000 < Date.now();
    } catch (error) {
      console.error("Failed to decode token:", error);
      return true;
    }
  },
};
