import { useMemo, useState } from "react";
import { FiDownload, FiGift } from "react-icons/fi";
import "./BannerGenerator.css";

const members = [
  { id: 1, name: "Alicia Lee", department: "Engineering" },
  { id: 2, name: "Marcus Chen", department: "Design" },
  { id: 3, name: "Priya Singh", department: "People Ops" },
];

const balloonColors = ["#f472b6", "#facc15", "#38bdf8", "#a78bfa"];
const confettiColors = ["#fef3c7", "#fb923c", "#f472b6", "#7dd3fc"];

function BannerGenerator() {
  const [selectedMember, setSelectedMember] = useState(members[0].id);
  const [showBalloons, setShowBalloons] = useState(true);
  const [showCake, setShowCake] = useState(true);
  const [showConfetti, setShowConfetti] = useState(true);

  const member = useMemo(() => members.find((item) => item.id === selectedMember) || members[0], [selectedMember]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080">
        <rect width="1920" height="1080" rx="40" fill="#5b21b6"/>
        <rect x="60" y="60" width="1800" height="960" rx="32" fill="url(#g)"/>
        <defs>
          <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#8b5cf6" />
            <stop offset="100%" stop-color="#38bdf8" />
          </linearGradient>
        </defs>
        <circle cx="320" cy="220" r="120" fill="#f472b6" fill-opacity="0.35"/>
        <circle cx="1580" cy="260" r="150" fill="#facc15" fill-opacity="0.25"/>
        <text x="960" y="430" font-family="Arial, sans-serif" font-size="70" font-weight="700" fill="white" text-anchor="middle">Happy Birthday</text>
        <text x="960" y="530" font-family="Arial, sans-serif" font-size="86" font-weight="800" fill="white" text-anchor="middle">${member.name}</text>
        <text x="960" y="590" font-family="Arial, sans-serif" font-size="36" fill="#e0f2fe" text-anchor="middle">${member.department}</text>
      </svg>
    `);
    link.download = `${member.name.replace(/\s+/g, "-").toLowerCase()}-birthday-banner.svg`;
    link.click();
  };

  return (
    <div className="banner-shell">
      <section className="banner-panel">
        <div className="banner-header">
          <div>
            <div className="banner-title">Birthday Banner Generator</div>
            <div className="banner-subtitle">Create a premium celebration banner for any team member.</div>
          </div>
          <div className="banner-pill">1920 × 1080</div>
        </div>

        <div className="banner-layout">
          <aside className="controls">
            <div className="control-group">
              <label>Choose Member</label>
              <select value={selectedMember} onChange={(e) => setSelectedMember(Number(e.target.value))}>
                {members.map((memberOption) => (
                  <option key={memberOption.id} value={memberOption.id}>
                    {memberOption.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="control-group">
              <label>Include Balloons</label>
              <input type="checkbox" checked={showBalloons} onChange={() => setShowBalloons((value) => !value)} />
            </div>

            <div className="control-group">
              <label>Include Cake</label>
              <input type="checkbox" checked={showCake} onChange={() => setShowCake((value) => !value)} />
            </div>

            <div className="control-group">
              <label>Include Confetti</label>
              <input type="checkbox" checked={showConfetti} onChange={() => setShowConfetti((value) => !value)} />
            </div>

            <button className="download-btn" onClick={handleDownload}>
              <FiDownload style={{ marginRight: "0.45rem" }} />
              Download Banner
            </button>
          </aside>

          <div className="preview-card">
            <div className="preview-canvas">
              {showBalloons ? (
                <>
                  <div className="balloon" style={{ left: "12%", background: balloonColors[0] }} />
                  <div className="balloon" style={{ left: "28%", background: balloonColors[1] }} />
                  <div className="balloon" style={{ right: "18%", background: balloonColors[2] }} />
                  <div className="balloon" style={{ right: "8%", background: balloonColors[3] }} />
                </>
              ) : null}

              {showConfetti ? (
                <>
                  {[...Array(8)].map((_, index) => (
                    <div
                      key={index}
                      className="confetti"
                      style={{
                        left: `${12 + index * 10}%`,
                        top: `${18 + (index % 3) * 15}%`,
                        background: confettiColors[index % confettiColors.length],
                      }}
                    />
                  ))}
                </>
              ) : null}

              {showCake ? <div className="cake" /> : null}

              <div className="preview-text">
                <div className="preview-title">Happy Birthday</div>
                <div className="preview-name">{member.name}</div>
                <div className="preview-dept">{member.department}</div>
                <div className="preview-dept" style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginTop: "0.5rem" }}>
                  <FiGift />
                  Celebrate with joy
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BannerGenerator;
