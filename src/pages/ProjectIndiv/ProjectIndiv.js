import React, { useEffect } from "react";
import "./ProjectIndiv.css";
import Example from "../../components/ui/horizontalScroll/HorizontalScroll.js";
import IntroSection from "../../components/Intro/Intro.jsx";
import ProjectSection from "../../components/Projects/Projects.jsx";
import ExperimentSection from "../../components/Experiments/Experiments.jsx";
import ExperienceSection from "../../components/Experience/Experience.jsx";
import { FollowerPointerCard } from "../../components/ui/FollowingPointer/FollowingPointer.tsx";

import { Media } from "../../content/socialMedia.jsx";

import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import ProjectOutro from "../../components/ProjectOutro/ProjectOutro.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { TracingBeamDemo } from "../../components/IndivProject/IndivProjectContainer.jsx";
import { useParams } from "react-router-dom";
import { projectContent } from "../../content/projectContent.jsx";

const ProjectIndivComp = () => {
    const { scrollYProgress } = useScroll();
    const [projObj, setProjObj] = useState({});
    const projId = useParams()["project-id"];
    useEffect(() => {
        setProjObj(projectContent.find(item => item.id === projId));
    })

    useEffect(() => {
        console.log(scrollYProgress);
        console.log("projId", projId);
        console.log("projObj", projObj);
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
    return (
        <>
            <motion.div
                className="base-home-container"
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
                        > Debasish's Site</motion.h1>
                        <div className="media-container">
                            {Media.map((item, index) => {
                                {/* <FollowerPointerCard> */ }
                                return (<motion.h1
                                    variants={headTextAppearVar}
                                    animate="animate"
                                    initial="initial"
                                >{item.Title}</motion.h1 >)
                                {/* </FollowerPointerCard> */ }
                            })}
                        </div>
                        <motion.h1
                            variants={headTextAppearVar}
                            animate="animate"
                            initial="initial"
                        > availdebasish@gmail.com</motion.h1>
                    </div>
                    <TracingBeamDemo content={projObj} />
                    <Footer />
                </>
            </motion.div>
        </>
    );

}

export default ProjectIndivComp;