import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Members from "../pages/Members/Members";
import Calendar from "../pages/Calendar/Calendar";
import Settings from "../pages/Settings/Settings";
import BannerGenerator from "../pages/BannerGenerator/BannerGenerator";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/members"
          element={<Members />}
        />

        <Route
          path="/calendar"
          element={<Calendar />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

        <Route
          path="/banner-generator"
          element={<BannerGenerator />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;