import { DatePicker } from "@mui/x-date-pickers";
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
  );
};

export default DateInput;
