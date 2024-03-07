import React from "react";
import "./Intro.css";
import { motion } from "framer-motion";
import { WavyBackground } from "../ui/wavy-background.tsx";

import { introSub, introTitle } from "../../content/introContent.jsx";


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
                ease: "easeInOut"
            }
        },
    }

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
                ease: "easeInOut"
            }
        }
    }
    return (<>
        <div className="intro-container">
            <WavyBackground
                className="wave-container stackable"
                waveWidth={20}
                blur={2}
                waveOpacity={1}
            >
            </WavyBackground>
            <div className="text-container stackable">
                <motion.h1
                    variants={headTextAppearVar}
                    whileInView="animate"
                    initial="initial"
                >{introTitle}</motion.h1>
                <motion.h2
                    variants={headTextAppearVar}
                    whileInView="animate"
                    initial="initial"
                >{introSub}</motion.h2>
            </div>
            <motion.div
                variants={downArrowAppearVar}
                whileInView="animate"
                initial="initial"
                className="arrow-container stackable">
                <img src="/assets/icons/downarrow-white.svg" alt="" />
            </motion.div>
        </div>
    </>)
}

export default IntroSection