"use client";
import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/TracingBeam/TracingBeam.tsx";
import { motion } from "framer-motion";
import "./IndivProjectContainer.css";
import HDS from "../ui/HorizontalDragScroll/HDS.jsx";
import { PinContainer } from "../ui/3D-pin/3D-pin.tsx";
import { CardContainer, CardItem, CardBody } from "../ui/3D-card.tsx";

const PinContent = ({ elements }) => {
  const elemVariant = {
    initial: {
      y: "100%",
      opacity: 0,
      filter: "blur(5px)",
    },
    animate: (index) => {
      return {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          duration: 0.3 * index,
          ease: "easeInOut"
        }
      }
    }
  }
  return (
    <>
      {elements.map((item, index) => {
        return (
          <>
            <div className="hds-item">
              <motion.a
                variants={elemVariant}
                initial="initial"
                whileInView="animate"
                custom={index}
                href={item.url} target="_blank">
                <PinContainer
                  title={item.url}
                  href={item.url}
                >
                  <div className="flex basis-full flex-col p-1 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[15rem] pin-card-obj">
                    <h3 className="max-w-xs !pb-1 !m-0 font-bold  text-base text-slate-100 text-align-center">
                      {item.title}
                    </h3>
                    {item?.desc_text && (
                      <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 ">
                          {item.desc_text}
                        </span>
                      </div>
                    )}
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 card-image-con">
                      <img src={item.logo} />
                    </div>
                  </div>
                </PinContainer>
              </motion.a>
            </div>
          </>
        )
      }
      )}
    </>
  )
}

const PersContent = ({ elements }) => {
  return (
    <>
      <div className="pers-container">
        {elements.map((item, index) => {
          return (
            <CardContainer className="inter-var" index={index}>
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  "
                index={index}>
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {item?.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-slate-500 text-sm max-w-sm mt-2"
                >
                  {item?.degn}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={item?.img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-2 explore-sec">
                  <a href={item?.linkedIn} target="_blank">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      LinkedIn →
                    </CardItem>
                  </a>
                </div>
              </CardBody>
            </CardContainer>
          )
        })}
      </div>
    </>
  )

}


export function TracingBeamTimeline({ content }) {
  const row_tags = ["Date", "Time", "Location", "Status", "time-range"]
  const exp_tags = ["Organization", "Education", "Research Publication", "International Conference"]
  const [expanded, setExpanded] = React.useState([]);
  const elemVariant = {
    initial: {
      y: "100%",
      opacity: 0,
      filter: "blur(5px)",
    },
    animate: (index) => {
      return {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          duration: 0.3 * index,
          ease: "easeInOut"
        }
      }
    }
  }
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
      <TracingBeam className="px-6 mt-20" content={content}>
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {content?.steps?.map((item, index) => (
            <div key={`content-${index}`} className="mb-2">
              {(item?.badge || item?.type == "time-range") &&
                (row_tags.includes(item?.badge) || row_tags.includes(item?.type)) ?
                <>
                  <div className="tl-row-container">
                    {item?.time_text &&
                      <motion.h1
                        variants={headTextAppearVar}
                        initial="initial"
                        whileInView="animate"
                        className="time-text-content"
                      >
                        {item.time_text}
                      </motion.h1>
                    }
                    {item?.badge &&
                      <motion.h2
                        variants={headTextAppearVar}
                        initial="initial"
                        whileInView="animate"
                        className="tl-badge-h2 text-white rounded-full text-sm w-fit px-4 py-1 mb-1">
                        {item.badge}
                      </motion.h2>
                    }
                    {item?.date &&
                      <motion.p
                        variants={headTextAppearVar}
                        initial="initial"
                        whileInView="animate"
                        className={twMerge("text-l mb-4")}>
                        {item.date}
                      </motion.p>
                    }
                    {item?.time &&
                      <motion.p
                        variants={headTextAppearVar}
                        initial="initial"
                        whileInView="animate"
                        className={twMerge("text-l mb-4")}>
                        {item.time}
                      </motion.p>
                    }
                    {item?.location &&
                      <motion.p
                        variants={headTextAppearVar}
                        initial="initial"
                        whileInView="animate"
                        className={twMerge("text-l mb-4")}>
                        {item.location}
                      </motion.p>
                    }
                    {item?.status &&
                      <motion.p
                        variants={headTextAppearVar}
                        initial="initial"
                        whileInView="animate"
                        style={{ color: "green", fontWeight: 700 }}
                        className={twMerge("text-l mb-4")}>
                        {item?.status}
                      </motion.p>
                    }
                  </div>
                </>
                : <>
                  {item?.type == "exp" ?
                    <>
                      <div className="tl-row-container">
                        {item?.badge &&
                          <motion.h2
                            variants={headTextAppearVar}
                            initial="initial"
                            whileInView="animate"
                            className={`animate-shimmer bg-[linear-gradient(100deg,#8080803d,45%,#ffffff6d,55%,#8080803d)] bg-[length:200%_100%] text-white rounded-full text-sm w-fit px-4 py-1 mb-1 ${expanded.includes(item.id) ? "tl-badge-h2" : ""}`}
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              if (expanded.includes(item?.id)) {
                                setExpanded(expanded.filter(e => e !== item?.id));
                              } else {
                                setExpanded([...expanded, item?.id]);
                              }
                            }}
                          >
                            {item.badge}
                          </motion.h2>
                        }
                        {expanded.includes(item?.id) ?
                          <p
                            onClick={() => {
                              if (expanded.includes(item?.id)) {
                                setExpanded(expanded.filter(e => e !== item?.id));
                              } else {
                                setExpanded([...expanded, item?.id]);
                              }
                            }}
                          >
                            ←
                          </p>
                          :
                          <p
                            onClick={() => {
                              if (expanded.includes(item?.id)) {
                                setExpanded(expanded.filter(e => e !== item?.id));
                              } else {
                                setExpanded([...expanded, item?.id]);
                              }
                            }}
                            variants={headTextAppearVar}
                            initial="initial"
                            whileInView="animate"
                          >
                            →
                          </p>
                        }
                      </div>
                    </>
                    :
                    <>
                      {item?.badge &&
                        <motion.h2
                          variants={headTextAppearVar}
                          initial="initial"
                          whileInView="animate"
                          className={`tl-badge-h2 bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-1 ${item?.badge == "Organization" ? "mt-5" : ""}`}>
                          {item.badge}
                        </motion.h2>
                      }
                    </>
                  }

                </>}
              {
                item?.break && (
                  <>
                    <div className="break-obj"></div>
                  </>
                )
              }
              {item?.title &&
                <div className="title-container">
                  <motion.p
                    variants={headTextAppearVar}
                    initial="initial"
                    whileInView="animate"
                    className={twMerge("text-xl mb-4")}>
                    {item.title}
                  </motion.p>
                </div>
              }
              {item?.description &&
                <div className="title-container">
                  <motion.p
                    variants={headTextAppearVar}
                    initial="initial"
                    whileInView="animate"
                    className={twMerge("text-sm mb-4")}>
                    {item?.description}
                  </motion.p>
                </div>
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
              {item?.partners && expanded.includes(item?.id) ?
                <>
                  <HDS  >
                    <PinContent elements={item?.partners} />
                  </HDS >
                </>
                : ""}

              {item?.speakers && expanded.includes(item?.id) ?
                <HDS>
                  <PersContent elements={item?.speakers} />
                </HDS>
                :
                ""
              }
              { exp_tags?.includes(item?.badge) 
              
              ?
                <div className="org-container">
                  <div className="org-img-container">
                    <img src={item?.c_img} />
                  </div>
                  <div className="org-text-container">
                    {Object.keys(item?.o_detail).map((key) => (
                      <>
                        <motion.h2
                          variants={headTextAppearVar}
                          initial="initial"
                          whileInView="animate"
                          className="tl-badge-h2 text-white rounded-full text-sm w-fit px-4 py-1 mt-1">
                          {key}
                        </motion.h2>
                        <p>{item?.o_detail[key]}</p>
                      </>
                    ))}
                  </div>
                </div>
                :
                ""
              }
              {expanded.includes(item?.id) ?
                <HDS>
                  <div className="work-profile">
                    {item?.portfolio_profile?.map((p, index) => (
                      <motion.div
                        variants={elemVariant}
                        initial="initial"
                        whileInView="animate"
                        custom={index}
                        className="work-profile-item">
                        <h4>{p?.title}</h4>
                        <p>{p?.description}</p>
                        <motion.div className="text-sm link-div prose prose-sm dark:prose-invert">
                          {p?.links?.map((link) => {
                            return (
                              <a href={link.url} target="_blank" rel="noreferrer" className="link-a">
                                <div className="link-container">
                                  {link?.image && <>
                                    <img src={link.image} alt="link image" className="link-img" />
                                  </>}
                                  {link?.title && <>
                                    <h5>{link.title}</h5>
                                  </>}
                                </div>
                              </a>
                            )
                          })}
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </HDS>
                :
                ""
              }
              {item?.links && expanded.includes(item?.id) ?
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
                : ""
              }
              {
                item?.show_links && (
                  <motion.div
                    variants={headTextAppearVar}
                    initial="initial"
                    whileInView="animate"
                    className="text-sm link-div prose prose-sm dark:prose-invert">
                    {item?.show_links.map((link, index) => {
                      return (
                        <motion.div
                          variants={elemVariant}
                          initial="initial"
                          whileInView="animate"
                          custom={index}
                          className="link-div">
                          <a href={link.url} target="_blank" rel="noreferrer" className="link-a">
                            {link?.image && <>
                              <img src={link.image} alt="link image" className="link-img" />
                            </>}
                            {link?.text && <>
                              <p>{link.text}</p>
                            </>}
                          </a>
                        </motion.div>
                      )
                    })}
                  </motion.div>
                )
              }
            </div>
          ))}
        </div>
      </TracingBeam>
    </>
  );
}
