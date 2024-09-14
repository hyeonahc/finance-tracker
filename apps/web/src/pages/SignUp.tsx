import { IApiResponse } from "@interfaces/IApiResponse";
import { LoadingButton } from "@mui/lab";
import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignupMutation } from "src/hooks/useSignupMutation";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const onSuccess = (data: IApiResponse) => {
    console.log(data);
    if (!data.success) {
      alert(data.error);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } else {
      alert(data.message);
      navigate("/");
    }
  };

  const { isPending, mutate: signupMutation } = useSignupMutation({
    onSuccess,
  });

  const handleSignupClick = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const userSignupData = {
      email,
      firstName,
      lastName,
      password,
    };

    await signupMutation(userSignupData);
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
        onClick={handleSignupClick}
        size="large"
        type="button"
        variant="contained"
      >
        Sign Up
      </LoadingButton>
    </Box>
  );
}
