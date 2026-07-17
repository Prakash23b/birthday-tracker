import { FiBell, FiMoon, FiSearch, FiSun } from "react-icons/fi";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <label className="navbar-search" aria-label="Search members">
        <FiSearch />
        <input type="text" placeholder="Search members" />
      </label>

      <div className="navbar-actions">
        <button className="navbar-action" aria-label="Notifications">
          <FiBell />
        </button>

        <button className="navbar-action" aria-label="Toggle dark mode">
          <FiMoon />
        </button>

        <div className="navbar-profile">
          <div className="navbar-avatar">AL</div>
          <div className="navbar-user">
            <strong>Alicia Lee</strong>
            <span>Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
