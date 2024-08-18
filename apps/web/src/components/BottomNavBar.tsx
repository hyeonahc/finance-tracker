import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InsertChartOutlinedOutlinedIcon from "@mui/icons-material/InsertChartOutlinedOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

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

export default function BottomNavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handlechange = (_: React.SyntheticEvent, newValue: number) => {
    navigate(newValue);
  };

  return (
    <Box
      sx={{
        bottom: 0,
        height: "80px",
        left: 0,
        position: "fixed",
        right: 0,
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
}
