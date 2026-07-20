import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Dashboard from "../pages/Dashboard/Dashboard";
import Members from "../pages/Members/Members";
import Calendar from "../pages/Calendar/Calendar";
import Settings from "../pages/Settings/Settings";
import BannerGenerator from "../pages/BannerGenerator/BannerGenerator";
import TodayBirthdays from "../pages/TodayBirthdays/TodayBirthdays";
import Weekly from "../pages/Weekly/Weekly";
import Monthly from "../pages/Monthly/Monthly";
import NotFound from "../pages/NotFound/NotFound";

import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/members"
          element={
            <ProtectedRoute>
              <Members />
            </ProtectedRoute>
          }
        />

        <Route
          path="/calendar"
          element={
            <ProtectedRoute>
              <Calendar />
            </ProtectedRoute>
          }
        />

        <Route
          path="/today-birthdays"
          element={
            <ProtectedRoute>
              <TodayBirthdays />
            </ProtectedRoute>
          }
        />

        <Route
          path="/weekly"
          element={
            <ProtectedRoute>
              <Weekly />
            </ProtectedRoute>
          }
        />

        <Route
          path="/monthly"
          element={
            <ProtectedRoute>
              <Monthly />
            </ProtectedRoute>
          }
        />

        <Route
          path="/banner-generator"
          element={
            <ProtectedRoute>
              <BannerGenerator />
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
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