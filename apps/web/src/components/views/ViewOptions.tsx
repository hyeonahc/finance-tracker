import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { styled } from "@mui/system";
import { ViewOption } from "@pages/ExpenseHistory";

interface ViewOptionsProps {
  onViewChange: (view: ViewOption) => void;
  selectedView: ViewOption;
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

const ViewOptions = ({ onViewChange, selectedView }: ViewOptionsProps) => {
  const handleViewChange = (
    _event: React.MouseEvent<HTMLElement>,
    newView: ViewOption | null,
  ) => {
    if (newView) {
      onViewChange(newView);
    }
  };

  return (
    <ToggleButtonGroup
      aria-label="View Options"
      exclusive
      fullWidth
      onChange={handleViewChange}
      sx={{ justifyContent: "space-around" }}
      value={selectedView}
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
  );
};

export default ViewOptions;
