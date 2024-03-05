import React from "react";
import "./Intro.css";
import { motion } from "framer-motion";
import { WavyBackground } from "../ui/wavy-background.tsx";


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
                delay: 1,
                duration: 0.5,
                ease: "easeInOut"
            }
        }
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
                delay: 2,
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
                    animate="animate"
                    initial="initial"
                >Hi, I am DEBASISH </motion.h1>
                <motion.h2
                    variants={headTextAppearVar}
                    animate="animate"
                    initial="initial"
                >Weaving worlds through code and creativity. Focusing on <strong>Machine Learning</strong>, <strong>Polymer Research</strong>, and <strong>Generative AI</strong>.</motion.h2>
            </div>
            <motion.div
                variants={downArrowAppearVar}
                animate="animate"
                initial="initial"
                className="arrow-container stackable">
                <img src="/assets/icons/downarrow-white.svg" alt="" />
            </motion.div>
        </div>
    </>)
}

export default IntroSection