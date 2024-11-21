import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

interface DateInputProps {
  changeDate: (date: Dayjs | null) => void;
  selectedDate: Dayjs | null;
}

const DateInput = ({ changeDate, selectedDate }: DateInputProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        disableFuture
        format="MM/DD/YYYY"
        label="Date"
        onChange={changeDate}
        slotProps={{
          textField: {
            fullWidth: true,
            placeholder: "MM/DD/YYYY",
            variant: "outlined",
          },
        }}
        value={selectedDate}
      />
    </LocalizationProvider>
  );
};

export default DateInput;
