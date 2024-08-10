import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import BottomNavBar from "./components/BottomNavBar";
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
          <Route element={<Home />} path="/" />
          <Route element={<Setting />} path="/setting" />
        </Routes>

        {/* Bottom Nav */}
        <BottomNavBar />
      </Box>
    </BrowserRouter>
  );
}

export default App;
