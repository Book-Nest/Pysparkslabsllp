import styles from "./Services.module.css";

export default function AIAutomation() {
  return (
    <section className={styles.services}>
      <div className={styles.imageContainer}>
        <img
          src="/AI bot & Automation.png"
          alt="AI bot & Automation"
          className={styles.image}
        />
      </div>

      <div className={styles.text}>
        <h1>AI Bot & Automation</h1>
        <p>
          We leverage AI and automation to reduce manual effort, improve
          accuracy, and accelerate processes. From chatbots to workflow
          automation, our solutions boost productivity while cutting operational
          costs.
        </p>
      </div>
    </section>
  );
}
