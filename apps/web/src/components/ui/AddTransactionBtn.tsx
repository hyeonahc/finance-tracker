import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";

interface AddTransactionBtnProps {
  onClick: () => void;
}

const AddTransactionBtn = ({ onClick }: AddTransactionBtnProps) => {
  return (
    <Fab
      color="primary"
      onClick={onClick}
      sx={{
        bottom: 70,
        position: "absolute",
        right: 20,
      }}
    >
      {/* TODO: Fix TypeScript error theme.palette.text.btn */}
      <AddIcon sx={{ color: "#fff" }} />
    </Fab>
  );
};

export default AddTransactionBtn;
