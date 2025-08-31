"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ContactUs.module.css";

export default function ContactUs() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Form state
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
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
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validation
  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!form.message.trim()) newErrors.message = "Message cannot be empty";
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
      const res = await fetch("https://pysparks.vercel.app/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (err) {
      console.error("Error sending message:", err);
      setStatus("❌ Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.contactSectionWrapper}>
      {" "}
      <div
        ref={containerRef}
        className={`${styles.contactSection} ${visible ? styles.visible : ""}`}
      >
        {/* LEFT */}
        <div className={styles.left}>
          <h1 className={styles.title}>
            Let’s <span>Connect</span>
          </h1>
          <p className={styles.description}>
            Have an idea, project, or just want to say hello? Fill out the form
            and our team will get back to you within 24 hours.
          </p>
          <div className={styles.underline}></div>
        </div>

        {/* RIGHT */}
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.inputGroup}>
            <label htmlFor="firstName">Name*</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Your name"
            />
            {errors.firstName && (
              <p className={styles.error}>{errors.firstName}</p>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="lastName">Last name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Your last name"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Your email*</label>
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
            <label htmlFor="message">Message*</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message"
            ></textarea>
            {errors.message && <p className={styles.error}>{errors.message}</p>}
          </div>

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
          {status && <p className={styles.status}>{status}</p>}
        </form>
      </div>
    </section>
  );
}
