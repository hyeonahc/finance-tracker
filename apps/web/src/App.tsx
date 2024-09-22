import AppWrapper from "@components/AppWrapper";
import Layout from "@components/Layout";
import LayoutWithBottomNav from "@components/LayoutWithBottomNav";
import ProtectedRoute from "@components/ProtectedRoute";
import AnalysisReport from "@pages/AnalysisReport";
import ExpenseHistory from "@pages/ExpenseHistory";
import FinanceGoal from "@pages/FinanceGoal";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Setting from "@pages/Setting";
import SignIn from "@pages/SignIn";
import SignUp from "@pages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppWrapper />} path="/">
          <Route element={<LayoutWithBottomNav />} path="/">
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
            <Route element={<SignIn />} path="signin" />
            <Route element={<SignUp />} path="signup" />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
