import { useState } from "react";
import { FiX } from "react-icons/fi";
import "./AddMemberModal.css";

const initialForm = {
  name: "",
  email: "",
  birthday: "",
  department: "",
  team: "",
  designation: "",
};

function AddMemberModal({ open, onClose, onSave }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.trim()) nextErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Enter a valid email";
    if (!form.birthday) nextErrors.birthday = "Birthday is required";
    if (!form.department.trim()) nextErrors.department = "Department is required";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onSave?.({ ...form, name: form.name.trim() });
    setForm(initialForm);
    setErrors({});
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <div className="modal-title">Add Member</div>
            <div className="modal-subtitle">Create a new team profile with clarity and care.</div>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <FiX />
          </button>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label className="field">
              <span>Name</span>
              <input name="name" value={form.name} onChange={handleChange} />
              {errors.name ? <small className="field-error">{errors.name}</small> : null}
            </label>

            <label className="field">
              <span>Email</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} />
              {errors.email ? <small className="field-error">{errors.email}</small> : null}
            </label>

            <label className="field">
              <span>Birthday</span>
              <input type="date" name="birthday" value={form.birthday} onChange={handleChange} />
              {errors.birthday ? <small className="field-error">{errors.birthday}</small> : null}
            </label>

            <label className="field">
              <span>Department</span>
              <input name="department" value={form.department} onChange={handleChange} />
              {errors.department ? <small className="field-error">{errors.department}</small> : null}
            </label>

            <label className="field">
              <span>Team</span>
              <input name="team" value={form.team} onChange={handleChange} />
            </label>

            <label className="field">
              <span>Designation</span>
              <input name="designation" value={form.designation} onChange={handleChange} />
            </label>
          </div>

          <div className="modal-actions">
            <button type="button" className="secondary-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              Save Member
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddMemberModal;
