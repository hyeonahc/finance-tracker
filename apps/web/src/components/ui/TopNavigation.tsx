import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface TopNavigationProps {
  title: string;
}

const TopNavigation = ({ title }: TopNavigationProps) => {
  const navigate = useNavigate();

  const goToPreviousPage = () => {
    navigate(-1);
  };

  return (
    <AppBar
      elevation={0}
      sx={{
        bgcolor: "background.paper",
      }}
    >
      <Toolbar disableGutters sx={{ padding: 0 }}>
        <IconButton
          edge="start"
          onClick={goToPreviousPage}
          sx={{ m: 0, p: "10px" }}
        >
          <ArrowBackIosIcon sx={{ fontSize: "large" }} />
        </IconButton>
        <Typography sx={{ flexGrow: 1, textAlign: "center" }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavigation;
