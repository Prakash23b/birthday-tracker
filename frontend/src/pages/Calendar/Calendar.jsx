import { FiGift } from "react-icons/fi";
import "./Calendar.css";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const calendarDays = [
  { day: 29, muted: true, birthdays: [] },
  { day: 30, muted: true, birthdays: [] },
  { day: 1, muted: false, birthdays: ["Alicia"] },
  { day: 2, muted: false, birthdays: [] },
  { day: 3, muted: false, birthdays: ["Marcus"] },
  { day: 4, muted: false, birthdays: [] },
  { day: 5, muted: false, birthdays: [] },
  { day: 6, muted: false, birthdays: [] },
  { day: 7, muted: false, birthdays: ["Nina"] },
  { day: 8, muted: false, birthdays: [] },
  { day: 9, muted: false, birthdays: [] },
  { day: 10, muted: false, birthdays: [] },
  { day: 11, muted: false, birthdays: ["Luca"] },
  { day: 12, muted: false, birthdays: [] },
  { day: 13, muted: false, birthdays: [] },
  { day: 14, muted: false, birthdays: [] },
  { day: 15, muted: false, birthdays: ["Sofia"] },
  { day: 16, muted: false, birthdays: [] },
  { day: 17, muted: false, birthdays: [] },
  { day: 18, muted: false, birthdays: [] },
  { day: 19, muted: false, birthdays: ["Noah"] },
  { day: 20, muted: false, birthdays: [] },
  { day: 21, muted: false, birthdays: [] },
  { day: 22, muted: false, birthdays: [] },
  { day: 23, muted: false, birthdays: ["Olive"] },
  { day: 24, muted: false, birthdays: [] },
  { day: 25, muted: false, birthdays: [] },
  { day: 26, muted: false, birthdays: [] },
  { day: 27, muted: false, birthdays: ["Mina"] },
  { day: 28, muted: false, birthdays: [] },
  { day: 29, muted: false, birthdays: [] },
  { day: 30, muted: false, birthdays: [] },
  { day: 31, muted: false, birthdays: [] },
  { day: 1, muted: true, birthdays: [] },
];

function Calendar() {
  return (
    <div className="calendar-shell">
      <section className="calendar-panel">
        <div className="calendar-header">
          <div>
            <div className="calendar-title">Calendar</div>
            <div className="calendar-subtitle">Track birthdays and upcoming celebrations at a glance.</div>
          </div>
          <div className="calendar-pill">July 2026</div>
        </div>

        <div className="calendar-grid">
          {days.map((day) => (
            <div key={day} className="calendar-day-name">
              {day}
            </div>
          ))}

          {calendarDays.map((cell, index) => (
            <div key={`${cell.day}-${index}`} className={`calendar-cell ${cell.muted ? "muted" : ""}`}>
              <div className="calendar-date">{cell.day}</div>
              {cell.birthdays.map((name) => (
                <div className="birthday-dot" key={`${name}-${cell.day}`}>
                  <FiGift />
                  {name}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Calendar;
