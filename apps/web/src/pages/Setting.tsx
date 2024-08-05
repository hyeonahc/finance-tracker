import { Box } from "@mui/material";

import { Link } from "../components/Link";
import { useUser } from "../hooks/useUser";

export default function Setting() {
  const { data, isLoading } = useUser();

  return (
    <Box>
      <Link href="/">Let's Go to Home</Link>

      {isLoading && <Box>Loading...</Box>}

      <pre>{JSON.stringify(data)}</pre>
    </Box>
  );
}
