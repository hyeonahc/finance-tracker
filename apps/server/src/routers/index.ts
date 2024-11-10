import transactionRouter from "./transactionRouter";
import userRouter from "./userRouter";

export default [
  { path: "/transactions", router: transactionRouter },
  { path: "/users", router: userRouter },
];
