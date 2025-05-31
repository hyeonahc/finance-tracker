import dayjs, { Dayjs } from "dayjs";
import { DateDisplayMode } from "src/constants/monthYearSelector";
import { ISavedTransaction } from "src/types/transactions";

export const filterTxByYear = (
  transactions: ISavedTransaction[],
  year: string,
) => {
  return transactions.filter((tx) => dayjs(tx.date).format("YYYY") === year);
};

export interface FinancialSummary {
  expense: number;
  income: number;
  total: number;
}

// 사용자의 거래 데이터를 기반으로 수입, 지출, 총합을 계산하는 함수
// transactions: 사용자가 저장한 모든 거래 데이터
// dateDisplayMode: 날짜 표시 방식 ("year" 또는 "month")
// selectedDate: 기준이 되는 날짜 (Dayjs 객체)
// filterByDate:
//   - true(기본값): selectedDate와 dateDisplayMode를 사용해 거래 데이터를 필터링
//                  dateDisplayMode가 "month"인 경우 > selectedDate와 같은 연월을 가진 거래 필터링
//                  dateDisplayMode가 "year"인 경우 > selectedDate와 같은 연도만 가진 거래 필터링
//   - false: 전체 거래 데이터를 사용하여 요약 계산
export const getFinancialSummary = (
  transactions: ISavedTransaction[],
  dateDisplayMode: DateDisplayMode,
  selectedDate: Dayjs,
  filterByDate: boolean = true,
): FinancialSummary => {
  let filtered = transactions;

  // filterByDater가 true일 때
  // 1) selectedDate = 2024-05-01, dateDisplayMode = "month"인 경우
  //    > "2024-05"와 같은 연월을 가진 거래만 필터링
  // 2) selectedDate = 2023-01-01, dateDisplayMode = "year"인 경우
  //    > "2023"년도에 발생한 모든 거래만 필터링
  if (filterByDate) {
    const format = dateDisplayMode === "year" ? "YYYY" : "YYYY-MM";
    const target = selectedDate.format(format);
    filtered = transactions.filter(
      (tx) => dayjs(tx.date).format(format) === target,
    );
  }

  let income = 0;
  let expense = 0;

  // 거래 데이터를 하나씩 가져와 수입과 지출을 합산
  for (const tx of filtered) {
    if (tx.type === "Income") income += tx.cost;
    if (tx.type === "Expense") expense += tx.cost;
  }

  // 계산된 수입, 지출, 총합을 리턴
  return {
    income,
    expense,
    total: income - expense,
  };
};

// TODO: Create a new util function that returns all trnsaction by year and month
// return { 2024: { Jan: ... , Feb: ... }  }
