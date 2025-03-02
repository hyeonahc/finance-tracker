import { EventContentArg } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import dayjs from "dayjs";
import { useMemo } from "react";
import { ISavedTransaction } from "src/types/transactions";

interface CustomEvent extends EventContentArg {
  event: { cost?: string } & EventContentArg["event"];
  transactionType: { transactionType?: string } & EventContentArg["event"];
}

interface CalendarViewProps {
  selectedMonth: string;
  transactions: ISavedTransaction[];
}

const CalendarView = ({ selectedMonth, transactions }: CalendarViewProps) => {
  const theme = useTheme();

  const events = useMemo(() => {
    return transactions
      .filter(
        (transaction) =>
          dayjs(transaction.date).format("YYYY-MM") === selectedMonth,
      )
      .map((transaction) => ({
        cost: `${transaction.type === "Expense" ? "-" : ""}$${transaction.cost.toLocaleString("en-US")}`,
        id: transaction._id.toString(),
        start: transaction.date,
        title: `${transaction.title}`,
        transactionType: transaction.type,
      }));
  }, [transactions, selectedMonth]);

  return (
    <Box py={5}>
      <FullCalendar
        contentHeight="auto"
        dayCellContent={(cellInfo) => (
          <Typography color="text.secondary" p={1}>
            {cellInfo.dayNumberText}
          </Typography>
        )}
        dayHeaderContent={(headerInfo) => (
          <Typography color="text.primary">{headerInfo.text}</Typography>
        )}
        dayMaxEventRows={true}
        // TODO: Add UI onClick
        // eventClick={(eventInfo) => {
        //   alert(
        //     `${eventInfo.event.title}: ${eventInfo.event.extendedProps?.cost}`,
        //   );
        // }}
        eventContent={(eventInfo: CustomEvent) => (
          <Box
            p={0.5}
            sx={{
              border: 1,
              borderColor: `${theme.palette.border.main}`,
              // cursor: "pointer",
              width: "100%",
            }}
          >
            <Typography
              color="text.primary"
              fontSize="0.8rem"
              whiteSpace="normal"
            >
              {eventInfo.event.title}
            </Typography>
            {eventInfo.event.extendedProps?.cost && (
              <Typography
                color={
                  eventInfo.event.extendedProps.transactionType === "Income"
                    ? "success.main"
                    : "error.main"
                }
                fontSize="0.8rem"
                whiteSpace="normal"
              >
                {eventInfo.event.extendedProps.cost}
              </Typography>
            )}
          </Box>
        )}
        events={events}
        headerToolbar={false}
        height="auto"
        initialDate={dayjs(selectedMonth, "YYYY-MM").toDate()}
        initialView="dayGridMonth"
        key={selectedMonth}
        plugins={[dayGridPlugin, interactionPlugin]}
      />
    </Box>
  );
};

export default CalendarView;
