import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { alpha, styled, useTheme } from "@mui/system";
import { BORDER_RADIUS } from "src/constants/constants";

interface TransactionTypeToggleProps {
  changeType: (value: "Expense" | "Income") => void;
  type: "Expense" | "Income";
}

interface StyledToggleButtonProps {
  backgroundColor: string;
  selectedBorderColor: string;
  selectedTextColor: string;
}

const CustomToggleButton = styled(ToggleButton, {
  shouldForwardProp: (prop) =>
    prop !== "selectedBorderColor" &&
    prop !== "selectedTextColor" &&
    prop !== "backgroundColor",
})<StyledToggleButtonProps>(
  ({ backgroundColor, selectedBorderColor, selectedTextColor }) => ({
    "&.Mui-selected": {
      "&:hover": {
        backgroundColor: backgroundColor,
      },
      backgroundColor: "#fff",
      border: `1px solid ${selectedBorderColor}`,
      color: selectedTextColor,
    },
    "&:hover": {
      backgroundColor: backgroundColor,
      border: `1px solid ${selectedBorderColor}`,
    },
    borderRadius: BORDER_RADIUS,
    textTransform: "capitalize",
  }),
);

const TransactionTypeToggle = ({
  changeType,
  type,
}: TransactionTypeToggleProps) => {
  const theme = useTheme();

  const toggleTransactionType = (
    _event: React.MouseEvent<HTMLElement>,
    newValue: null | string,
  ) => {
    if (newValue) {
      changeType(newValue as "Expense" | "Income");
    }
  };

  return (
    <ToggleButtonGroup
      exclusive
      onChange={toggleTransactionType}
      sx={{ display: "flex", justifyContent: "center", width: "100%" }}
      value={type}
    >
      <CustomToggleButton
        backgroundColor={alpha(theme.palette.error.main, 0.2)}
        fullWidth
        selectedBorderColor={theme.palette.error.main}
        selectedTextColor={theme.palette.error.main}
        value="Expense"
      >
        Expense
      </CustomToggleButton>
      <CustomToggleButton
        backgroundColor={alpha(theme.palette.success.main, 0.2)}
        fullWidth
        selectedBorderColor={theme.palette.success.main}
        selectedTextColor={theme.palette.success.main}
        value="Income"
      >
        Income
      </CustomToggleButton>
    </ToggleButtonGroup>
  );
};

export default TransactionTypeToggle;
