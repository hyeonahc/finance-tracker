import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { styled } from "@mui/system";

interface ViewOptionsProps<T extends string> {
  options: T[];
  selectedView: T;
  setSelectedView: (view: T) => void;
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

const ViewOptions = <T extends string>({
  options,
  selectedView,
  setSelectedView,
}: ViewOptionsProps<T>) => {
  const handleViewChange = (
    _event: React.MouseEvent<HTMLElement>,
    newView: T | null, // TODO: Avoid using or null type
  ) => {
    if (newView) {
      setSelectedView(newView);
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
      {options.map((option) => (
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
