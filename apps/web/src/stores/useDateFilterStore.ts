import dayjs, { Dayjs } from "dayjs";
import { create } from "zustand";

export const DATE_DISPLAY_MODE = {
  MONTH: "month",
  YEAR: "year",
} as const;

export type DateDisplayMode =
  (typeof DATE_DISPLAY_MODE)[keyof typeof DATE_DISPLAY_MODE];

interface DateFilterState {
  dateDisplayMode: DateDisplayMode;
  selectedDate: Dayjs;
  setDateDisplayMode: (mode: DateDisplayMode) => void;
  setSelectedDate: (date: Dayjs) => void;
}

export const useDateFilterStore = create<DateFilterState>((set) => ({
  dateDisplayMode: DATE_DISPLAY_MODE.MONTH,
  selectedDate: dayjs(),
  setDateDisplayMode: (mode) => set({ dateDisplayMode: mode }),
  setSelectedDate: (date) => set({ selectedDate: date }),
}));
