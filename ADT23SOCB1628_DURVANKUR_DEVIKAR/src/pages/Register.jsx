import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Modal } from "bootstrap";


export default function Register() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const formRef = useRef(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarError, setAvatarError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [pwStrength, setPwStrength] = useState({ score: 0, label: "Too weak" });
  const [submitting, setSubmitting] = useState(false);
  const modalRef = useRef(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function evaluatePassword(pw) {
    if (!pw) return { score: 0, label: "Too weak" };
    let score = 0;
    if (pw.length >= 8) score += 30;
    if (/[a-z]/.test(pw)) score += 15;
    if (/[A-Z]/.test(pw)) score += 15;
    if (/[0-9]/.test(pw)) score += 20;
    if (/[^A-Za-z0-9]/.test(pw)) score += 20;
    if (score >= 85) return { score: 100, label: "Strong" };
    if (score >= 60) return { score, label: "Good" };
    if (score >= 35) return { score, label: "Weak" };
    return { score, label: "Too weak" };
  }

  function handleAvatarChange(e) {
    const file = e.target.files?.[0];
    if (!file) return setAvatarPreview(null);
    const allowed = ["image/jpeg", "image/png", "image/webp"];
    if (!allowed.includes(file.type)) {
      setAvatarError("Only JPG, PNG or WEBP images allowed.");
      return;
    }
    if (file.size > 2.5 * 1024 * 1024) {
      setAvatarError("Image size should be under 2.5 MB.");
      return;
    }
    setAvatarError("");
    setAvatarPreview(URL.createObjectURL(file));
  }

  useEffect(() => {
    return () => avatarPreview && URL.revokeObjectURL(avatarPreview);
  }, [avatarPreview]);

  function handlePasswordInput(e) {
    setPwStrength(evaluatePassword(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = formRef.current;
    form.classList.add("was-validated");

    const fullname = form.fullname.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirm = form.confirm.value;
    const birthdate = form.birthdate.value;
    const terms = form.terms.checked;

    if (!fullname || !emailRegex.test(email) || !password || password !== confirm || !birthdate || !terms)
      return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
 const bsModal = new Modal(modalRef.current);
bsModal.show();

      form.reset();
      setAvatarPreview(null);
      setPwStrength({ score: 0, label: "Too weak" });
      form.classList.remove("was-validated");
    }, 900);
  }

  function progressClass(score) {
    if (score >= 85) return "bg-success";
    if (score >= 60) return "bg-info";
    if (score >= 35) return "bg-warning";
    return "bg-danger";
  }

  return (
    <div className="container py-5" style={{ maxWidth: 920 }}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10" data-aos="fade-up">
          <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
            <div className="row g-0">

              <div className="col-lg-5 d-none d-lg-flex align-items-center justify-content-center bg-primary text-white p-4">
                <div className="text-center px-2">
                  <h3 className="fw-bold">Create your account</h3>
                  <p className="small text-white-75">
                    Join TravelWorld and start planning your dream journeys today!
                  </p>
                  <div className="d-grid gap-2 mt-3">
                    <button className="btn btn-light btn-sm">
                      <i className="fas fa-map-marked-alt me-2"></i>Explore Destinations
                    </button>
                    <button className="btn btn-outline-light btn-sm">
                      <i className="fas fa-headset me-2"></i>Contact Support
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-7 p-4">
                <div className="mb-3 d-flex align-items-center gap-3">
                  <div
                    style={{ width: 72, height: 72 }}
                    className="rounded-circle bg-light d-flex align-items-center justify-content-center border overflow-hidden"
                  >
                    {avatarPreview ? (
                      <img src={avatarPreview} alt="Avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    ) : (
                      <i className="fas fa-user fa-2x text-secondary"></i>
                    )}
                  </div>
                  <div>
                    <h5 className="mb-0">Create an account</h5>
                    <small className="text-muted">It’s quick and easy.</small>
                  </div>
                </div>

                <form ref={formRef} noValidate onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Profile photo (optional)</label>
                    <input type="file" className="form-control form-control-sm" accept="image/*" onChange={handleAvatarChange} />
                    {avatarError && <div className="text-danger small mt-1">{avatarError}</div>}
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input type="text" name="fullname" className="form-control" placeholder="Your full name" required />
                    <div className="invalid-feedback">Please enter your name.</div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email</label>
                    <input type="email" name="email" className="form-control" placeholder="you@example.com" required />
                    <div className="invalid-feedback">Enter a valid email.</div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Birth Date</label>
                    <input type="date" name="birthdate" className="form-control" required />
                    <div className="invalid-feedback">Please select your birth date.</div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Interested Locations</label>
                    <select name="location" className="form-select" required>
                      <option value="">Select your preferred destination</option>
                      <option>Paris</option>
                      <option>Maldives</option>
                      <option>New York</option>
                      <option>Tokyo</option>
                      <option>Dubai</option>
                      <option>London</option>
                    </select>
                    <div className="invalid-feedback">Please select at least one location.</div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Gender</label>
                    <div className="d-flex gap-3">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value="male" required />
                        <label className="form-check-label">Male</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value="female" required />
                        <label className="form-check-label">Female</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value="other" required />
                        <label className="form-check-label">Other</label>
                      </div>
                    </div>
                    <div className="invalid-feedback">Please choose your gender.</div>
                  </div>

                  <div className="row gx-2">
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">Password</label>
                      <div className="input-group">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          className="form-control"
                          placeholder="At least 8 characters"
                          required
                          onInput={handlePasswordInput}
                        />
                        <button type="button" className="btn btn-outline-secondary" onClick={() => setShowPassword(!showPassword)}>
                          <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                        </button>
                      </div>
                      <div className="mt-2">
                        <div className="d-flex justify-content-between mb-1 small">
                          <span>Strength: {pwStrength.label}</span>
                          <span>{pwStrength.score}%</span>
                        </div>
                        <div className="progress" style={{ height: 8 }}>
                          <div className={`progress-bar ${progressClass(pwStrength.score)}`} style={{ width: `${pwStrength.score}%` }} />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">Confirm Password</label>
                      <div className="input-group">
                        <input
                          type={showConfirm ? "text" : "password"}
                          name="confirm"
                          className="form-control"
                          placeholder="Re-type password"
                          required
                        />
                        <button type="button" className="btn btn-outline-secondary" onClick={() => setShowConfirm(!showConfirm)}>
                          <i className={`fas ${showConfirm ? "fa-eye-slash" : "fa-eye"}`}></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" name="terms" id="terms" required />
                    <label className="form-check-label" htmlFor="terms">
                      I agree to the <a href="/terms">terms and conditions</a>.
                    </label>
                    <div className="invalid-feedback">You must agree before submitting.</div>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary" disabled={submitting}>
                      {submitting ? "Creating account..." : "Create account"}
                    </button>
                  </div>
                </form>

                <div className="modal fade" tabIndex="-1" ref={modalRef}>
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Account Created</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                      </div>
                      <div className="modal-body">
                        <p>Your account has been created successfully. Welcome to TravelWorld!</p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
