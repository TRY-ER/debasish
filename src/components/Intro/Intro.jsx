import React from "react";
import "./Intro.css";
import { motion } from "framer-motion";

import { introSub, introTitle } from "../../content/introContent.jsx";
import { currentPositions } from "../../content/intro/currentPositions.js";

const IntroSection = () => {
  const headTextAppearVar = {
    initial: {
      y: "100%",
      opacity: 0,
      filter: "blur(5px)",
    },
    animate: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const downArrowAppearVar = {
    initial: {
      y: "-100%",
      opacity: 0,
      filter: "blur(5px)",
    },
    animate: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <div className="intro-container">
        <div className="text-container">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="intro-eyebrow"
          >
            <span className="eyebrow-line"></span>
            PhD Researcher & AI Architect
          </motion.div>
          <motion.h1
            variants={headTextAppearVar}
            whileInView="animate"
            initial="initial"
          >
            {introTitle}
          </motion.h1>
          <motion.div
            variants={headTextAppearVar}
            whileInView="animate"
            initial="initial"
            className="intro-sub-highlight"
          >
            <p>{introSub}</p>
          </motion.div>

          <motion.div
            variants={headTextAppearVar}
            whileInView="animate"
            initial="initial"
            className="current-positions-wrapper"
          >
            <h3 className="cp-header">What I'm up to right now</h3>
            <div className="cp-list">
              {currentPositions.map((pos) => (
                <div className="cp-item" key={pos.id}>
                  <div className="cp-dot"></div>
                  <p className="cp-text">
                    {pos.role}{" "}
                    <span className="cp-highlight">@ {pos.company}</span>
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={downArrowAppearVar}
          whileInView="animate"
          initial="initial"
          className="arrow-container"
        >
          <img src="./assets/icons/downarrow-white.svg" alt="Scroll Down" />
        </motion.div>
      </div>
    </>
  );
};

export default IntroSection;
