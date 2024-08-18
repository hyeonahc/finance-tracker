import Layout from "@components/Layout";
import LayoutWithBottomNav from "@components/LayoutWithBottomNav";
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
        <Route path="/" element={<LayoutWithBottomNav />}>
          <Route index element={<Home />} />
          <Route path="expense-history" element={<ExpenseHistory />} />
          <Route path="analysis-report" element={<AnalysisReport />} />
          <Route path="finance-goal" element={<FinanceGoal />} />
          <Route path="setting" element={<Setting />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
