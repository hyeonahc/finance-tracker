import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./components/PageLayout/PageLayout";
import Home from "./pages/Home";
import Setting from "./pages/Setting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
