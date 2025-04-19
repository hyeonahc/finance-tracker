import transactionController from "@controllers/transactionController";
import authMiddleware from "@middleware/authMiddleware";
import { Router } from "express";

const router: Router = Router();

router.use("/", authMiddleware);

router.get("/", transactionController.getAllTransactions);
router.get("/:id", transactionController.getTransactionById);
router.post("/", transactionController.createTransaction);
router.put("/:id", transactionController.updateTransactionById);
router.delete("/:id", transactionController.deleteTransactionById);

export default router;
