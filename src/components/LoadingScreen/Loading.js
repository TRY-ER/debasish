import React, { useState, useEffect } from 'react';
import './Loading.css';
import { SparklesCore } from '../ui/sparkles.tsx';
import { AnimatePresence, motion } from 'framer-motion';


const ExpandingProgressBar = ({ progress }) => {
  return (
    <motion.div className="progress-bar">
      <motion.div
        className="progress-fill bg-gradient-to-r from-transparent via-sky-500 to-transparent"
        animate={{
          width: `${progress}%`,
        }}
        transition={{
          duration: 2
        }}
      />
    </motion.div>
  );
};


function LoadingPercent() {
  const [percentage, setPercentage] = useState(0);
  let intervalId;

  const percentageVariants = {
    initial: {
      opacity: 0.5,
    },
    animate: {
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" }, // Customize duration and easing
    },
  };

  useEffect(() => {
    const simulateLoading = () => {
      let count = 0;
      intervalId = setInterval(() => {
        count += 10;
        setPercentage(Math.min(count, 100)); // Ensure it doesn't exceed 100

        if (count === 100) {
          clearInterval(intervalId);
        }
      }, 200);
    };

    simulateLoading();

    // Replace this with your actual component loading logic and setPercentage based on progress
    // For example, you could fetch data from an API and update percentage based on progress

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);
  return (
    <>
      <><motion.span
        className='percent-text'
        key={percentage}
        variants={percentageVariants}
        animate="animate"
        initial="initial">
        {percentage} %
      </motion.span>
      </>
      <div className='progress-bar-outer'>
        <ExpandingProgressBar progress={percentage} />
      </div>
    </>
  )
}



function LoadingScreen() {
  const exitVariant = {
    y: "-100vh", // Slide the entire content upwards off-screen
    transition: { duration: 0.5, ease: "easeInOut" }, // Customize animation duration and easing
  };
  return (
        (<div>
          <div className="h-[40rem] w-full loading-screen flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="md:text-7xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20 ">
              {<LoadingPercent />}
            </h1>
            <div className="w-[60rem] h-40 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              {/* Core component */}
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={700}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full custom-radial-bg [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
        </div>)
  );
}

export default LoadingScreen;
