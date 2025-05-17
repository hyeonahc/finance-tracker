import {
  EXPENSE_VIEW,
  EXPENSE_VIEW_ORDER,
  ExpenseViewType,
} from "src/constants/constants";
import { create } from "zustand";

interface ViewOptionStore {
  selectedView: ExpenseViewType;
  setSelectedView: (view: ExpenseViewType) => void;
  setViewOptions: (options: ExpenseViewType[]) => void;
  viewOptions: ExpenseViewType[];
}

export const useViewOptionStore = create<ViewOptionStore>((set) => ({
  selectedView: EXPENSE_VIEW.DAILY,
  setSelectedView: (view) => set({ selectedView: view }),
  setViewOptions: (options) => set({ viewOptions: options }),
  viewOptions: EXPENSE_VIEW_ORDER,
}));
