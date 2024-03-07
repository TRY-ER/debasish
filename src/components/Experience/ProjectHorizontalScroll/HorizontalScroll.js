import "./HorizontalScroll.css"

import { motion, useTransform, useScroll, animate } from "framer-motion";
import { useRef } from "react";

import { CardBody, CardContainer, CardItem } from "../../ui/3D-card.tsx";
import { PinContainer } from "../../ui/3D-pin/3D-pin.tsx";
import { Link } from "react-router-dom";
import { expContent } from "../../../content/workExperience.jsx";

const Example = () => {
    return (
        <div className="">
            <HorizontalScrollCarousel />
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const elemVariant= {
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
                    duration: 0.3*index,
                    ease: "easeInOut"
                }
            }
        }
    }

    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-35%"]);

    return (
        <section ref={targetRef} className="realtive exp-sticky-container">
            <div className="sticky-content sticky top-0 flex h-screen items-center overflow-hidden">

                <motion.div style={{ x }} className="flex gap-10">
                    {expContent.map((item, index) => {
                        return (
                            <>
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
                                        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                                            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                                {item.title}
                                            </h3>
                                            <div className="text-base !m-0 !p-0 font-normal">
                                                <span className="text-slate-500 ">
                                                    {item.desc_text}
                                                </span>
                                            </div>
                                            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 card-image-con">
                                                <img src={item.logo} />
                                            </div>
                                        </div>
                                    </PinContainer>
                                </motion.a>
                            </>
                        )
                    }
                    )}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
                    {card.title}
                </p>
            </div>
        </div>
    );
};

export default Example;
