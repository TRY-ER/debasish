import React from "react";
import "./Experience.css";
import Example from "./ProjectHorizontalScroll/HorizontalScroll.js";
import {motion} from "framer-motion";

const ExperienceSection = () => {
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
                ease: "easeInOut"
            }
        },
    }
    return (
        <div
            className="projects-main-container"
        >
            <div className="exp-heading-container">
                <motion.h1
                variants={headTextAppearVar}
                initial="initial"
                whileInView="animate"
                >Work Experience</motion.h1>
            </div>
            <div className="projects-container">
                <Example />
            </div>
        </div>
    )
}


export default ExperienceSection;