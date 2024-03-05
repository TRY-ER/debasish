import React, { useState, useEffect } from "react";
import './home.css'
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "../../components/LoadingScreen/Loading";
import BaseHomeComp from "./base";


const HomePage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [testshow, settestshow] = useState(false);

    useEffect(() => {
        // Simulate loading your components (replace with your actual logic)
        setTimeout(() => setIsLoaded(true), 3000); // Simulate 2 seconds of loading
    }, []);
    return (
        <>
            <AnimatePresence>
                {isLoaded === false ? (
                    <motion.div
                        initial={false}
                        exit={{
                            y: "-100vh", // Slide the entire content upwards off-screen
                            transition: { duration: 1, ease: "easeInOut" }, // Customize animation duration and easing
                        }}
                        key="exit"
                        className="loading-screen"
                        transition={{
                            duration: 1
                        }}
                    >
                        <LoadingScreen />
                    </motion.div>
                ) :
                    <>
                        {/* <AnimatePresence>
                            {testshow &&
                                (<motion.div style={{ width: "20px", height: "20px", backgroundColor: "red" }}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 100 }}
                                    exit={{ opacity: 0, x: -150, transition: { duration: 2 } }}
                                    transition={{
                                        duration: 1
                                    }}
                                    className="test"
                                >
                                </motion.div>)
                            }
                        </AnimatePresence> */}
                    </>
                }
            </AnimatePresence>
                <BaseHomeComp isLoaded={isLoaded} />
        </>

    )
}

export default HomePage
