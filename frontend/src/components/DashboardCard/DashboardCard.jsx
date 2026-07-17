import { motion } from "framer-motion";
import "./DashboardCard.css";

function DashboardCard({ title, value, icon, trend, gradient }) {
  return (
    <motion.article
      className="dashboard-card"
      whileHover={{ y: -6, scale: 1.01, boxShadow: "0 22px 55px rgba(15, 23, 42, 0.28)" }}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card-icon" style={{ background: gradient }}>
        {icon}
      </div>
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-value">{value}</div>
        {trend ? <div className="card-trend">{trend}</div> : null}
      </div>
    </motion.article>
  );
}

export default DashboardCard;
