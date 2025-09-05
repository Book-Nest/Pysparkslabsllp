import styles from "./Services.module.css";

export default function BusinessConsulting() {
  return (
    <section className={styles.services}>
      <div className={styles.imageContainer}>
        <img
          src="/Business Consulting.jpg"
          alt="Business Consulting"
          className={styles.image}
        />
      </div>

      <div className={styles.text}>
        <h1>Business Process & Consulting Solutions</h1>
        <p>
          We help businesses streamline operations, optimize workflows, and
          implement effective strategies to scale sustainably. Our consulting
          solutions are tailored to your unique challenges, ensuring efficiency,
          growth, and measurable results.
        </p>
      </div>
    </section>
  );
}
