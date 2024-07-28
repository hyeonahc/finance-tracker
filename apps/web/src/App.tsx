import PageLayout from "@components/PageLayout";
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
        <Route path="/" element={<PageLayout />}>
          {/* Main Pages: BottomNavBar is displayed */}
          <Route index element={<Home />} />
          <Route path="expense-history" element={<ExpenseHistory />} />
          <Route path="analysis-report" element={<AnalysisReport />} />
          <Route path="finance-goal" element={<FinanceGoal />} />
          <Route path="setting" element={<Setting />} />

          {/* User Pages: BottomNavBar is not displayed */}
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />

          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
