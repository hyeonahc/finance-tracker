import dayjs, { Dayjs } from "dayjs";
import { DateDisplayMode } from "src/constants/monthYearSelector";
import { Transaction } from "src/types/transactions";

export const filterTxByYear = (transactions: Transaction[], year: string) => {
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
// selectedDate와 dateDisplayMode를 사용해 거래 데이터를 필터링
// dateDisplayMode가 "month"인 경우 > selectedDate와 같은 연월을 가진 거래 필터링
// dateDisplayMode가 "year"인 경우 > selectedDate와 같은 연도만 가진 거래 필터링
export const getFinancialSummary = (
  transactions: Transaction[],
  dateDisplayMode: DateDisplayMode,
  selectedDate: Dayjs,
): FinancialSummary => {
  let filtered = transactions;

  // 1) selectedDate = 2024-05-01, dateDisplayMode = "month"인 경우
  //    > "2024-05"와 같은 연월을 가진 거래만 필터링
  // 2) selectedDate = 2023-01-01, dateDisplayMode = "year"인 경우
  //    > "2023"년도에 발생한 모든 거래만 필터링
  const format = dateDisplayMode === "year" ? "YYYY" : "YYYY-MM";
  const target = selectedDate.format(format);
  filtered = transactions.filter(
    (tx) => dayjs(tx.date).format(format) === target,
  );

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

// TODO: Comebine all util function to one (getAllTx, getTxByYear, getTxByYearMonth)
export const getAllTx = (txs: Transaction[]) => {
  const result: {
    expense: number;
    income: number;
    total: number;
  } = { expense: 0, income: 0, total: 0 };

  for (const tx of txs) {
    if (tx.type === "Expense") {
      result.expense += tx.cost;
    } else if (tx.type === "Income") {
      result.income += tx.cost;
    }
  }

  result.total = result.income - result.expense;

  return result;
};

export const getTxByYear = (txs: Transaction[]) => {
  const result: {
    [year: string]: {
      expense: number;
      income: number;
      total: number;
    };
  } = {};

  for (const tx of txs) {
    const year = dayjs(tx.date).format("YYYY");

    if (!result[year]) {
      result[year] = {
        expense: 0,
        income: 0,
        total: 0,
      };
    }

    if (tx.type === "Expense") {
      result[year].expense += tx.cost;
    } else if (tx.type === "Income") {
      result[year].income += tx.cost;
    }
  }

  for (const year in result) {
    result[year].total = result[year].income - result[year].expense;
  }

  return result;
};

export const getTxByYearMonth = (txs: Transaction[]) => {
  const result: {
    [year: string]: {
      [month: string]: {
        expense: number;
        income: number;
        total: number;
      };
    };
  } = {};

  for (const tx of txs) {
    const year = dayjs(tx.date).format("YYYY");
    const month = dayjs(tx.date).format("MM");

    if (!result[year]) {
      result[year] = {};
    }

    if (!result[year][month]) {
      result[year][month] = {
        expense: 0,
        income: 0,
        total: 0,
      };
    }

    if (tx.type === "Expense") {
      result[year][month].expense += tx.cost;
    } else if (tx.type === "Income") {
      result[year][month].income += tx.cost;
    }
  }

  for (const year in result) {
    for (const month in result[year]) {
      result[year][month].total =
        result[year][month].income - result[year][month].expense;
    }
  }

  return result;
};

export const getTxBySelectedMonth = (
  txs: Transaction[],
  selectedMonth: string,
) => {
  const newTxs = txs.filter(
    (tx) => dayjs(tx.date).format("YYYY-MM") === selectedMonth,
  );
  return newTxs;
};

export const getTxByLatest = (txs: Transaction[]) => {
  txs.sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));
  return txs;
};

/**
 * groupTxDate return value example:
 * {
 *   "2024-11-15": [tx1, tx2],
 *   "2024-11-16": [tx3]
 * }
 *
 * - Key: formatted date string (YYYY-MM-DD)
 * - Value: array of transactions on that date
 */
export const groupTxDate = (txs: Transaction[]) => {
  return txs.reduce(
    (acc, transaction) => {
      console.log("acc: ", acc);
      const dateKey = dayjs(transaction.date).format("YYYY-MM-DD");
      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }
      acc[dateKey].push(transaction);
      return acc;
    },
    {} as Record<string, Transaction[]>,
  );
};
