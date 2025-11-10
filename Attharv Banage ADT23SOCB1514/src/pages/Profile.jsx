import { useState } from "react";
import { useToast } from "../context/ToastContext";

export default function Profile() {
  const { showToast } = useToast();
  const [user, setUser] = useState({
    name: "Attharv Banage",
    email: "attharv@example.com",
    level: "Intermediate",
  });
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(user);

  const handleSave = (e) => {
    e.preventDefault();
    setUser(form);
    setEditing(false);
    showToast("Profile updated", "success");
  };

  return (
    <section className="py-5 mt-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">My Profile</h2>

        {!editing && (
          <div className="card p-4 mx-auto" style={{ maxWidth: "600px" }}>
            <h4>{user.name}</h4>
            <p className="text-muted">{user.email}</p>
            <p>Skill Level: <strong>{user.level}</strong></p>
            <div className="d-flex justify-content-center gap-2">
              <button className="btn btn-primary" onClick={() => { setForm(user); setEditing(true); }}>
                Edit Profile
              </button>
            </div>
          </div>
        )}

        {editing && (
          <div className="card p-4 mx-auto" style={{ maxWidth: "700px" }}>
            <form onSubmit={handleSave}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Name</label>
                  <input className="form-control" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Email</label>
                  <input className="form-control" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Skill Level</label>
                <select className="form-select" value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })}>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>

              <div className="d-flex gap-2 justify-content-center">
                <button type="submit" className="btn btn-success">Save</button>
                <button type="button" className="btn btn-outline-secondary" onClick={() => setEditing(false)}>Cancel</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
