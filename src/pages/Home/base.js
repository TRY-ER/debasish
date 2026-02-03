import React, { useEffect, useState } from "react";
import "./base.css";
import IntroSection from "../../components/Intro/Intro";
import MainTimeline from "../../components/MainTimeline/MainTimeline.jsx";
import Navbar from "../../components/Navbar/Navbar";

import { motion, useScroll } from "framer-motion";
import Footer from "../../components/Footer/Footer.jsx";

const BaseHomeComp = () => {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

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
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const revealHead = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
    },
  };
  return (
    <>
      <motion.div
        className="base-home-container"
        // variants={revealHead}
        // initial="initial"
        // animate="animate"
      >
        <>
          <Navbar />
          <motion.svg
            variants={headTextAppearVar}
            animate="animate"
            initial="initial"
            id="progress"
            width="100"
            height="100"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="indicator"
              style={{ pathLength: scrollYProgress }}
            />
          </motion.svg>
          <IntroSection />
          <MainTimeline />
          <Footer />
        </>
      </motion.div>
    </>
  );
};

export default BaseHomeComp;
