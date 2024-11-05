import React from "react";
import "./Projects.css";
import { CardBody, CardContainer, CardItem } from "../ui/3D-card.tsx";
import Example from "./ProjectHorizontalScroll/HorizontalScroll.js";
import { motion } from "framer-motion";



const ProjectSection = () => {
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
                >Projects</motion.h1>
            </div>
            <div className="projects-container">
                <Example />
            </div>
        </div>
    )
}


export default ProjectSection;