import Navigation from "../components/Navigation";
import styles from "./AboutUs.module.css";
import Footer from "../components/Footer";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import Socials from "../components/Socials";

export default function AboutUs() {
  return (
    <>
      <Navigation />
      <section className={styles.about}>
        <div className={styles.imageContainer}>
          <img
            src="/about-us.png"
            alt="IT services workspace"
            className={styles.image}
          />
        </div>

        <div className={styles.text}>
          <h1>ABOUT US</h1>
          <p>
            At <strong>PySparks Lab LLP</strong>, we believe that every
            business—whether a young startup or a growing enterprise—deserves
            access to the right technology, strategy, and expertise to succeed
            in today’s dynamic marketplace. Founded with the vision of bridging
            the gap between innovative ideas and sustainable execution, we are a
            modern consulting and technology firm dedicated to empowering
            businesses through tailored solutions.
          </p>
          <p>
            We are a startup at heart, driven by curiosity, agility, and a
            relentless pursuit of excellence. What sets us apart is our ability
            to combine the passion and energy of a startup with the wisdom and
            expertise of seasoned professionals. Our core team includes industry
            experts who have worked with leading multinational corporations
            (MNCs) across diverse sectors such as technology, finance, digital
            transformation, and cyber security.
          </p>
          <p>
            Our journey began with a simple yet powerful question:{" "}
            <em>
              How can businesses—especially those scaling up—leverage technology
              and consulting expertise to compete on a global stage?
            </em>{" "}
            The answer lies in our integrated approach. We don’t just offer
            services; we provide end-to-end solutions that touch every aspect of
            business operations—from process optimization and digital presence
            to data-driven decision-making and risk management.
          </p>
          <p>
            Collaboration is at the core of our DNA. We work closely with our
            clients, becoming an extension of their teams rather than just
            external advisors. This ensures that the strategies we design are
            not only innovative but also practical, implementable, and aligned
            with long-term goals. Our diverse service portfolio—ranging from
            business process consulting, web and app development, AI automation,
            and digital marketing to finance services, cyber crime
            investigation, and cyber security consulting—is built to address the
            evolving needs of modern businesses.
          </p>
          <p>
            What truly makes us proud is our ability to empower startups and
            small-to-medium businesses while also delivering measurable value to
            established enterprises. For startups, we bring speed,
            affordability, and innovation. For enterprises, we offer deep
            expertise, structured consulting, and solutions that drive
            efficiency and digital transformation.
          </p>
          <p>
            Looking ahead, our mission is clear—to continue being a trusted
            partner for businesses on their growth journey. We aim to create a
            future where technology and strategy work hand in hand, enabling
            businesses to operate smarter, faster, and safer.
          </p>
          <p className={styles.finalNote}>
            At <strong>PySparks Lab LLP</strong>, we are more than consultants;
            we are your partners in scaling success.
          </p>

          <div className={styles.underline}></div>

          <h2 className={styles.servicesTitle}>Our Core Services</h2>
          <ul className={styles.servicesList}>
            <li>Business Process & Consulting Solutions</li>
            <li>Web Application Development</li>
            <li>Mobile App Development</li>
            <li>Analytical & Data-driven Solutions</li>
            <li>AI Bots & Automation</li>
            <li>Digital Marketing</li>
            <li>Finance & Accounting Services</li>
            <li>Cyber Crime Investigation</li>
            <li>Cyber Security Consultancy & Solutions</li>
          </ul>

          <Socials />
        </div>
      </section>
      <Footer />
    </>
  );
}
