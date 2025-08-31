import { useEffect, useState } from "react";
import styles from "./Team.module.css";
import teamData from "../data/team.json";

export default function Team() {
  const [expandedMember, setExpandedMember] = useState(null);
  const [visibleGroups, setVisibleGroups] = useState({
    founders: false,
    consultants: false,
    advisors: false,
    extended: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const group = entry.target.getAttribute("data-group");
            setVisibleGroups((prev) => ({ ...prev, [group]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll("[data-group]")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleExpand = (name) => {
    setExpandedMember((prev) => (prev === name ? null : name));
  };

  return (
    <section className={styles.teamSection}>
      <div className={styles.intro}>
        <h1 className={styles.title}>
          Meet Our Team
          <span className={styles.titleUnderline}></span>
        </h1>
        <p className={styles.description}>
          Our strength lies in our diversity and expertise. Established with a
          vision to deliver cutting-edge solutions, our team brings together
          specialists from business consulting, technology, digital marketing,
          finance, and cybersecurity — all working together to provide
          innovative and reliable services for our clients.
        </p>
      </div>

      {/* Founders */}
      <div
        className={`${styles.group} ${
          visibleGroups.founders ? styles.visible : ""
        }`}
        data-group="founders"
      >
        <h2 className={styles.groupTitle}>
          Founding Members <span className={styles.groupUnderline}></span>
        </h2>
        <div className={styles.members}>
          {teamData.founders.map(({ name, role, imgSrc, description }) => (
            <div
              key={name}
              className={`${styles.member} ${
                expandedMember === name ? styles.expanded : ""
              }`}
              onClick={() => toggleExpand(name)}
            >
              <img src={imgSrc} alt={name} className={styles.photo} />
              <div className={styles["member-text"]}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.role}>{role}</p>
                {expandedMember === name && (
                  <p className={styles.descriptionText}>{description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Consultants */}
      <div
        className={`${styles.group} ${
          visibleGroups.consultants ? styles.visible : ""
        }`}
        data-group="consultants"
      >
        <h2 className={styles.groupTitle}>
          Consultants <span className={styles.groupUnderline}></span>
        </h2>
        <div className={styles.members}>
          {teamData.consultants.map(({ name, role, imgSrc, description }) => (
            <div
              key={name}
              className={`${styles.member} ${
                expandedMember === name ? styles.expanded : ""
              }`}
              onClick={() => toggleExpand(name)}
            >
              <img src={imgSrc} alt={name} className={styles.photo} />
              <div className={styles["member-text"]}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.role}>{role}</p>
                {expandedMember === name && (
                  <p className={styles.descriptionText}>{description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advisors */}
      <div
        className={`${styles.group} ${
          visibleGroups.advisors ? styles.visible : ""
        }`}
        data-group="advisors"
      >
        <h2 className={styles.groupTitle}>
          Expert Advisor Committee{" "}
          <span className={styles.groupUnderline}></span>
        </h2>
        <div className={styles.members}>
          {teamData.expertAdvisors.map(
            ({ name, role, imgSrc, description }) => (
              <div
                key={name}
                className={`${styles.member} ${
                  expandedMember === name ? styles.expanded : ""
                }`}
                onClick={() => toggleExpand(name)}
              >
                <img src={imgSrc} alt={name} className={styles.photo} />
                <div className={styles["member-text"]}>
                  <h3 className={styles.name}>{name}</h3>
                  <p className={styles.role}>{role}</p>
                  {expandedMember === name && (
                    <p className={styles.descriptionText}>{description}</p>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Extended Team */}
      <div
        className={`${styles.group} ${
          visibleGroups.extended ? styles.visible : ""
        }`}
        data-group="extended"
      >
        <h2 className={styles.groupTitle}>
          Extended Team Members <span className={styles.groupUnderline}></span>
        </h2>
        <div className={styles.members}>
          {teamData.extendedTeamMembers.map(
            ({ name, role, imgSrc, description }) => (
              <div
                key={name}
                className={`${styles.member} ${
                  expandedMember === name ? styles.expanded : ""
                }`}
                onClick={() => toggleExpand(name)}
              >
                <img src={imgSrc} alt={name} className={styles.photo} />
                <div className={styles["member-text"]}>
                  <h3 className={styles.name}>{name}</h3>
                  <p className={styles.role}>{role}</p>
                  {expandedMember === name && (
                    <p className={styles.descriptionText}>{description}</p>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
