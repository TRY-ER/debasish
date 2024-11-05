"use client";

import { cn } from "../../utils/cn.ts";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import "./3D-card.css";
import { motion } from "framer-motion";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName,
  index
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  index: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);



  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <motion.div
        className={cn(
          "py-20 flex items-center justify-center card-container",
          containerClassName
        )}
        style={{
          perspective: "1000px",
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear card-indiv",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </motion.div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
  index
}: {
  children: React.ReactNode;
  className?: string;
  index?: number;
}) => {
  const elemVariant = {
    initial: {
      y: "10%",
      opacity: 0,
      filter: "blur(5px)",
    },
    whileInView: (index: number) => {
      return {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          duration: 0.3,
          ease: "easeInOut"
        }
      }
    }
  }
  return (
    <motion.div
      variants={elemVariant}
      initial="initial"
      whileInView="whileInView"
      custom={index}
      className={cn(
        "threeD-card-body [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);

  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  };

  return (
    <Tag
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};
