import transactionController from "@controllers/transactionController";
import { Router } from "express";
import authMiddleware from "src/middleware/authMiddleware";

const router: Router = Router();

router.use("/", authMiddleware);

router.get("/", transactionController.getAllTransactions);
router.get("/:id", transactionController.getTransactionById);
router.post("/", transactionController.createTransaction);
router.put("/:id", transactionController.updateTransactionById);
router.delete("/:id", transactionController.deleteTransactionById);

export default router;
