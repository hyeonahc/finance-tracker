export const REPORT_VIEW = {
  CASH_FLOW: "cash flow",
  EXPENSE_BREAKDOWN: "expense breakdown",
  NET_WORTH: "net worth",
  SAVINGS_RATE: "savings rate",
  SUBSCRIPTIONS: "subscriptions",
} as const;

export type ReportView = (typeof REPORT_VIEW)[keyof typeof REPORT_VIEW];
