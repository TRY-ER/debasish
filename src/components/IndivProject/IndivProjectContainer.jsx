"use client";
import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/TracingBeam/TracingBeam.tsx";
import { motion } from "framer-motion";
import "./IndivProjectContainer.css";

export function TracingBeamDemo({content}) {
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
    <>
      <motion.div
        variants={headTextAppearVar}
        initial="initial"
        whileInView="animate"
        className="project-con-head">
        <h1>{content?.title}</h1>
      </motion.div>
      <TracingBeam className="px-6 mt-20" content={content}>
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {content?.steps?.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              {item?.badge &&
                <motion.h2
                  variants={headTextAppearVar}
                  initial="initial"
                  whileInView="animate"
                  className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                  {item.badge}
                </motion.h2>
              }

              {item?.title &&
                <motion.p
                  variants={headTextAppearVar}
                  initial="initial"
                  whileInView="animate"
                  className={twMerge("text-xl mb-4")}>
                  {item.title}
                </motion.p>
              }

              {item?.image && (
                <motion.img
                  variants={headTextAppearVar}
                  initial="initial"
                  whileInView="animate"
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item?.description &&
                <motion.div
                  variants={headTextAppearVar}
                  initial="initial"
                  whileInView="animate"
                  className="text-sm  prose prose-sm dark:prose-invert">
                  {item.description}
                </motion.div>
              }
              {item?.links &&
                <motion.div
                  variants={headTextAppearVar}
                  initial="initial"
                  whileInView="animate"
                  className="text-sm  prose prose-sm dark:prose-invert">
                    {item.links.map((link, index) => {
                      return (
                        <div className="link-div">
                          <a href={link.url} target="_blank" rel="noreferrer" className="link-a">
                            {link?.image && <>
                              <img src={link.image} alt="link image" className="link-img" />  
                            </>}
                            {link?.text && <>
                              <p>{link.text}</p>
                            </>}
                          </a>
                        </div>
                      )
                    })}
                </motion.div>
              }
            </div>
          ))}
        </div>
      </TracingBeam>
    </>
  );
}