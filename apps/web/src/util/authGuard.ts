import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  exp: number; // Expiration time (Unix timestamp)
}

export const isTokenExpired = (token: string): boolean => {
  try {
    const decodedToken: DecodedToken = jwtDecode<DecodedToken>(token);
    return decodedToken.exp * 1000 < Date.now();
  } catch (error) {
    console.error("Failed to decode token:", error);
    return true;
  }
};

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("token");
  if (!token) {
    return false;
  }
  return !isTokenExpired(token);
};
