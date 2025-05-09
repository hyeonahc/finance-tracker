import piggyLogo from "@img/finance-tracker-logo-piggy.svg";
import { Box, Typography } from "@mui/material";

interface MaintenanceModeProps {
  pageName?: string;
}

const MaintenanceMode = ({ pageName }: MaintenanceModeProps) => {
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      height="100%"
      justifyContent="center"
      pb={12}
      width="100%"
    >
      <Box
        alt="logo"
        component="img"
        src={piggyLogo}
        sx={{
          maxWidth: 300,
          width: "100%",
        }}
      />
      <Typography>{pageName} is under development. Stay tuned!</Typography>
    </Box>
  );
};

export default MaintenanceMode;
