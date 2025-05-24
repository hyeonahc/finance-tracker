import { EXPENSE_VIEW, ExpenseViewType } from "src/constants/expenseView";
import { REPORT_VIEW, ReportView } from "src/constants/reportView";
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
        viewOptions: Object.values(EXPENSE_VIEW),
      });
    } else if (type === "report") {
      set({
        selectedView: REPORT_VIEW.NET_WORTH,
        viewOptions: Object.values(REPORT_VIEW),
      });
    }
  },
  setSelectedView: (view) => set({ selectedView: view }),
  setViewOptions: (options) => set({ viewOptions: options }),
  viewOptions: Object.values(EXPENSE_VIEW),
}));
