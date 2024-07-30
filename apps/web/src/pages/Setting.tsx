import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

import { Link } from "../components/Link";
import { useAuthStore } from "../stores/authStore";

export default function Setting() {
  const [inputToken, setInputToken] = useState("");
  const { isLoggedIn, onLogin, onLogout } = useAuthStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputToken(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent) => {
    event?.preventDefault();
  };

  const onTestLogin = async () => {
    onLogin("test@test.com", "test");
  };
  const onTestLogout = async () => {
    onLogout();
  };
  const testLoggedIn = async () => {
    const loggedIn = await isLoggedIn();
    console.log("Logged In", loggedIn);
  };

  return (
    <Box>
      <Link href="/">Let's Go to Home</Link>

      <Box
        autoComplete="off"
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
      >
        <TextField
          id="outlined-basic"
          label="Set Token Testing"
          onChange={handleChange}
          value={inputToken}
          variant="outlined"
        />
        <Button color="primary" type="submit" variant="contained">
          Test
        </Button>
      </Box>
      <Button
        color="primary"
        onClick={onTestLogin}
        type="submit"
        variant="contained"
      >
        Login test
      </Button>
      <Button onClick={onTestLogout} type="submit" variant="contained">
        Logout test
      </Button>

      <Button onClick={testLoggedIn} type="submit" variant="contained">
        Check Logged In
      </Button>
    </Box>
  );
}
