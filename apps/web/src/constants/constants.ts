export const BOTTOM_NAV_HEIGHT = "80px";
export const LAYOUT_PADDING = 5;
export const BORDER_RADIUS = "4px";

export const DATE_DISPLAY_MODE = {
  MONTH: "month",
  YEAR: "year",
} as const;

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
