import { ISigninResponse } from "@api/users/signin";
import { LoadingButton } from "@mui/lab";
import { Box, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSigninMutation } from "src/hooks/users/useSigninMutation";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const theme = useTheme();

  const onSuccess = (data: ISigninResponse) => {
    console.log("onSuccess data: ", data);

    if (data.token) {
      localStorage.setItem("token", data.token);
    }
    alert(data.message);
    navigate("/");
  };

  const onError = (data: Error) => {
    console.log("onError data: ", data);

    alert(data.message);
    setEmail("");
    setPassword("");
  };

  const { isPending, mutate: signinMutation } = useSigninMutation({
    onError,
    onSuccess,
  });

  const handleSigninClick = async () => {
    const userSigninData = {
      email,
      password,
    };

    await signinMutation(userSigninData);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        mt: 5,
      }}
    >
      <Box>
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
          onClick={handleSigninClick}
          size="large"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
          type="button"
          variant="contained"
        >
          Sign In
        </LoadingButton>
      </Box>
      <Box sx={{ mb: 3, textAlign: "center" }}>
        <Typography>
          Don't have an account?{" "}
          <Link
            style={{
              color: theme.palette.primary.main,
              textDecoration: "none",
            }}
            to="/signup"
          >
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignIn;
