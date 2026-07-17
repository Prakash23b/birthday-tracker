import { motion } from "framer-motion";
import "./DashboardCard.css";

function DashboardCard({ title, value, icon, gradient }) {
  return (
    <motion.article
      className="dashboard-card"
      whileHover={{ y: -6, scale: 1.01 }}
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
      </div>
    </motion.article>
  );
}

export default DashboardCard;
