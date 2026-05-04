'use client'
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../constants/constants"
import { SectionWrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";
import color_sharp from "../assets/color_sharp.png";
import astronaut from "../assets/header.svg";

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[190px] w-full'
          glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px"
          tiltMaxAngleX={30} tiltMaxAngleY={30} tiltEnable={true} perspective={1000}
    >
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                className='bg-tertiary rounded-[20px] py-4 px-6 min-h-[210px] flex justify-evenly items-center flex-col'
            >
                <Image
                    src={icon}
                    alt={title}
                    className='w-12 h-12 object-contain'
                />

                <h3 className='text-white text-[16px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <>
            <div className='relative overflow-hidden lg:overflow-visible'>
                <motion.div variants={textVariant()}>
                    <h2 className={'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'}>About.</h2>
                </motion.div>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-4 text-secondary text-[18px] max-w-3xl leading-[30px] font-semibold'
                >

                    Aspiring Data Scientist, Data Analyst, and Machine Learning Engineer with a passion for turning data
                    into meaningful stories and intelligent solutions.
                    <br/><br/>
                    I enjoy working with data analysis to uncover patterns, build predictive models, and support
                    better decision-making. My goal is to create impactful, scalable solutions that bridge
                    the gap between data and real-world applications.

                </motion.p>
                <Image src={color_sharp} alt="color-sharp" className="absolute z-[-1] h-80 -left-60 w-screen -top-20" />
                <Image src={astronaut} alt="astronaut" className="absolute z-[-1] h-80 -right-48 animation top-10" />
            </div>

            <div className='mt-10 flex-wrap justify-center gap-8 hidden md:flex'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");