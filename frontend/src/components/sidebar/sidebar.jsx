import {
  FiCalendar,
  FiGift,
  FiHome,
  FiLogOut,
  FiSettings,
  FiStar,
  FiUsers,
} from "react-icons/fi";
import { RiCake3Line } from "react-icons/ri";
import "./sidebar.css";

const menuItems = [
  { label: "Dashboard", icon: <FiHome /> },
  { label: "Members", icon: <FiUsers /> },
  { label: "Calendar", icon: <FiCalendar /> },
  { label: "Today's Birthdays", icon: <FiGift /> },
  { label: "Weekly", icon: <FiGift /> },
  { label: "Monthly", icon: <FiGift /> },
  { label: "Banner Generator", icon: <FiStar /> },
  { label: "Settings", icon: <FiSettings /> },
  { label: "Logout", icon: <FiLogOut /> },
];

function Sidebar() {
  return (
    <aside className="sidebar-shell">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <RiCake3Line />
        </div>
        <div>
          <div className="sidebar-title">Birthday Tracker</div>
          <div className="sidebar-subtitle">Enterprise workspace</div>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Sidebar navigation">
        {menuItems.map((item, index) => (
          <div key={item.label} className={`sidebar-item ${index === 0 ? "active" : ""}`}>
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-pill">✨ Premium planning</div>
      </div>
    </aside>
  );
}

export default Sidebar;
