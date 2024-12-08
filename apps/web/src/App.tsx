import AppWrapper from "@components/layout/AppWrapper";
import Layout from "@components/layout/Layout";
import LayoutWithBottomNav from "@components/layout/LayoutWithBottomNav";
import ProtectedRoute from "@components/utility/ProtectedRoute";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddTransaction from "@pages/AddTransaction";
import AnalysisReport from "@pages/AnalysisReport";
import ExpenseHistory from "@pages/ExpenseHistory";
import FinanceGoal from "@pages/FinanceGoal";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Setting from "@pages/Setting";
import SignIn from "@pages/SignIn";
import SignUp from "@pages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppWrapper />} path="/">
            <Route element={<LayoutWithBottomNav />} path="/">
              {/* TODO: AddTransaction component should be part of ProtectedRoute */}
              <Route element={<ProtectedRoute />}>
                <Route element={<Home />} index />
                <Route element={<ExpenseHistory />} path="expense-history" />
                <Route element={<AnalysisReport />} path="analysis-report" />
                <Route element={<FinanceGoal />} path="finance-goal" />
                <Route element={<Setting />} path="setting" />
              </Route>
              <Route element={<NotFound />} path="*" />
            </Route>
            <Route element={<Layout />} path="/">
              <Route element={<AddTransaction />} path="add-transaction" />
            </Route>
            <Route element={<Layout />} path="/">
              <Route element={<SignIn />} path="signin" />
              <Route element={<SignUp />} path="signup" />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
};

export default App;
