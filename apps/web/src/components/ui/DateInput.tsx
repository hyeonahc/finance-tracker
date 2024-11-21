import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

interface DateInputProps {
  date: Dayjs | null;
  setDate: (date: Dayjs | null) => void;
}

const DateInput = ({ date, setDate }: DateInputProps) => {
  const changeDate = (date: Dayjs | null) => {
    setDate(date);
  };

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
        value={date}
      />
    </LocalizationProvider>
  );
};

export default DateInput;
