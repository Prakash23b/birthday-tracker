import { useEffect, useState } from "react";
import api from "../../services/api";

function Weekly() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetchWeeklyBirthdays();
  }, []);

  const fetchWeeklyBirthdays = async () => {
    try {
      const response = await api.get(
        "/birthdays/weekly"
      );

      setMembers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        color: "white",
      }}
    >
      <h1>🎂 Weekly Birthdays</h1>

      {members.length === 0 ? (
        <p>
          No birthdays in the next 7 days.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {members.map((member) => (
            <div
              key={member.id}
              style={{
                padding: "20px",
                borderRadius: "12px",
                background:
                  "rgba(255,255,255,0.1)",
              }}
            >
              <h2>{member.name}</h2>

              <p>
                Designation:{" "}
                {member.designation}
              </p>

              <p>
                Department:{" "}
                {member.department}
              </p>

              <p>Email: {member.email}</p>

              <p>
                Birthday:{" "}
                {member.birthday}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Weekly;