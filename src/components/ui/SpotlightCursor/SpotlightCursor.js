import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "./SpotlightCursor.css";

const SpotlightCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="spotlight-overlay"
      style={{
        background: useTransform(
          [x, y],
          ([latestX, latestY]) =>
            `radial-gradient(400px circle at ${latestX}px ${latestY}px, rgba(99, 68, 245, 0.15), transparent 80%)`
        ),
      }}
    />
  );
};

export default SpotlightCursor;
