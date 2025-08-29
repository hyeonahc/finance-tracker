import { Dayjs } from "dayjs";

export interface YearMonthPickerProps {
  // TODO: Use constants
  dateDisplayMode: "month" | "year";
  selectedDate: Dayjs;
  setSelectedDate: React.Dispatch<React.SetStateAction<Dayjs>>;
}
