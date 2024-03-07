import React from "react";
import {motion} from "framer-motion";
import "./Footer.css";

const Footer = () =>{
    const footerVar= {
        initial: {
            opacity: 0,
            filter: "blur(5px)",
        },
        animate: {
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
    }
    return(
        <>
            <div className="footer-container">
                <div className="footer-bar "></div>
                <motion.p
                    variants={footerVar}
                    initial="initial"
                    whileInView="animate"
                    className="text-slate-500 footer-text" 
                    style={{color: "white"}}
                    >
                 Made by Debasish Mohanty with ❤️</motion.p>
            </div>
        </>
    )
}

export default Footer;