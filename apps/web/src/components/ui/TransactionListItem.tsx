import { Box, ListItem, ListItemText, Typography } from "@mui/material";
import theme from "@theme/index";
import getEmoji from "src/util/getEmoji";

type Props = {
  category?: string;
  cost: number;
  emoji?: string;
  title: string;
  type: "Expense" | "Income"; // Optional, if cost is shown
};

const TransactionListItem = ({ emoji, title, category, cost, type }: Props) => {
  return (
    <ListItem>
      <Box
        alignItems="center"
        bgcolor={theme.palette.border.main}
        borderRadius="50%"
        display="inline-flex"
        height={32}
        justifyContent="center"
        mr={2}
        p="18px"
        width={32}
      >
        <Typography>
          {category ? getEmoji(category) : getEmoji(emoji ?? "")}
        </Typography>
      </Box>

      <ListItemText
        primary={<Typography>{title}</Typography>}
        {...(category && {
          secondary: (
            <Typography color="text.secondary" variant="body2">
              {category}
            </Typography>
          ),
        })}
      />

      {cost !== undefined && (
        <Typography color={type === "Income" ? "success.main" : "error.main"}>
          {type === "Expense" && "-"}
          {cost.toLocaleString("en-CA", {
            currency: "CAD",
            style: "currency",
          })}
        </Typography>
      )}
    </ListItem>
  );
};

export default TransactionListItem;
