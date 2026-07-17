import {
  BarChart,
  Bar,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/Navbar/Navbar";

const stats = [
  { title: "Today's Birthdays", value: "12", trend: "Live today" },
  { title: "Upcoming This Week", value: "34", trend: "+8 vs last week" },
  { title: "Upcoming This Month", value: "86", trend: "+14 this month" },
  { title: "Weekend Birthdays", value: "9", trend: "This weekend" },
  { title: "Total Members", value: "248", trend: "+12 new joins" },
];

const monthlyData = [
  { month: "Jan", birthdays: 18 },
  { month: "Feb", birthdays: 24 },
  { month: "Mar", birthdays: 32 },
  { month: "Apr", birthdays: 28 },
  { month: "May", birthdays: 41 },
  { month: "Jun", birthdays: 35 },
];

const upcomingData = [
  { day: "Mon", count: 4 },
  { day: "Tue", count: 6 },
  { day: "Wed", count: 5 },
  { day: "Thu", count: 7 },
  { day: "Fri", count: 8 },
  { day: "Sat", count: 10 },
  { day: "Sun", count: 9 },
];

const departmentData = [
  { name: "Engineering", value: 96 },
  { name: "Design", value: 42 },
  { name: "Marketing", value: 28 },
  { name: "Operations", value: 34 },
  { name: "HR", value: 16 },
];

function Dashboard() {
  return (
    <div className="dashboard-shell">
      <Sidebar />

      <div className="dashboard-main">
        <Navbar />

        <div className="dashboard-content">
          <section className="stats-grid">
            {stats.map((stat) => (
              <article key={stat.title} className="stat-card">
                <div className="stat-title">{stat.title}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-trend">{stat.trend}</div>
              </article>
            ))}
          </section>

          <section className="analytics-grid">
            <div className="chart-card">
              <div className="chart-title">Birthdays by Month</div>
              <div className="chart-box">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                    <XAxis dataKey="month" stroke="#cbd5e1" tickLine={false} axisLine={false} />
                    <YAxis stroke="#cbd5e1" tickLine={false} axisLine={false} />
                    <Tooltip />
                    <Bar dataKey="birthdays" radius={[8, 8, 0, 0]}>
                      {monthlyData.map((entry, index) => (
                        <Cell key={`${entry.month}-${index}`} fill={index % 2 === 0 ? "#8b5cf6" : "#38bdf8"} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="chart-card">
              <div className="chart-title">Upcoming Birthdays</div>
              <div className="chart-box">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={upcomingData}>
                    <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                    <XAxis dataKey="day" stroke="#cbd5e1" tickLine={false} axisLine={false} />
                    <YAxis stroke="#cbd5e1" tickLine={false} axisLine={false} />
                    <Tooltip />
                    <Line type="monotone" dataKey="count" stroke="#f472b6" strokeWidth={3} dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="chart-card chart-card-wide">
              <div className="chart-title">Department Distribution</div>
              <div className="chart-box pie-box">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={departmentData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} innerRadius={56} fill="#8884d8" label>
                      {departmentData.map((entry, index) => (
                        <Cell key={`${entry.name}-${index}`} fill={index % 2 === 0 ? "#8b5cf6" : "#38bdf8"} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;