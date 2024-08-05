// const API_BASE_URL = "http://localhost:4000/api";

export const login = async (email: string, password: string) => {
  // TODO: replace this with actual login logic
  console.log("login", email, password);
  // make delay for 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { token: "this-will-be-jwt-token-value" };

  //   const response = await fetch(`${API_BASE_URL}/user/login`, {
  //     body: JSON.stringify({ email, password }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "POST",
  //   });
  //   if (!response.ok) {
  //     throw new Error("Failed to login");
  //   }
  //   return response.json();
};

export const getUser = async (token: string) => {
  // TODO: replace this with actual user fetch logic
  console.log("getUser", token);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    age: 40,
    name: "Mike",
  };

  //   const response = await fetch(`${API_BASE_URL}/user/me`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });

  //   if (!response.ok) {
  //     throw new Error("Failed to fetch user");
  //   }

  //   return response.json();
};
