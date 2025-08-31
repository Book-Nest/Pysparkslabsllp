import { useEffect, useRef, useState } from "react";
import styles from "./Footer.module.css";
import Logo from "./Logo";
import Socials from "./Socials";

export default function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = footerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.2) {
          setIsVisible(true);
        }
      },
      { threshold: [0, 0.2, 1] }
    );

    if (node) {
      observer.observe(node);
    }
    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`${styles.footer} ${isVisible ? styles.fadeIn : ""}`}
    >
      <Logo className={styles.logo} />
      <div className={styles.contactContainer}>
        <div className={styles.contacts}>
          <h3>CONTACTS</h3>
          <p>+91 79800 58378</p>
          <p>+91 83272 59554</p>
          <a
            href="mailto:info@pysparkslab.com"
            className={`${styles.email} email`}
          >
            info@pysparkslab.com
          </a>
          <Socials />
        </div>

        <div className={styles.address}>
          <h3>ADDRESS</h3>
          <p>Dp Nagar, Belgharia, Kolkata - 700056</p>
          <p>West Bengal, India</p>
          <p>LLP IN NO: ACH-0714</p>
        </div>
      </div>
    </footer>
  );
}
