import styles from "./Services.module.css";

export default function Finance() {
  return (
    <section className={styles.services}>
      <div className={styles.imageContainer}>
        <img
          src="/Finance and Accounting.png"
          alt="Finance and Accounting"
          className={styles.image}
        />
      </div>

      <div className={styles.text}>
        <h1>Finance & Accounting Services</h1>
        <p>
          Our finance experts provide reliable accounting, bookkeeping, and
          financial management services to help you stay compliant and make
          informed decisions. We ensure accuracy, transparency, and efficiency
          in financial operations.
        </p>
      </div>
    </section>
  );
}
