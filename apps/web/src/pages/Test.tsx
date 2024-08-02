import { Box } from "@mui/material";
import { useEffect } from "react";

import { useAuthStore } from "../stores/authStore";

export default function Test() {
  const { isAuthorized } = useAuthStore();

  useEffect(() => {
    const redirect = async () => {
      const isValidUser = await isAuthorized();
      if (!isValidUser) {
        window.location.href = "/";
      }
    };
    redirect();
  }, [isAuthorized]);

  return (
    <Box>This is Test Page. Only logged in user can access this page.</Box>
  );
}
