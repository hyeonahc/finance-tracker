import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Setting from "./pages/Setting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Setting />} path="/setting" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
