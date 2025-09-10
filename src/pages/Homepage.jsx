import Client from "../components/Client";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Project from "../components/Project";
import Team from "../components/Team";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <>
      <Navigation />
      <section className={styles.hero}>
        <div className={styles.text}>
          <h4>EMPOWERING BUSINESSES THROUGH</h4>
          <h1>
            INNOVATIVE <span className={styles.digital}>DIGITAL</span>
            <br />
            <span className={styles.solutions}>SOLUTIONS</span>
          </h1>
          <div className={styles.underline}></div>
          <p>
            We specialize in delivering high-quality web, mobile, and custom
            software solutions tailored to meet your business goals. From
            startups to enterprises, our experienced team transforms ideas into
            scalable, secure, and efficient digital products that drive real
            results.
          </p>
        </div>

        <div className={styles.imageContainer}>
          <img src="/homepage.avif" alt="Business workspace" />
        </div>
      </section>
      <ContactUs />
      <Project />
      <Client />
      <Team />
      <Footer />
    </>
  );
}
