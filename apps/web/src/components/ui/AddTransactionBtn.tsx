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
        bottom: "calc(80px + 20px)",
        position: "fixed",
        right: "calc((100vw - 767px) / 2 + 30px)",
        zIndex: 10,
      }}
    >
      {/* TODO: Fix TypeScript error theme.palette.text.btn */}
      <AddIcon sx={{ color: "#fff" }} />
    </Fab>
  );
};

export default AddTransactionBtn;
