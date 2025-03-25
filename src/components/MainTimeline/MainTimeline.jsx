import React from "react";
import "./MainTimeline.css";
import { TracingBeam } from "../ui/TracingBeam/TracingBeam.tsx";
import { MainTimelineContent } from "../../content/main_timeline_content.jsx";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { TracingBeamDemo } from "../IndivProject/IndivProjectContainer";
import { TracingBeamTimeline } from "../IndivProject/TimeLineMain.jsx";


const MainTimeline = () => {
    const content = MainTimelineContent[0];
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
    return (<>
        <div className="timeline-container">
            <h1>Timeline</h1>
            <TracingBeamTimeline content={content}/>
        </div>
    </>)
}

export default MainTimeline;