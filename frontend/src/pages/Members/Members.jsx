import { useEffect, useState } from "react";
import { FiPlus, FiSearch, FiUsers } from "react-icons/fi";
import AddMemberModal from "../../components/AddMemberModal/AddMemberModal";
import api from "../../services/api";
import "./Members.css";

function Members() {
  const [showModal, setShowModal] = useState(false);
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await api.get("/members/");
      setMembers(response.data);
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };

  const handleAddMember = async (member) => {
    try {
      await api.post("/members/", {
        name: member.name,
        email: member.email,
        department: member.department,
        designation: member.designation,
        birthday: member.birthday,
      });

      await fetchMembers();

      setShowModal(false);
    } catch (error) {
      console.error("Error adding member:", error);
    }
  };

  const handleDeleteMember = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this member?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/members/${id}`);

      setMembers((prevMembers) =>
        prevMembers.filter(
          (member) => member.id !== id
        )
      );
    } catch (error) {
      console.error(
        "Error deleting member:",
        error
      );
    }
  };

  const handleEditMember = async (member) => {
    const name = window.prompt(
      "Edit Name",
      member.name
    );

    if (!name) return;

    const email = window.prompt(
      "Edit Email",
      member.email
    );

    if (!email) return;

    const department = window.prompt(
      "Edit Department",
      member.department
    );

    if (!department) return;

    const designation = window.prompt(
      "Edit Designation",
      member.designation
    );

    if (!designation) return;

    const birthday = window.prompt(
      "Edit Birthday (YYYY-MM-DD)",
      member.birthday
    );

    if (!birthday) return;

    try {
      await api.put(`/members/${member.id}`, {
        name,
        email,
        department,
        designation,
        birthday,
      });

      await fetchMembers();
    } catch (error) {
      console.error(
        "Error updating member:",
        error
      );
    }
  };

  const filteredMembers = members.filter(
    (member) =>
      member.name
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="members-shell">
      <section className="members-panel">
        <div className="members-header">
          <div>
            <div className="members-title">
              Members
            </div>

            <div className="members-subtitle">
              Manage your team and celebrate every
              milestone.
            </div>
          </div>

          <div className="members-actions">
            <label
              className="members-search"
              aria-label="Search members"
            >
              <FiSearch />

              <input
                type="text"
                placeholder="Search Members"
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(
                    e.target.value
                  )
                }
              />
            </label>

            <button
              className="add-btn"
              onClick={() =>
                setShowModal(true)
              }
            >
              <FiPlus
                style={{
                  marginRight: "0.4rem",
                }}
              />
              Add Member
            </button>
          </div>
        </div>

        {filteredMembers.length > 0 ? (
          <div className="members-grid">
            {filteredMembers.map((member) => (
              <article
                className="member-card"
                key={member.id}
              >
                <div className="member-top">
                  <div className="member-avatar">
                    {member.name?.charAt(0)}
                  </div>

                  <div>
                    <div className="member-name">
                      {member.name}
                    </div>

                    <div className="member-role">
                      {member.designation}
                    </div>
                  </div>
                </div>

                <div className="member-meta">
                  📧 {member.email}
                </div>

                <div className="member-meta">
                  🏢 {member.department}
                </div>

                <div className="member-meta">
                  🎂 {member.birthday}
                </div>

                <div className="member-actions">
                  <button
                    className="edit-btn"
                    onClick={() =>
                      handleEditMember(
                        member
                      )
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      handleDeleteMember(
                        member.id
                      )
                    }
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">
              <FiUsers />
            </div>

            <h3>No members found</h3>

            <p>
              Add your first member to begin
              tracking birthdays.
            </p>
          </div>
        )}
      </section>

      <AddMemberModal
        open={showModal}
        onClose={() =>
          setShowModal(false)
        }
        onSave={handleAddMember}
      />
    </div>
  );
}

export default Members;