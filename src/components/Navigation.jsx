import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import styles from "./Navigation.module.css";
import Logo from "./Logo";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navRef = useRef(null);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    if (isMobileMenuOpen) setIsDropdownOpen(false);
  };

  // Hover open for desktop
  const handleMouseEnter = () => {
    if (window.innerWidth > 768) setIsDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    if (window.innerWidth > 768) setIsDropdownOpen(false);
  };

  // Toggle dropdown (mobile)
  const toggleDropdown = () => {
    if (window.innerWidth <= 768) {
      setIsDropdownOpen((prev) => !prev);
    }
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={styles.nav} ref={navRef}>
      <Logo />

      {/* Hamburger Button */}
      <button
        className={`${styles.menuToggle} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Nav Menu */}
      <ul className={`${styles.menu} ${isMobileMenuOpen ? styles.open : ""}`}>
        <li>
          <NavLink to="/about-us">About Us</NavLink>
        </li>

        {/* Services Dropdown */}
        <li
          className={styles.dropdown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            onClick={toggleDropdown}
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
            className={`${styles.dropdownToggle} ${
              isDropdownOpen ? styles.active : ""
            }`}
          >
            Services Offered
            <FaChevronDown
              className={`${styles.arrowIcon} ${
                isDropdownOpen ? styles.rotate : ""
              }`}
            />
          </button>

          <ul
            className={`${styles.dropdownMenu} ${
              isDropdownOpen ? styles.open : ""
            }`}
          >
            <li>
              <NavLink to="/services-offered/business-consulting">
                Business Process & Consulting
              </NavLink>
            </li>
            <li>
              <NavLink to="/services-offered/web-apps">
                Web Application Development
              </NavLink>
            </li>
            <li>
              <NavLink to="/services-offered/app-development">
                App Development
              </NavLink>
            </li>
            <li>
              <NavLink to="/services-offered/analytics">
                Analytical Solution
              </NavLink>
            </li>
            <li>
              <NavLink to="/services-offered/ai-automation">
                AI Bot & Automation
              </NavLink>
            </li>
            <li>
              <NavLink to="/services-offered/digital-marketing">
                Digital Marketing
              </NavLink>
            </li>
            <li>
              <NavLink to="/services-offered/finance">
                Finance & Accounting
              </NavLink>
            </li>
            <li>
              <NavLink to="/services-offered/cyber-investigation">
                Cyber Crime Investigation
              </NavLink>
            </li>
            <li>
              <NavLink to="/services-offered/cyber-security">
                Cyber Security Solutions
              </NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink to="/careers">Careers</NavLink>
        </li>
      </ul>
    </nav>
  );
}
