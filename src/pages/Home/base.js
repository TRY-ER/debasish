import React, { useEffect, useState } from "react";
import "./base.css";
import Example from "../../components/ui/horizontalScroll/HorizontalScroll";
import IntroSection from "../../components/Intro/Intro";
import ProjectSection from "../../components/Projects/Projects";
import ExperimentSection from "../../components/Experiments/Experiments";
import ExperienceSection from "../../components/Experience/Experience.jsx";
import { FollowerPointerCard } from "../../components/ui/FollowingPointer/FollowingPointer.tsx";

import { Media } from "../../content/socialMedia.jsx";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ProjectOutro from "../../components/ProjectOutro/ProjectOutro.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { Link } from "react-router-dom";


const BaseHomeComp = () => {
    const { scrollYProgress } = useScroll();
    const [ showMobile, setShowMobile ] = useState(false);

    useEffect(() => {
        console.log(scrollYProgress);
    }, [scrollYProgress])

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
                ease: "easeInOut"
            }
        }
    }

    const revealHead = {
        initial: {
            y: "100%",
        },
        animate: {
            y: 0,
        }

    }
    return (
        <>
            <motion.div
                className="base-home-container"
            // variants={revealHead}
            // initial="initial"
            // animate="animate"
            >
                <>
                    <motion.svg
                        variants={headTextAppearVar}
                        animate="animate"
                        initial="initial"
                        id="progress" width="100" height="100" viewBox="0 0 100 100">
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
                    <div className="home-header-container">
                        <motion.h1
                            variants={headTextAppearVar}
                            animate="animate"
                            initial="initial"
                        >
                            <Link to="/" >
                                <img src="/assets/icons/profile_logo.png" className="profile-logo" />
                            </Link>
                            <img src="/assets/icons/profile_logo.png" className="profile-logo-mob" onClick={() => { setShowMobile(!showMobile) }} />
                        </motion.h1>
                        <div className={`media-container ${showMobile ? "show" : ""}`}>
                            {Media.map((item, index) => {
                                {/* <FollowerPointerCard> */ }
                                return (<a href={item.link} target="_blank"><motion.h1
                                    variants={headTextAppearVar}
                                    animate="animate"
                                    initial="initial"
                                    className={`indiv-media ${showMobile ? "show" : ""}`}
                                >{item.Title}</motion.h1 >
                                </a>
                                )
                                {/* </FollowerPointerCard> */ }
                            })}
                        </div>
                        <a href="mailto:availdebasish@gmail.com" target="_blank">
                            <motion.h1
                                variants={headTextAppearVar}
                                animate="animate"
                                initial="initial"
                                className={`email-id ${showMobile ? "show" : ""}`}
                            > availdebasish@gmail.com</motion.h1>
                        </a>
                    </div>
                    <IntroSection />
                    <ExperienceSection />
                    <ExperimentSection />
                    <ProjectSection />
                    <ProjectOutro />
                    <Footer />
                </>
            </motion.div>
        </>
    );

}

export default BaseHomeComp;