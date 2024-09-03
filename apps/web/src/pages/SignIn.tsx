import { ISignUpResponse } from "@interfaces/ISignUpResponse";
import { LoadingButton } from "@mui/lab";
import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignin } from "src/hooks/useSignin";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSuccess = (data: ISignUpResponse) => {
    console.log("data", data);
    if (data.success) {
      console.log("User signed in successfully:", data);
      alert("Sign in successful!");
      navigate("/");
    } else {
      console.log("User signed in failed:", data);
      alert(data.error.error);
    }
  };

  const { isPending, mutate: signupMutation } = useSignin({ onSuccess });

  const handleSignUpClick = async () => {
    const user = {
      email,
      password,
    };

    const result = await signupMutation(user);
    console.log(result);
  };

  return (
    <Box mt={5}>
      <Typography gutterBottom sx={{ textAlign: "center" }} variant="h4">
        Sign In
      </Typography>
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        onChange={(e) => setEmail(e.target.value)}
        required
        type="email"
        value={email}
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Password"
        margin="normal"
        onChange={(e) => setPassword(e.target.value)}
        required
        type="password"
        value={password}
        variant="outlined"
      />
      <LoadingButton
        color="primary"
        fullWidth
        loading={isPending}
        onClick={handleSignUpClick}
        size="large"
        type="button"
        variant="contained"
      >
        Sign Up
      </LoadingButton>
    </Box>
  );
}
