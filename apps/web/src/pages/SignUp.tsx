import { signupUser } from "@api/signUpUser";
import { Box, Button, TextField, Typography } from "@mui/material";
import useSignUpStore from "@store/useSignUpStore";

export default function SignUp() {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    setConfirmPassword,
  } = useSignUpStore();

  const handleSignUpClick = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    const result = await signupUser(user);

    if (result.success) {
      console.log("Sign up successful:", result.data);
    } else {
      console.error("Sign up failed:", result.error);
    }
  };

  return (
    <Box mt={5}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        Sign Up
      </Typography>
      <TextField
        fullWidth
        label="First Name"
        margin="normal"
        variant="outlined"
        type="text"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        fullWidth
        label="Last Name"
        margin="normal"
        variant="outlined"
        type="text"
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        variant="outlined"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        label="Password"
        margin="normal"
        variant="outlined"
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        fullWidth
        label="Confirm Password"
        margin="normal"
        variant="outlined"
        type="password"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        size="large"
        type="button"
        onClick={handleSignUpClick}
      >
        Sign Up
      </Button>
    </Box>
  );
}
