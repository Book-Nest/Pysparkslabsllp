import styles from "./Services.module.css";

export default function AppDevelopment() {
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
        <h1>App Development</h1>
        <p>
          We design and develop mobile applications that connect you with your
          audience anywhere, anytime. With a focus on intuitive UI/UX and smooth
          functionality, our apps enhance customer engagement and business
          growth.
        </p>
      </div>
    </section>
  );
}
