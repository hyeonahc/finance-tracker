export type ExpenseViewType = (typeof EXPENSE_VIEW)[keyof typeof EXPENSE_VIEW];

export const EXPENSE_VIEW = {
  CALENDAR: "calendar",
  CATEGORY: "category",
  DAILY: "daily",
  MONTHLY: "monthly",
} as const;

export const EXPENSE_VIEW_ORDER: ExpenseViewType[] = [
  EXPENSE_VIEW.DAILY,
  EXPENSE_VIEW.MONTHLY,
  EXPENSE_VIEW.CALENDAR,
  EXPENSE_VIEW.CATEGORY,
];
