import { TextField } from "@mui/material";

interface CostInputProps {
  cost: string;
  setCost: (value: string) => void;
}

const CostInput = ({ cost, setCost }: CostInputProps) => {
  const updateCost = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setCost(value);
    }
  };

  return (
    <TextField
      fullWidth
      label="Cost"
      onChange={updateCost}
      placeholder="0.00"
      value={cost}
      variant="outlined"
    />
  );
};

export default CostInput;
