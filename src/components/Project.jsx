"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Project.module.css";

export default function Project() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = {
    existing: [
      {
        title: "Py-POS — Fully Customisable",
        description:
          "A robust, modular Point-of-Sale system with pluggable features (billing, inventory sync, multi-store, reports). Designed to adapt to any business workflow.",
        status: "available",
        ctaLabel: "Explore Py-POS",
        href: "#",
      },
    ],
    upcoming: [
      {
        title: "Fully Customisable Inventory System",
        description:
          "End-to-end inventory with SKUs, batches, suppliers, stock rules, transfers, audits, and APIs. Built to integrate seamlessly with Py-POS.",
        status: "upcoming",
        ctaLabel: "Get Updates",
        href: "#",
      },
    ],
  };

  return (
    <section className={styles.projectionWrapper}>
      <div
        ref={containerRef}
        className={`${styles.projectionSection} ${
          visible ? styles.visible : ""
        }`}
      >
        {/* LEFT */}
        <div className={styles.left}>
          <h1 className={styles.title}>
            Our <span>Projections</span>
          </h1>
          <p className={styles.description}>
            See what’s shipping now and what’s arriving next. Every product is
            built to be fully customizable so it fits your exact workflow.
          </p>
          <div className={styles.underline}></div>
        </div>

        {/* RIGHT */}
        <div className={styles.groups}>
          {/* Existing */}
          <div className={styles.group}>
            <h2 className={styles.groupTitle}>Available Projects</h2>
            <ul className={styles.list}>
              {projects.existing.map((p) => (
                <li key={p.title} className={styles.card}>
                  <div className={styles.cardHead}>
                    <span className={`${styles.badge} ${styles.available}`}>
                      Available
                    </span>
                    <h3 className={styles.cardTitle}>{p.title}</h3>
                  </div>
                  <p className={styles.cardDesc}>{p.description}</p>
                  {/* <a className={styles.cta} href={p.href}>
                    {p.ctaLabel}
                  </a> */}
                </li>
              ))}
            </ul>
          </div>

          {/* Upcoming */}
          <div className={styles.group}>
            <h2 className={styles.groupTitle}>Upcoming Projects</h2>
            <ul className={styles.list}>
              {projects.upcoming.map((p) => (
                <li key={p.title} className={styles.card}>
                  <div className={styles.cardHead}>
                    <span className={`${styles.badge} ${styles.upcoming}`}>
                      Upcoming
                    </span>
                    <h3 className={styles.cardTitle}>{p.title}</h3>
                  </div>
                  <p className={styles.cardDesc}>{p.description}</p>
                  {/* <a className={styles.ctaGhost} href={p.href}>
                    {p.ctaLabel}
                  </a> */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
