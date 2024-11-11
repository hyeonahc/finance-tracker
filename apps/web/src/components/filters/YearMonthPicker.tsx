import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

interface YearMonthPickerProps {
  displayMode: "monthYear" | "year";
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

export default function YearMonthPicker({ displayMode }: YearMonthPickerProps) {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handlePrev = () => {
    setSelectedDate(
      displayMode === "year"
        ? selectedDate.subtract(1, "year")
        : selectedDate.subtract(1, "month"),
    );
  };

  const handleNext = () => {
    const nextDate =
      displayMode === "year"
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
      <IconButton onClick={handlePrev} sx={{ color: "text.primary" }}>
        <ArrowBackIosNewIcon sx={{ transform: "scale(0.8, 1)" }} />
      </IconButton>

      <CustomDatePicker
        disableFuture
        onChange={handleDateChange}
        onClose={() => setIsDatePickerOpen(false)}
        open={isDatePickerOpen}
        openTo={displayMode === "year" ? "year" : "month"}
        slotProps={{
          textField: {
            onClick: () => setIsDatePickerOpen(true),
            placeholder:
              displayMode === "year"
                ? selectedDate.format("YYYY")
                : selectedDate.format("MMMM, YYYY"),
            variant: "outlined",
          },
        }}
        value={selectedDate}
        views={displayMode === "year" ? ["year"] : ["year", "month"]}
      />

      <IconButton onClick={handleNext} sx={{ color: "text.primary" }}>
        <ArrowForwardIosIcon sx={{ transform: "scale(0.8, 1)" }} />
      </IconButton>
    </Box>
  );
}
