import { useState } from "react";
import { FiPlus, FiSearch, FiUsers } from "react-icons/fi";
import AddMemberModal from "../../components/AddMemberModal/AddMemberModal";
import "./Members.css";

const initialMembers = [
  { name: "Alicia Lee", role: "Engineering Lead", email: "alicia@company.com", birthday: "March 14" },
  { name: "Marcus Chen", role: "Product Designer", email: "marcus@company.com", birthday: "April 22" },
  { name: "Priya Singh", role: "People Ops", email: "priya@company.com", birthday: "May 3" },
];

function Members() {
  const [showModal, setShowModal] = useState(false);
  const [members, setMembers] = useState(initialMembers);

  const handleAddMember = (member) => {
    setMembers((prev) => [
      {
        name: member.name || "New Member",
        role: member.designation || "Team Member",
        email: member.email || "new@company.com",
        birthday: member.birthday || "TBD",
      },
      ...prev,
    ]);
  };

  return (
    <div className="members-shell">
      <section className="members-panel">
        <div className="members-header">
          <div>
            <div className="members-title">Members</div>
            <div className="members-subtitle">Manage your team and celebrate every milestone.</div>
          </div>

          <div className="members-actions">
            <label className="members-search" aria-label="Search members">
              <FiSearch />
              <input type="text" placeholder="Search Members" />
            </label>
            <button className="add-btn" onClick={() => setShowModal(true)}>
              <FiPlus style={{ marginRight: "0.4rem" }} />
              Add Member
            </button>
          </div>
        </div>

        {members.length > 0 ? (
          <div className="members-grid">
            {members.map((member) => (
              <article className="member-card" key={member.email}>
                <div className="member-top">
                  <div className="member-avatar">{member.name.charAt(0)}</div>
                  <div>
                    <div className="member-name">{member.name}</div>
                    <div className="member-role">{member.role}</div>
                  </div>
                </div>
                <div className="member-meta">📧 {member.email}</div>
                <div className="member-meta">🎂 {member.birthday}</div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">
              <FiUsers />
            </div>
            <h3>No members yet</h3>
            <p>Add the first member to start building your celebration list.</p>
          </div>
        )}
      </section>

      <AddMemberModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleAddMember}
      />
    </div>
  );
}

export default Members;
