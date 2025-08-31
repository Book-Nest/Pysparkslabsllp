"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Careers.module.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Careers() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    field: "",
    cv: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.2) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: [0, 0.2] }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  // Input change handler
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cv") {
      setForm({ ...form, cv: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // Validation
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!form.contact.trim()) newErrors.contact = "Contact number is required";
    if (!form.field.trim())
      newErrors.field = "Please specify your field of interest";
    if (!form.cv) {
      newErrors.cv = "Please upload your CV (PDF only)";
    } else if (form.cv.type !== "application/pdf") {
      newErrors.cv = "Only PDF files are allowed";
    } else if (form.cv.size > 10 * 1024 * 1024) {
      newErrors.cv = "File size must not exceed 10MB";
    }
    return newErrors;
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    setStatus("");

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("contact", form.contact);
      formData.append("field", form.field);
      formData.append("cv", form.cv);

      const res = await fetch("https://pysparks.vercel.app/api/careerApply", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("✅ Application submitted successfully!");
        setForm({ name: "", email: "", contact: "", field: "", cv: null });
      } else {
        setStatus("❌ Failed to submit application. Try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setStatus("❌ Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navigation />
      <section className={styles.careerSectionWrapper}>
        <div
          ref={containerRef}
          className={`${styles.careerSection} ${visible ? styles.visible : ""}`}
        >
          {/* LEFT */}
          <div className={styles.left}>
            <h1 className={styles.title}>
              Join <span>Our Team</span>
            </h1>
            <p className={styles.description}>
              Interested in working with us? Fill out the form below and upload
              your CV. Our HR team will review your application and get in touch
              if there’s a match.
            </p>
            <div className={styles.underline}></div>
          </div>

          {/* RIGHT */}
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Full Name*</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
              />
              {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email*</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email address"
              />
              {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="contact">Contact Number*</label>
              <input
                id="contact"
                name="contact"
                type="tel"
                value={form.contact}
                onChange={handleChange}
                placeholder="Your contact number"
              />
              {errors.contact && (
                <p className={styles.error}>{errors.contact}</p>
              )}
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="field">Field of Interest*</label>
              <input
                id="field"
                name="field"
                type="text"
                value={form.field}
                onChange={handleChange}
                placeholder="e.g. Web Development, Design, Marketing"
              />
              {errors.field && <p className={styles.error}>{errors.field}</p>}
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="cv">Upload CV (PDF, max 10MB)*</label>
              <input
                id="cv"
                name="cv"
                type="file"
                accept="application/pdf"
                onChange={handleChange}
              />
              {errors.cv && <p className={styles.error}>{errors.cv}</p>}
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
            {status && <p className={styles.status}>{status}</p>}
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
