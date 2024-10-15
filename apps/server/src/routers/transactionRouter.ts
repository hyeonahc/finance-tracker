import transactionController from "@controllers/transactionController";
import { Router } from "express";

const router: Router = Router();

router.get("/transactions", transactionController.getAllTransactions);
router.get("/transactions/:id", transactionController.getTransactionById);
router.post("/transactions", transactionController.createTransaction);
router.put("/transactions/:id", transactionController.updateTransactionById);
router.delete("/transactions/:id", transactionController.deleteTransactionById);

export default router;
