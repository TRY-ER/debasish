import React from "react";
import "./base.css";
import { motion } from "framer-motion";
import Example from "../../components/ui/horizontalScroll/HorizontalScroll";
import IntroSection from "../../components/Intro/Intro";
import ProjectSection from "../../components/Projects/Projects";



const BaseHomeComp = ({ isLoaded }) => {
    const headTextAppearVar = {
        initial: {
            y: "100%",
            opacity: 0,
            filter:"blur(5px)",
        },
        animate: {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                delay: 1,
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    }
    return (
        <div className="base-home-container">
            {isLoaded && (
                <>
                <div className="home-header-container">
                    <motion.h1
                        variants={headTextAppearVar}
                        animate="animate"
                        initial="initial"
                    > Debasish's Site</motion.h1>
                    <div className="media-container">
                        <motion.h1
                        variants={headTextAppearVar}
                        animate="animate"
                        initial="initial"
                        > LinkedIn</motion.h1 >
                        <motion.h1
                        variants={headTextAppearVar}
                        animate="animate"
                        initial="initial"
                        > X</motion.h1>
                        <motion.h1
                        variants={headTextAppearVar}
                        animate="animate"
                        initial="initial"
                        > Github</motion.h1>
                    </div>
                    <motion.h1
                        variants={headTextAppearVar}
                        animate="animate"
                        initial="initial"
                    > availdebasish@gmail.com</motion.h1>
                </div>
                <IntroSection />
                <ProjectSection />
               </>
            )}
        </div>
    );

}

export default BaseHomeComp;