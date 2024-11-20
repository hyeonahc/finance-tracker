import { ITransaction } from "@interfaces/ITransaction";
import transactionModel from "@models/transactionModel";

export const getAllTransactions = (userId: string) => {
  return transactionModel.find({ userId });
};

export const getTransactionById = (id: string, userId: string) => {
  return transactionModel.findOne({ _id: id, userId });
};

export const createTransaction = (transactionData: ITransaction) => {
  return transactionModel.create(transactionData);
};

export const updateTransactionById = (
  id: string,
  transactionData: Partial<ITransaction>,
  userId: string,
) => {
  return transactionModel.findOneAndUpdate(
    { _id: id, userId },
    transactionData,
    { new: true },
  );
};

export const deleteTransactionById = (id: string, userId: string) => {
  return transactionModel.findOneAndDelete({ _id: id, userId });
};
