import { AuthenticatedRequest } from "@interfaces/IUser";
import * as transactionService from "@services/transactionService";
import { Response } from "express";

const getAllTransactions = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user!.id;
    const transactions = await transactionService.getAllTransactions(userId);
    res.status(200).json({
      message: "Transactions fetched successfully",
      transactions,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTransactionById = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user!.id;
    const transaction = await transactionService.getTransactionById(
      req.params.id,
      userId,
    );
    if (transaction) {
      res.status(200).json({
        message: "Transaction retrieved successfully",
        transaction,
      });
    } else {
      res.status(404).json({
        message: "Transaction not found",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTransaction = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user!.id;
    const transactionData = { ...req.body, userId };
    const transaction =
      await transactionService.createTransaction(transactionData);
    res.status(201).json({
      message: "Transaction created successfully",
      transaction,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateTransactionById = async (
  req: AuthenticatedRequest,
  res: Response,
) => {
  try {
    const userId = req.user!.id;
    const transaction = await transactionService.updateTransactionById(
      req.params.id,
      req.body,
      userId,
    );
    if (transaction) {
      res.status(200).json({
        message: "Transaction updated successfully",
        transaction,
      });
    } else {
      res.status(404).json({
        message: "Transaction not found",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTransactionById = async (
  req: AuthenticatedRequest,
  res: Response,
) => {
  try {
    const userId = req.user!.id;
    const transaction = await transactionService.deleteTransactionById(
      req.params.id,
      userId,
    );
    if (transaction) {
      res.status(200).json({
        message: "Transaction deleted successfully",
      });
    } else {
      res.status(404).json({ message: "Transaction not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getAllTransactions,
  getTransactionById,
  createTransaction,
  updateTransactionById,
  deleteTransactionById,
};
