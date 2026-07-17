import { motion } from "framer-motion";
import {
  FiBell,
  FiCalendar,
  FiGift,
  FiHome,
  FiLogOut,
  FiSearch,
  FiSettings,
  FiUsers,
  FiStar,
} from "react-icons/fi";
import { RiCake3Line } from "react-icons/ri";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import "./Dashboard.css";

const menuItems = [
  { label: "Dashboard", icon: <FiHome /> },
  { label: "Members", icon: <FiUsers /> },
  { label: "Calendar", icon: <FiCalendar /> },
  { label: "Today's Birthdays", icon: <FiGift /> },
  { label: "Weekly Birthdays", icon: <FiGift /> },
  { label: "Monthly Birthdays", icon: <FiGift /> },
  { label: "Banner Generator", icon: <FiStar /> },
  { label: "Settings", icon: <FiSettings /> },
  { label: "Logout", icon: <FiLogOut /> },
];

const stats = [
  { label: "Today's Birthdays", value: "12", icon: <FiGift />, gradient: "linear-gradient(135deg, #8b5cf6, #38bdf8)" },
  { label: "Upcoming This Week", value: "34", icon: <FiCalendar />, gradient: "linear-gradient(135deg, #6366f1, #ec4899)" },
  { label: "Upcoming This Month", value: "86", icon: <FiStar />, gradient: "linear-gradient(135deg, #0ea5e9, #14b8a6)" },
  { label: "Weekend Birthdays", value: "9", icon: <FiGift />, gradient: "linear-gradient(135deg, #f472b6, #fb923c)" },
  { label: "Total Members", value: "248", icon: <FiUsers />, gradient: "linear-gradient(135deg, #4f46e5, #818cf8)" },
];

function Dashboard() {
  return (
    <div className="dashboard-shell">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <RiCake3Line />
          </div>

          <div>
            <div className="sidebar-title">
              Birthday Tracker
            </div>

            <div className="sidebar-subtitle">
              Enterprise experience
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.label}
              className={`nav-item ${
                index === 0 ? "active" : ""
              }`}
              whileHover={{
                x: 4,
                scale: 1.01,
              }}
            >
              <span className="icon">
                {item.icon}
              </span>

              <span>{item.label}</span>
            </motion.div>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="hero-accent">
            ✨ Premium planning workspace
          </div>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div className="topbar-left">
            <div className="search-box">
              <FiSearch />

              <input
                type="text"
                placeholder="Search members"
              />
            </div>
          </div>

          <div className="topbar-right">
            <button
              className="icon-btn"
              aria-label="Notifications"
            >
              <FiBell />
            </button>

            <div className="avatar">PB</div>
          </div>
        </header>

        <motion.section
          className="hero-card"
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.45,
          }}
        >
          <div>
            <div className="hero-title">
              Celebrate every milestone with clarity
            </div>

            <div className="hero-copy">
              Keep birthdays, team moments, and
              announcements beautifully organized in
              one premium command center.
            </div>
          </div>

          <div className="hero-accent">
            🚀 Updated 2 mins ago
          </div>
        </motion.section>

        <section className="stats-grid">
          {stats.map((stat) => (
            <DashboardCard
              key={stat.label}
              title={stat.label}
              value={stat.value}
              icon={stat.icon}
              gradient={stat.gradient}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;