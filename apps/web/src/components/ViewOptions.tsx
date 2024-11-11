import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

interface ViewOptionsProps {
  onViewChange: (view: string) => void;
}

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
    <Box display="flex" justifyContent="center" mb={2}>
      <ToggleButtonGroup
        aria-label="View Options"
        exclusive
        onChange={handleViewChange}
        value={view}
      >
        <ToggleButton aria-label="Daily View" value="daily">
          Daily
        </ToggleButton>
        <ToggleButton aria-label="Monthly View" value="monthly">
          Monthly
        </ToggleButton>
        <ToggleButton aria-label="Calendar View" value="calendar">
          Calendar
        </ToggleButton>
        <ToggleButton aria-label="Category View" value="category">
          Category
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
