import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/Navbar/Navbar";

function Dashboard() {
  return (
    <div className="dashboard-shell">
      <Sidebar />

      <div className="dashboard-main">
        <Navbar />

        <div className="dashboard-content">
          Dashboard Cards Here
        </div>
      </div>
    </div>
  );
}

export default Dashboard;