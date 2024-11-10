import transactionController from "@controllers/transactionController";
import { Router } from "express";
import authMiddleware from "src/middleware/authMiddleware";

const router: Router = Router();

// TODO: Apply it once to a router group to avoid setting middleware individually for each endpoint.
router.get(
  "/transactions",
  authMiddleware,
  transactionController.getAllTransactions,
);
router.get(
  "/transactions/:id",
  authMiddleware,
  transactionController.getTransactionById,
);
router.post(
  "/transactions",
  authMiddleware,
  transactionController.createTransaction,
);
router.put(
  "/transactions/:id",
  authMiddleware,
  transactionController.updateTransactionById,
);
router.delete(
  "/transactions/:id",
  authMiddleware,
  transactionController.deleteTransactionById,
);

export default router;
