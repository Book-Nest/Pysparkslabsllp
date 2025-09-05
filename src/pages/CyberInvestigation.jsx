import styles from "./Services.module.css";

export default function CyberInvestigation() {
  return (
    <section className={styles.services}>
      <div className={styles.imageContainer}>
        <img
          src="/Cybercrime Investigation.jpg"
          alt="Cybercrime Investigation"
          className={styles.image}
        />
      </div>

      <div className={styles.text}>
        <h1>Cyber Crime Investigation</h1>
        <p>
          We assist organizations in investigating and resolving cybercrime
          incidents with expert analysis, forensic methods, and recovery
          strategies. Our approach ensures minimal disruption while safeguarding
          your digital assets.
        </p>
      </div>
    </section>
  );
}
