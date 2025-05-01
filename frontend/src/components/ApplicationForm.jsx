import { useState, useEffect } from "react";

function ApplicationForm({ onCreate, onUpdate, editingApp }) {
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    status: "",
    appliedDate: "",
  });

  useEffect(() => {
    if (editingApp) {
      setFormData(editingApp);
    } else {
      setFormData({
        company: "",
        position: "",
        status: "",
        appliedDate: "",
      });
    }
  }, [editingApp]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editingApp ? onUpdate(formData) : onCreate(formData);
    setFormData({ company: "", position: "", status: "", appliedDate: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingApp ? "Edit Application" : "New Application"}</h2>
      <input
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Company"
        required
      />
      <input
        name="position"
        value={formData.position}
        onChange={handleChange}
        placeholder="Position"
        required
      />
      <input
        name="status"
        value={formData.status}
        onChange={handleChange}
        placeholder="Status (e.g. Applied)"
        required
      />
      <input
        type="date"
        name="appliedDate"
        value={formData.appliedDate}
        onChange={handleChange}
        required
      />
      <button type="submit">{editingApp ? "Update" : "Add"}</button>
    </form>
  );
}

export default ApplicationForm;
