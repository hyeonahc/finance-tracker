import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
      pb={12}
    >
      <Box
        component="img"
        src="./public/finance-tracker-logo-piggy.svg"
        alt="logo"
        sx={{
          width: "100%",
          maxWidth: 300,
        }}
      />
      <Typography>Homepage is under development. Stay tuned!</Typography>
    </Box>
  );
};

export default Home;
