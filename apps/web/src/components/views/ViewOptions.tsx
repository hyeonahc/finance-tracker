import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

interface ViewOptionsProps {
  onViewChange: (view: string) => void;
}

const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
  "&.Mui-selected": {
    "&:hover": {
      backgroundColor: "transparent",
    },
    backgroundColor: "transparent",
    color: theme.palette.primary.main,
  },
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.primary.main,
  },
  border: "none",
  color: theme.palette.text.primary,
  fontSize: "1rem",
  textTransform: "capitalize",
}));

export default function ViewOptions({ onViewChange }: ViewOptionsProps) {
  const [view, setView] = useState("daily");

  const handleViewChange = (
    _event: React.MouseEvent<HTMLElement>,
    newView: null | string,
  ) => {
    if (newView) {
      setView(newView);
      onViewChange(newView);
    }
  };

  return (
    <Box display="flex" justifyContent="center">
      <ToggleButtonGroup
        aria-label="View Options"
        exclusive
        onChange={handleViewChange}
        sx={{ justifyContent: "space-around", width: "100%" }}
        value={view}
      >
        {["daily", "monthly", "calendar", "category"].map((option) => (
          <CustomToggleButton
            aria-label={`${option} view`}
            key={option}
            value={option}
          >
            {option}
          </CustomToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
}
