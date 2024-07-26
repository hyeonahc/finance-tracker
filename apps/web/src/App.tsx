import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import BottomNavBar from "./components/BottomNavBar";
import PageLayout from "./components/PageLayout/PageLayout";
import Home from "./pages/Home";
import Setting from "./pages/Setting";

function App() {
  return (
    <BrowserRouter>
      <Box
        display={"flex"}
        flexDirection={"column"}
        height={"100vh"}
        justifyContent={"space-between"}
      >
        <Routes>
          <Route element={<PageLayout />} path="/">
            <Route element={<Home />} index />
            <Route element={<Setting />} path="setting" />
          </Route>
        </Routes>

        {/* Bottom Nav */}
        <BottomNavBar />
      </Box>
    </BrowserRouter>
  );
}

export default App;
