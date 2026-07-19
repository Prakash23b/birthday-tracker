import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/Navbar/Navbar";
import api from "../../services/api";

function Dashboard() {
  const [stats, setStats] = useState({
    total_members: 0,
    today_birthdays: 0,
    monthly_birthdays: 0,
    upcoming_birthdays: 0,
  });

  const [upcomingBirthdays, setUpcomingBirthdays] =
    useState([]);

  useEffect(() => {
    fetchDashboardStats();
    fetchUpcomingBirthdays();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const response = await api.get(
        "/dashboard/stats"
      );

      setStats(response.data);
    } catch (error) {
      console.error(
        "Error fetching dashboard stats:",
        error
      );
    }
  };

  const fetchUpcomingBirthdays = async () => {
    try {
      const response = await api.get(
        "/birthdays/upcoming"
      );

      setUpcomingBirthdays(
        response.data
      );
    } catch (error) {
      console.error(
        "Error fetching upcoming birthdays:",
        error
      );
    }
  };

  return (
    <div className="dashboard-shell">
      <Sidebar />

      <div className="dashboard-main">
        <Navbar />

        <div
          className="dashboard-content"
          style={{
            padding: "30px",
            color: "white",
          }}
        >
          <h1>Dashboard</h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <div
              style={{
                padding: "20px",
                borderRadius: "12px",
                background:
                  "rgba(255,255,255,0.1)",
              }}
            >
              <h3>Total Members</h3>
              <h1>{stats.total_members}</h1>
            </div>

            <div
              style={{
                padding: "20px",
                borderRadius: "12px",
                background:
                  "rgba(255,255,255,0.1)",
              }}
            >
              <h3>Today's Birthdays</h3>
              <h1>{stats.today_birthdays}</h1>
            </div>

            <div
              style={{
                padding: "20px",
                borderRadius: "12px",
                background:
                  "rgba(255,255,255,0.1)",
              }}
            >
              <h3>Monthly Birthdays</h3>
              <h1>{stats.monthly_birthdays}</h1>
            </div>

            <div
              style={{
                padding: "20px",
                borderRadius: "12px",
                background:
                  "rgba(255,255,255,0.1)",
              }}
            >
              <h3>Upcoming Birthdays</h3>
              <h1>{stats.upcoming_birthdays}</h1>
            </div>
          </div>

          <div
            style={{
              marginTop: "30px",
              padding: "25px",
              borderRadius: "16px",
              background:
                "rgba(255,255,255,0.08)",
            }}
          >
            <h2
              style={{
                marginBottom: "20px",
              }}
            >
              🎂 Upcoming Birthdays
            </h2>

            {upcomingBirthdays.length ===
            0 ? (
              <p>
                No upcoming birthdays
                found.
              </p>
            ) : (
              <div
                style={{
                  display: "grid",
                  gap: "15px",
                }}
              >
                {upcomingBirthdays.map(
                  (member) => (
                    <div
                      key={member.id}
                      style={{
                        display: "flex",
                        justifyContent:
                          "space-between",
                        alignItems:
                          "center",
                        padding: "15px",
                        borderRadius:
                          "12px",
                        background:
                          "rgba(255,255,255,0.08)",
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            margin: 0,
                          }}
                        >
                          🎉{" "}
                          {member.name}
                        </h3>

                        <p
                          style={{
                            margin:
                              "5px 0",
                            opacity: 0.8,
                          }}
                        >
                          {
                            member.designation
                          }
                        </p>

                        <p
                          style={{
                            margin: 0,
                            opacity: 0.8,
                          }}
                        >
                          {
                            member.department
                          }
                        </p>
                      </div>

                      <div
                        style={{
                          textAlign:
                            "right",
                        }}
                      >
                        <h2
                          style={{
                            margin: 0,
                            color:
                              "#facc15",
                          }}
                        >
                          {
                            member.days_remaining
                          }
                        </h2>

                        <small>
                          days left
                        </small>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;