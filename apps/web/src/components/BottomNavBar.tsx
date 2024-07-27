import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  {
    href: "/",
    icon: <HomeIcon />,
    label: "Home",
    value: "/",
  },
  {
    href: "/setting",
    icon: <PersonIcon />,
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
    <Paper
      elevation={3}
      sx={{
        minHeight: "10vh",
      }}
    >
      <BottomNavigation onChange={handlechange} showLabels value={currentPath}>
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
    </Paper>
  );
}
