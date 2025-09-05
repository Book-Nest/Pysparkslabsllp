import styles from "./Services.module.css";

export default function CyberSecurity() {
  return (
    <section className={styles.services}>
      <div className={styles.imageContainer}>
        <img
          src="/Cyber security Solutions.png"
          alt="Cyber security Solutions"
          className={styles.image}
        />
      </div>

      <div className={styles.text}>
        <h1>Cyber Security Consultancy & Solution</h1>
        <p>
          Protect your business from evolving cyber threats with our tailored
          security solutions. We offer vulnerability assessments, risk
          management, and ongoing consultancy to secure your digital
          infrastructure end-to-end.
        </p>
      </div>
    </section>
  );
}
