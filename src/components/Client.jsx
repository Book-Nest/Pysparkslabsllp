import { useEffect, useState } from "react";
import styles from "./Client.module.css";
import clientsData from "../data/clientsData.json";

export default function Client() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector("[data-clients]");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`${styles.clientsSection} ${visible ? styles.visible : ""}`}
      data-clients
    >
      <h2 className={styles.title}>
        Our Existing Clients
        <span className={styles.titleUnderline}></span>
      </h2>

      <div className={styles.clientsGrid}>
        {clientsData.map(({ name, logo }) => (
          <div key={name} className={styles.clientCard}>
            <img src={logo} alt={name} className={styles.clientLogo} />
          </div>
        ))}
      </div>
    </section>
  );
}
