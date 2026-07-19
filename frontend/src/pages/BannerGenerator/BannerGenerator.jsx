import { useEffect, useMemo, useRef, useState } from "react";
import html2canvas from "html2canvas";
import { FiDownload } from "react-icons/fi";
import api from "../../services/api";
import "./BannerGenerator.css";

const balloonColors = [
  "#f472b6",
  "#facc15",
  "#38bdf8",
  "#a78bfa",
];

const confettiColors = [
  "#fef3c7",
  "#fb923c",
  "#f472b6",
  "#7dd3fc",
];

function BannerGenerator() {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] =
    useState("");

  const [showBalloons, setShowBalloons] =
    useState(true);

  const [showCake, setShowCake] =
    useState(true);

  const [showConfetti, setShowConfetti] =
    useState(true);

  const previewRef = useRef(null);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await api.get(
        "/banner/members"
      );

      setMembers(response.data);

      if (response.data.length > 0) {
        setSelectedMember(
          response.data[0].id
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const member = useMemo(() => {
    return (
      members.find(
        (item) =>
          item.id === Number(selectedMember)
      ) || members[0]
    );
  }, [members, selectedMember]);

  const handleDownload = async () => {
    if (!previewRef.current) return;

    const canvas = await html2canvas(
      previewRef.current,
      {
        backgroundColor: "#4f46e5",
        scale: 2,
      }
    );

    const link =
      document.createElement("a");

    link.download = `${member.name
      .replace(/\s+/g, "-")
      .toLowerCase()}-birthday-banner.png`;

    link.href =
      canvas.toDataURL("image/png");

    link.click();
  };

  if (members.length === 0) {
    return (
      <div className="banner-shell">
        <h2>Loading members...</h2>
      </div>
    );
  }

  return (
    <div className="banner-shell">
      <section className="banner-panel">
        <div className="banner-header">
          <div>
            <div className="banner-title">
              Birthday Banner Generator
            </div>

            <div className="banner-subtitle">
              Create beautiful birthday
              banners for your team.
            </div>
          </div>

          <div className="banner-pill">
            1920 × 1080
          </div>
        </div>

        <div className="banner-layout">
          <aside className="controls">
            <div className="control-group">
              <label>
                Choose Member
              </label>

              <select
                value={selectedMember}
                onChange={(e) =>
                  setSelectedMember(
                    e.target.value
                  )
                }
                style={{
                  background:
                    "#1e293b",
                  color: "white",
                  border:
                    "1px solid #334155",
                  borderRadius:
                    "12px",
                  padding:
                    "12px 16px",
                }}
              >
                {members.map(
                  (memberOption) => (
                    <option
                      key={memberOption.id}
                      value={memberOption.id}
                    >
                      {memberOption.name}
                    </option>
                  )
                )}
              </select>
            </div>

            <div className="control-group">
              <label>
                Include Balloons
              </label>

              <input
                type="checkbox"
                checked={showBalloons}
                onChange={() =>
                  setShowBalloons(
                    !showBalloons
                  )
                }
              />
            </div>

            <div className="control-group">
              <label>
                Include Cake
              </label>

              <input
                type="checkbox"
                checked={showCake}
                onChange={() =>
                  setShowCake(!showCake)
                }
              />
            </div>

            <div className="control-group">
              <label>
                Include Confetti
              </label>

              <input
                type="checkbox"
                checked={showConfetti}
                onChange={() =>
                  setShowConfetti(
                    !showConfetti
                  )
                }
              />
            </div>

            <button
              className="download-btn"
              onClick={handleDownload}
            >
              <FiDownload
                style={{
                  marginRight:
                    "0.5rem",
                }}
              />
              Download Banner
            </button>
          </aside>

          <div className="preview-card">
            <div
              ref={previewRef}
              className="preview-canvas"
            >
              {showBalloons && (
                <>
                  <div
                    className="balloon"
                    style={{
                      left: "5%",
                      top: "8%",
                      background:
                        balloonColors[0],
                    }}
                  />

                  <div
                    className="balloon"
                    style={{
                      left: "15%",
                      top: "12%",
                      background:
                        balloonColors[1],
                    }}
                  />

                  <div
                    className="balloon"
                    style={{
                      right: "15%",
                      top: "12%",
                      background:
                        balloonColors[2],
                    }}
                  />

                  <div
                    className="balloon"
                    style={{
                      right: "5%",
                      top: "8%",
                      background:
                        balloonColors[3],
                    }}
                  />
                </>
              )}

              {showConfetti &&
                [...Array(5)].map(
                  (_, index) => (
                    <div
                      key={index}
                      className="confetti"
                      style={{
                        left: `${
                          15 +
                          index * 18
                        }%`,
                        top: `${
                          18 +
                          (index % 2) *
                            14
                        }%`,
                        background:
                          confettiColors[
                            index %
                              confettiColors.length
                          ],
                      }}
                    />
                  )
                )}

              <div
                style={{
                  display: "flex",
                  flexDirection:
                    "column",
                  alignItems:
                    "center",
                  justifyContent:
                    "center",
                  height: "100%",
                  textAlign:
                    "center",
                  gap: "20px",
                  position:
                    "relative",
                  zIndex: 2,
                }}
              >
                <h1
                  style={{
                    fontSize:
                      "68px",
                    fontWeight:
                      "800",
                    color:
                      "white",
                    margin: 0,
                  }}
                >
                  🎉 Happy Birthday
                </h1>

                <h2
                  style={{
                    fontSize:
                      "52px",
                    color:
                      "white",
                    margin: 0,
                  }}
                >
                  {member?.name}
                </h2>

                <div
                  style={{
                    fontSize:
                      "26px",
                    color:
                      "#e2e8f0",
                  }}
                >
                  {
                    member?.designation
                  }
                </div>

                <div
                  style={{
                    background:
                      "rgba(255,255,255,0.15)",
                    padding:
                      "12px 28px",
                    borderRadius:
                      "999px",
                    color:
                      "white",
                    fontWeight:
                      "600",
                  }}
                >
                  {
                    member?.department
                  }
                </div>

                <p
                  style={{
                    maxWidth:
                      "600px",
                    color:
                      "#f8fafc",
                    fontSize:
                      "22px",
                    lineHeight:
                      "1.7",
                    margin: 0,
                  }}
                >
                  Wishing you
                  happiness,
                  success and a
                  wonderful year
                  ahead! 🎂
                </p>

                {showCake && (
                  <div
                    style={{
                      fontSize:
                        "60px",
                    }}
                  >
                    🎂
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BannerGenerator;