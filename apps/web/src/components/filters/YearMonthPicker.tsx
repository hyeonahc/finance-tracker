import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

interface YearMonthPickerProps {
  dateDisplayMode: "month" | "year";
  selectedDate: Dayjs;
  setSelectedDate: React.Dispatch<React.SetStateAction<Dayjs>>;
}

const CustomDatePicker = styled(DatePicker)({
  "& .MuiInputBase-input": {
    cursor: "pointer",
    textAlign: "center",
  },
  "& .MuiOutlinedInput-root": {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiSvgIcon-root": {
      display: "none",
    },
  },
  ".MuiPickersMonth-monthButton": {
    padding: 0,
  },
});

const YearMonthPicker = ({
  dateDisplayMode,
  selectedDate,
  setSelectedDate,
}: YearMonthPickerProps) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handlePrev = () => {
    setSelectedDate(
      dateDisplayMode === "year"
        ? selectedDate.subtract(1, "year")
        : selectedDate.subtract(1, "month"),
    );
  };

  const handleNext = () => {
    const nextDate =
      dateDisplayMode === "year"
        ? selectedDate.add(1, "year")
        : selectedDate.add(1, "month");

    if (!nextDate.isAfter(dayjs())) {
      setSelectedDate(nextDate);
    }
  };

  const handleDateChange = (newDate: Dayjs | null) => {
    if (newDate) {
      setSelectedDate(newDate);
    }
    setIsDatePickerOpen(false);
  };

  return (
    <Box
      alignItems="center"
      display="flex"
      gap={2}
      justifyContent="space-between"
    >
      <IconButton onClick={handlePrev}>
        <ArrowBackIosIcon sx={{ fontSize: "large" }} />
      </IconButton>

      <CustomDatePicker
        disableFuture
        onChange={handleDateChange}
        onClose={() => setIsDatePickerOpen(false)}
        open={isDatePickerOpen}
        openTo={dateDisplayMode === "year" ? "year" : "month"}
        slotProps={{
          textField: {
            onClick: () => setIsDatePickerOpen(true),
            placeholder:
              dateDisplayMode === "year"
                ? selectedDate.format("YYYY")
                : selectedDate.format("MMMM, YYYY"),
            variant: "outlined",
          },
        }}
        value={selectedDate}
        views={dateDisplayMode === "year" ? ["year"] : ["year", "month"]}
      />

      <IconButton onClick={handleNext}>
        <ArrowForwardIosIcon sx={{ fontSize: "large" }} />
      </IconButton>
    </Box>
  );
};

export default YearMonthPicker;
