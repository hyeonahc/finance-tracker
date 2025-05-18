import {
  EXPENSE_VIEW,
  EXPENSE_VIEW_ORDER,
  ExpenseViewType,
} from "src/constants/expenseView";
import {
  REPORT_VIEW,
  REPORT_VIEW_ORDER,
  ReportView,
} from "src/constants/reportView";
import { create } from "zustand";

export type ViewType = ExpenseViewType | ReportView;

interface ViewOptionStore {
  selectedView: ViewType;
  setDefaultViews: (type: "expense" | "report") => void;
  setSelectedView: (view: ViewType) => void;
  setViewOptions: (options: ViewType[]) => void;
  viewOptions: ViewType[];
}

export const useViewOptionStore = create<ViewOptionStore>((set) => ({
  selectedView: EXPENSE_VIEW.DAILY,
  setDefaultViews: (type) => {
    if (type === "expense") {
      set({
        selectedView: EXPENSE_VIEW.DAILY,
        viewOptions: EXPENSE_VIEW_ORDER,
      });
    } else if (type === "report") {
      set({
        selectedView: REPORT_VIEW.NET_WORTH,
        viewOptions: REPORT_VIEW_ORDER,
      });
    }
  },
  setSelectedView: (view) => set({ selectedView: view }),
  setViewOptions: (options) => set({ viewOptions: options }),
  viewOptions: EXPENSE_VIEW_ORDER,
}));
