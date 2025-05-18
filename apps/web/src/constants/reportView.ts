export const REPORT_VIEW = {
  CASH_FLOW: "cash flow",
  EXPENSE_BREAKDOWN: "expense breakdown",
  NET_WORTH: "net worth",
  SAVINGS_RATE: "savings rate",
  SUBSCRIPTIONS: "subscriptions",
} as const;

export type ReportView = (typeof REPORT_VIEW)[keyof typeof REPORT_VIEW];

export const REPORT_VIEW_ORDER: ReportView[] = [
  REPORT_VIEW.NET_WORTH,
  REPORT_VIEW.CASH_FLOW,
  REPORT_VIEW.EXPENSE_BREAKDOWN,
  REPORT_VIEW.SAVINGS_RATE,
  REPORT_VIEW.SUBSCRIPTIONS,
];
