import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Media } from "../../content/socialMedia.jsx";
import "./Navbar.css";

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);
  const { scrollY } = useScroll();

  // Animate navbar background opacity and blur on scroll
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(5, 0, 22, 0)", "rgba(5, 0, 22, 0.8)"],
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"],
  );
  const borderBottom = useTransform(
    scrollY,
    [0, 50],
    ["1px solid rgba(255, 255, 255, 0)", "1px solid rgba(255, 255, 255, 0.1)"],
  );

  const navItemVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <motion.nav
      className="navbar-wrapper"
      style={{
        backgroundColor,
        backdropFilter,
        WebkitBackdropFilter: backdropFilter,
        borderBottom,
      }}
    >
      <div className="navbar-container">
        <motion.div
          className="nav-logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="logo-link">
            <span className="nav-logo-text-gradient">DM.</span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="nav-links-desktop">
          {Media.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link-item"
              variants={navItemVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: index * 0.1 }}
            >
              {item.Title}
            </motion.a>
          ))}
          <motion.a
            href="mailto:availdebasish@gmail.com"
            className="nav-cta-button"
            variants={navItemVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: Media.length * 0.1 }}
          >
            Contact
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div
          className="nav-mobile-toggle"
          onClick={() => setShowMobile(!showMobile)}
        >
          <div className={`hamburger ${showMobile ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        className={`nav-mobile-overlay ${showMobile ? "open" : ""}`}
        initial={false}
        animate={showMobile ? { x: 0 } : { x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        <div className="mobile-links-container">
          {Media.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShowMobile(false)}
            >
              {item.Title}
            </a>
          ))}
          <a href="mailto:availdebasish@gmail.com" className="mobile-email">
            availdebasish@gmail.com
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
