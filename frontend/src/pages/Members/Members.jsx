import { useState } from "react";
import { FiPlus, FiSearch, FiUsers, FiX } from "react-icons/fi";
import "./Members.css";

const initialMembers = [
  { name: "Alicia Lee", role: "Engineering Lead", email: "alicia@company.com", birthday: "March 14" },
  { name: "Marcus Chen", role: "Product Designer", email: "marcus@company.com", birthday: "April 22" },
  { name: "Priya Singh", role: "People Ops", email: "priya@company.com", birthday: "May 3" },
];

function Members() {
  const [showModal, setShowModal] = useState(false);
  const [members, setMembers] = useState(initialMembers);
  const [formData, setFormData] = useState({
    name: "",
    birthday: "",
    department: "",
    team: "",
    designation: "",
    email: "",
    phone: "",
    nickname: "",
    favoriteColor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMembers((prev) => [
      ...prev,
      {
        name: formData.name || "New Member",
        role: formData.designation || "Team Member",
        email: formData.email || "new@company.com",
        birthday: formData.birthday || "TBD",
      },
    ]);
    setFormData({
      name: "",
      birthday: "",
      department: "",
      team: "",
      designation: "",
      email: "",
      phone: "",
      nickname: "",
      favoriteColor: "",
    });
    setShowModal(false);
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

      {showModal ? (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <div className="modal-title">Add Member</div>
                <div className="modal-subtitle">Create a new profile for the celebration roster.</div>
              </div>
              <button className="modal-close" onClick={() => setShowModal(false)} aria-label="Close modal">
                <FiX />
              </button>
            </div>

            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <label className="field">
                  <span>Name</span>
                  <input name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label className="field">
                  <span>Birthday</span>
                  <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} required />
                </label>
                <label className="field">
                  <span>Department</span>
                  <input name="department" value={formData.department} onChange={handleChange} />
                </label>
                <label className="field">
                  <span>Team</span>
                  <input name="team" value={formData.team} onChange={handleChange} />
                </label>
                <label className="field">
                  <span>Designation</span>
                  <input name="designation" value={formData.designation} onChange={handleChange} />
                </label>
                <label className="field">
                  <span>Email</span>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label className="field">
                  <span>Phone</span>
                  <input name="phone" value={formData.phone} onChange={handleChange} />
                </label>
                <label className="field">
                  <span>Nickname</span>
                  <input name="nickname" value={formData.nickname} onChange={handleChange} />
                </label>
                <label className="field">
                  <span>Favorite Color</span>
                  <input name="favoriteColor" value={formData.favoriteColor} onChange={handleChange} />
                </label>
              </div>

              <div className="modal-actions">
                <button type="button" className="secondary-btn" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="add-btn">
                  Save Member
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Members;
