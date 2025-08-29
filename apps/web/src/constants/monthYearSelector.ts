export const DATE_DISPLAY_MODE = {
  MONTH: "month",
  YEAR: "year",
} as const;

export type DateDisplayMode =
  (typeof DATE_DISPLAY_MODE)[keyof typeof DATE_DISPLAY_MODE];
