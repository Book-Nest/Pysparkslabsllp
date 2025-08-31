import styles from "./Services.module.css";
// import { FaReact, FaNodeJs, FaDatabase, FaCloud } from "react-icons/fa";

export default function WebApplicationDevelopment() {
  return (
    <section className={styles.services}>
      <div className={styles.imageContainer}>
        <img
          src="/homepage.avif"
          alt="Web application development"
          className={styles.image}
        />
      </div>

      <div className={styles.text}>
        <h1>Web Application Development</h1>
        <p>
          Our team builds robust, secure, and user-friendly web applications
          that align with your business goals. From custom portals to enterprise
          solutions, we ensure scalability, performance, and a seamless digital
          experience.
        </p>

        {/* <h2 className={styles.servicesTitle}>Our Expertise</h2>
        <ul className={styles.servicesList}>
          <li>
            <FaReact /> Custom Web Applications with React & Angular
          </li>
          <li>
            <FaNodeJs /> Backend Development with Node.js & Express
          </li>
          <li>
            <FaDatabase /> Scalable Databases & API Integration
          </li>
          <li>
            <FaCloud /> Cloud-Native & Serverless Applications
          </li>
          <li>Progressive Web Apps (PWAs)</li>
          <li>Enterprise Software Solutions</li>
          <li>Performance Optimization & Security</li>
        </ul> */}
      </div>
    </section>
  );
}
