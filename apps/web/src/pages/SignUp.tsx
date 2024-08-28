import { ISignUpResponse } from "@interfaces/ISignUpResponse";
import { LoadingButton } from "@mui/lab";
import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "src/hooks/useSignup";

export default function SignUp() {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSuccess = (data: ISignUpResponse) => {
    console.log("data", data);
    if (data.success) {
      console.log("User signed up successfully:", data);
      alert("Sign up successful!");
      navigate("/");
    } else {
      console.log("User signed up failed:", data);
      alert(data.error.error);
    }
  };

  const { isPending, mutate: signupMutation } = useSignup({ onSuccess });

  const handleSignUpClick = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const user = {
      email,
      firstName,
      lastName,
      password,
    };

    const result = await signupMutation(user);
    console.log(result);
  };

  return (
    <Box mt={5}>
      <Typography gutterBottom sx={{ textAlign: "center" }} variant="h4">
        Sign Up
      </Typography>
      <TextField
        fullWidth
        label="First Name"
        margin="normal"
        onChange={(e) => setFirstName(e.target.value)}
        required
        type="text"
        value={firstName}
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Last Name"
        margin="normal"
        onChange={(e) => setLastName(e.target.value)}
        required
        type="text"
        value={lastName}
        variant="outlined"
      />
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
      <TextField
        fullWidth
        label="Confirm Password"
        margin="normal"
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        type="password"
        value={confirmPassword}
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
