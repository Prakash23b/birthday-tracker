import { NavLink } from "react-router-dom";
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
  {
    label: "Dashboard",
    icon: <FiHome />,
    path: "/dashboard",
  },
  {
    label: "Members",
    icon: <FiUsers />,
    path: "/members",
  },
  {
    label: "Calendar",
    icon: <FiCalendar />,
    path: "/calendar",
  },
  {
    label: "Today's Birthdays",
    icon: <FiGift />,
    path: "/dashboard",
  },
  {
    label: "Weekly",
    icon: <FiGift />,
    path: "/dashboard",
  },
  {
    label: "Monthly",
    icon: <FiGift />,
    path: "/dashboard",
  },
  {
    label: "Banner Generator",
    icon: <FiStar />,
    path: "/banner-generator",
  },
  {
    label: "Settings",
    icon: <FiSettings />,
    path: "/settings",
  },
  {
    label: "Logout",
    icon: <FiLogOut />,
    path: "/",
  },
];

function Sidebar() {
  return (
    <aside className="sidebar-shell">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <RiCake3Line />
        </div>

        <div>
          <div className="sidebar-title">
            Birthday Tracker
          </div>

          <div className="sidebar-subtitle">
            Enterprise workspace
          </div>
        </div>
      </div>

      <nav
        className="sidebar-nav"
        aria-label="Sidebar navigation"
      >
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-item ${
                isActive ? "active" : ""
              }`
            }
          >
            <span className="sidebar-icon">
              {item.icon}
            </span>

            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-pill">
          ✨ Premium planning
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;