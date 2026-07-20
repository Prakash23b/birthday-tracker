import { useState, useEffect } from "react";
import {
  FiBell,
  FiMoon,
  FiSearch,
  FiSun,
  FiLogOut,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  useEffect(() => {
    document.body.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem(
      "theme",
      theme
    );
  }, [theme]);

  const toggleTheme = () => {
    setTheme(
      theme === "dark"
        ? "light"
        : "dark"
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("user");

    alert("Signed out successfully");

    navigate("/");
  };

  return (
    <header className="navbar">
      <label
        className="navbar-search"
        aria-label="Search members"
      >
        <FiSearch />

        <input
          type="text"
          placeholder="Search members"
        />
      </label>

      <div className="navbar-actions">
        <button
          className="navbar-action"
          aria-label="Notifications"
        >
          <FiBell />
        </button>

        <button
          className="navbar-action"
          aria-label="Toggle theme"
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <FiSun />
          ) : (
            <FiMoon />
          )}
        </button>

        <button
          className="navbar-action"
          aria-label="Logout"
          onClick={handleLogout}
        >
          <FiLogOut />
        </button>

        <div className="navbar-profile">
          <div className="navbar-avatar">
            {user?.name
              ? user.name
                  .charAt(0)
                  .toUpperCase()
              : "U"}
          </div>

          <div className="navbar-user">
            <strong>
              {user?.name ||
                "User"}
            </strong>

            <span>
              {user?.email ||
                "Guest"}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;