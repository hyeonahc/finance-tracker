import { IApiResponse } from "@interfaces/IApiResponse";
import { LoadingButton } from "@mui/lab";
import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSigninMutation } from "src/hooks/useSigninMutation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSuccess = (data: IApiResponse) => {
    console.log(data);
    if (!data.success) {
      alert(data.error);
      setEmail("");
      setPassword("");
    } else {
      alert(data.message);
      navigate("/");
    }
  };

  const { isPending, mutate: signinMutation } = useSigninMutation({
    onSuccess,
  });

  const handleSigninClick = async () => {
    const userSigninData = {
      email,
      password,
    };

    const result = await signinMutation(userSigninData);
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
        onClick={handleSigninClick}
        size="large"
        type="button"
        variant="contained"
      >
        Sign In
      </LoadingButton>
    </Box>
  );
}
