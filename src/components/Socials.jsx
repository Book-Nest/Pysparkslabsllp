import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import styles from "./Socials.module.css";

export default function Socials() {
  return (
    <div className={styles.socials}>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Linkedin"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}
