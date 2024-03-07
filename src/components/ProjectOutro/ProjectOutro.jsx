import React from 'react';
import ProjectOutroContent from '../../content/projectOutroContent';
import { motion } from 'framer-motion';
import { contactsContent } from '../../content/contact';

import "./ProjectOutro.css";

const ProjectOutro = () => {
    const headTextAppearVar = {
        initial: {
            y: "10%",
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
        <motion.div
            variants={headTextAppearVar}
            initial="initial"
            whileInView="animate"
            className='project-outro'
        >
            <p className="right-arrow">→</p>
            <div className="outro-texts">
                <ProjectOutroContent />
                <div className="contact-bar">
                    {contactsContent.map((contact, index) => {
                        return (
                            <div className="contact-container">
                                <a href={contact.link} target="_blank" >
                                    <img src={contact.img} />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>


        </motion.div>
    )
}

export default ProjectOutro;    