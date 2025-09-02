import { FaFacebookF, FaInstragram, FaLinkedin } from "react-icons/fa";
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
        href="https://www.instagram.com/pysparks_lab.llp/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instragram"
      >
        <FaInstragram />
      </a>
      <a
        href="https://www.linkedin.com/posts/pysparks-lab_businesssolutions-innovation-ai-activity-7368331457406136322-Z4Fn/"
        target="_blank"
        rel="noreferrer"
        aria-label="Linkedin"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}
