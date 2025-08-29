export const EXPENSE_VIEW = {
  CALENDAR: "calendar",
  CATEGORY: "category",
  DAILY: "daily",
  MONTHLY: "monthly",
} as const;

export type ExpenseViewType = (typeof EXPENSE_VIEW)[keyof typeof EXPENSE_VIEW];
