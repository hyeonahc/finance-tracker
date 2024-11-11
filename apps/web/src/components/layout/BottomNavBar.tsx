import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InsertChartOutlinedOutlinedIcon from "@mui/icons-material/InsertChartOutlinedOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
import { BOTTOM_NAV_HEIGHT } from "src/constants/constants";

const navItems = [
  {
    href: "/",
    icon: <HomeOutlinedIcon />,
    label: "Home",
    value: "/",
  },
  {
    href: "/expense-history",
    icon: <AccessTimeOutlinedIcon />,
    label: "Expense History",
    value: "/expense-history",
  },
  {
    href: "/analysis-report",
    icon: <InsertChartOutlinedOutlinedIcon />,
    label: "Analysis & Report",
    value: "/analysis-report",
  },
  {
    href: "/finance-goal",
    icon: <AccountBalanceWalletOutlinedIcon />,
    label: "Finance Goal",
    value: "/finance-goal",
  },
  {
    href: "/setting",
    icon: <SettingsOutlinedIcon />,
    label: "Setting",
    value: "/setting",
  },
];

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const theme = useTheme();

  const handlechange = (_: React.SyntheticEvent, newValue: number) => {
    navigate(newValue);
  };

  return (
    <Box
      sx={{
        borderLeft: `1px solid ${theme.palette.border.main}`,
        borderRight: `1px solid ${theme.palette.border.main}`,
        borderTop: `1px solid ${theme.palette.border.main}`,
        bottom: 0,
        height: BOTTOM_NAV_HEIGHT,
        position: "fixed",
        width: "767px",
      }}
    >
      <BottomNavigation
        onChange={handlechange}
        showLabels
        sx={{ height: "100%" }}
        value={currentPath}
      >
        {navItems.map((item, index) => (
          <BottomNavigationAction
            icon={item.icon}
            key={`bottom-nav-${index}`}
            label={item.label}
            onClick={() => navigate(item.href)}
            value={item.value}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
};

export default BottomNavBar;
