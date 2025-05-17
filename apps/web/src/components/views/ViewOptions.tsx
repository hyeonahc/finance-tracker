import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { styled } from "@mui/system";
import { useViewOptionStore } from "@stores/useViewOptionStore";
import { ExpenseViewType } from "src/constants/constants";

interface ViewOptionsProps {
  options: ExpenseViewType[];
  selectedView: ExpenseViewType;
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

const ViewOptions = ({ options, selectedView }: ViewOptionsProps) => {
  const { setSelectedView } = useViewOptionStore();

  const handleViewChange = (
    _event: React.MouseEvent<HTMLElement>,
    newView: ExpenseViewType | null, // TODO: Avoid using or null type
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
      {/* TODO: Replace the below to const object */}
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
