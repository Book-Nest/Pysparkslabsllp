import styles from "./Services.module.css";

export default function Analytics() {
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
        <h1>Analytical Solution</h1>
        <p>
          Turn data into decisions with our advanced analytical solutions. We
          provide insights through data visualization, predictive modeling, and
          business intelligence tools to support smarter, data-driven
          strategies.
        </p>
      </div>
    </section>
  );
}
