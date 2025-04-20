export const BOTTOM_NAV_HEIGHT = "80px";
export const LAYOUT_PADDING = 5;
export const BORDER_RADIUS = "4px";

export const DATE_DISPLAY_MODE = {
  MONTH: "month",
  YEAR: "year",
} as const;

// Question: Where should I include type?
export type DateDisplayMode =
  (typeof DATE_DISPLAY_MODE)[keyof typeof DATE_DISPLAY_MODE];
