import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

import { useLogin } from "../hooks/useLogin";
import { useLogout } from "../hooks/useLogout";
import { useUser } from "../hooks/useUser";

export default function Test() {
  const { data, isLoading: isUserLoading } = useUser();
  const { isPending, mutate: login } = useLogin();
  const logout = useLogout();

  const [password, setPassword] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    await login({ email: "hello@world.com", password: password });
  };
  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <Box>This is Test Page. Only logged in user can access this page.</Box>
      <div>
        <h2>Login Test</h2>
        <TextField
          id="outlined-basic"
          label="password"
          onChange={handleChange}
          value={password}
          variant="outlined"
        />
        <Button color="primary" onClick={handleLogin} variant="contained">
          Login
        </Button>
        <Button color="primary" onClick={handleLogout} variant="contained">
          Logout
        </Button>
      </div>
      {isPending || (isUserLoading && <Box>Loading...</Box>)}
      {data && (
        <>
          <h2>User Data:</h2>
          <pre>{JSON.stringify(data)}</pre>
        </>
      )}
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
        quaerat, reprehenderit, tenetur qui doloribus magnam corrupti ut iusto
        saepe quos quidem vero illo nam a quisquam corporis ex praesentium quis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
        quaerat, reprehenderit, tenetur qui doloribus magnam corrupti ut iusto
        saepe quos quidem vero illo nam a quisquam corporis ex praesentium quis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
        quaerat, reprehenderit, tenetur qui doloribus magnam corrupti ut iusto
        saepe quos quidem vero illo nam a quisquam corporis ex praesentium quis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
        quaerat, reprehenderit, tenetur qui doloribus magnam corrupti ut iusto
        saepe quos quidem vero illo nam a quisquam corporis ex praesentium quis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
        quaerat, reprehenderit, tenetur qui doloribus magnam corrupti ut iusto
        saepe quos quidem vero illo nam a quisquam corporis ex praesentium quis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
        quaerat, reprehenderit, tenetur qui doloribus magnam corrupti ut iusto
        saepe quos quidem vero illo nam a quisquam corporis ex praesentium quis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
        quaerat, reprehenderit, tenetur qui doloribus magnam corrupti ut iusto
        saepe quos quidem vero illo nam a quisquam corporis ex praesentium quis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
        quaerat, reprehenderit, tenetur qui doloribus magnam corrupti ut iusto
        saepe quos quidem vero illo nam a quisquam corporis ex praesentium quis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
        quaerat, reprehenderit, tenetur qui doloribus magnam corrupti ut iusto
        saepe quos quidem vero illo nam a quisquam corporis ex praesentium quis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
        quaerat, reprehenderit, tenetur qui doloribus magnam corrupti ut iusto
        saepe quos quidem vero illo nam a quisquam corporis ex praesentium quis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
        quaerat, reprehenderit, tenetur qui doloribus magnam corrupti ut iusto
        saepe quos quidem vero illo nam a quisquam corporis ex praesentium quis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
        quaerat, reprehenderit, tenetur qui doloribus magnam corrupti ut iusto
        saepe quos quidem vero illo nam a quisquam corporis ex praesentium quis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
        quaerat, reprehenderit, tenetur qui doloribus magnam corrupti ut iusto
        saepe quos quidem vero illo nam a quisquam corporis ex praesentium quis?
      </p>
    </div>
  );
}
