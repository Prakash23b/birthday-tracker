import { useMemo, useRef, useState } from "react";
import html2canvas from "html2canvas";
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
  const previewRef = useRef(null);

  const member = useMemo(() => members.find((item) => item.id === selectedMember) || members[0], [selectedMember]);

  const handleDownload = async () => {
    if (!previewRef.current) return;

    const canvas = await html2canvas(previewRef.current, {
      backgroundColor: "#5b21b6",
      scale: 2,
      useCORS: true,
    });

    const link = document.createElement("a");
    link.download = `${member.name.replace(/\s+/g, "-").toLowerCase()}-birthday-banner.png`;
    link.href = canvas.toDataURL("image/png");
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
            <div ref={previewRef} className="preview-canvas">
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
