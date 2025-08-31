import styles from "./Services.module.css";

export default function DigitalMarketing() {
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
        <h1>Digital Marketing</h1>
        <p>
          Expand your online presence with our end-to-end digital marketing
          services. We specialize in SEO, social media marketing, paid
          campaigns, and content strategies to attract, engage, and convert your
          target audience.
        </p>
      </div>
    </section>
  );
}
