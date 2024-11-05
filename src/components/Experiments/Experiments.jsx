import React from "react";
import "./Experiments.css";
import Example from "./ProjectHorizontalScroll/HorizontalScroll.js";
import { motion } from "framer-motion";

const ExperimentSection = () => {
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
            <div className="heading-container">
                <motion.h1
                    variants={headTextAppearVar}
                    initial="initial"
                    whileInView="animate"
                >Experiments</motion.h1>
            </div>
            <div className="projects-container">
                <Example />
            </div>
        </div>
    )
}


export default ExperimentSection;