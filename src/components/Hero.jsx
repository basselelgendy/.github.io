"use client";
import { memo, useState } from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import heroImg from "../assets/user.png";
import { useIntro } from "./IntroWrapper";

const Hero = memo(function Hero() {
    const { introComplete } = useIntro();
    const [imageLoaded, setImageLoaded] = useState(false);

    // خليت السوستة (spring) أقوى عشان الأنيميشن يبقى أسرع ويستجيب في لحظتها
    const iconHoverAnimation = {
        scale: 1.15,
        y: -5,
        boxShadow: "0px 0px 25px 8px rgba(145, 94, 255, 0.8)",
        transition: { type: "spring", stiffness: 400, damping: 15 }
    };

    return (
        // التعديل هنا: ضفنا id="home" عشان الـ Navbar يتعرف على السكشن ده
        <section id="home" className={`relative z-10 w-full h-screen mx-auto banner overflow-hidden`}>

            {/* الجزء الخاص بالاسم والخط البنفسجي */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={introComplete ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`absolute inset-0 top-[150px] right-40 animation max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5`}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={introComplete ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="w-5 h-5 rounded-full bg-[#915EFF]"
                    />
                    <motion.div
                        initial={{ height: 0 }}
                        animate={introComplete ? { height: "auto" } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="w-1 sm:h-80 h-40 violet-gradient"
                    />
                </div>

                {/* الجزء الخاص بالنص، الوظيفة، ووسائل التواصل */}
                <div className="mt-16 w-fit">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={introComplete ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className={`font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[90px] text-white`}
                    >
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;Hi, I'm{" "}
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={introComplete ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 "
                        >
                            Basel
                        </motion.span>
                    </motion.h1>

                    {/* الجملة التعريفية */}
                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={introComplete ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="text-[#dfd9ff] font-medium lg:text-[24px] sm:text-[20px] xs:text-[18px] text-[16px] mt-2 text-center sm:text-left"
                    >
                        Aspiring Data Scientist &nbsp;|&nbsp; Machine Learning Engineer
                    </motion.p>

                    {/* وسائل التواصل الاجتماعي */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={introComplete ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="flex justify-center gap-6 mt-10 w-full"
                    >
                        {/* WhatsApp */}
                        <motion.a
                            href="https://wa.me/201555319867"
                            target="_blank"
                            rel="noreferrer"
                            // شيلنا transition-all من هنا عشان Framer Motion ياخد راحته
                            className="w-12 h-12 p-[1.5px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-[#915EFF] hover:to-[#915EFF] cursor-pointer group"
                            whileHover={iconHoverAnimation}
                        >
                            {/* سرعنا تغيير اللون لـ duration-150 */}
                            <div className="w-full h-full rounded-full bg-[#050816] flex justify-center items-center text-white group-hover:bg-[#915EFF] transition-colors duration-150">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                            </div>
                        </motion.a>

                        {/* LinkedIn */}
                        <motion.a
                            href="https://www.linkedin.com/in/basel-elgendy-5a357a33b/"
                            target="_blank"
                            rel="noreferrer"
                            className="w-12 h-12 p-[1.5px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-[#915EFF] hover:to-[#915EFF] cursor-pointer group"
                            whileHover={iconHoverAnimation}
                        >
                            <div className="w-full h-full rounded-full bg-[#050816] flex justify-center items-center text-white group-hover:bg-[#915EFF] transition-colors duration-150">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </div>
                        </motion.a>

                        {/* GitHub */}
                        <motion.a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            className="w-12 h-12 p-[1.5px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-[#915EFF] hover:to-[#915EFF] cursor-pointer group"
                            whileHover={iconHoverAnimation}
                        >
                            <div className="w-full h-full rounded-full bg-[#050816] flex justify-center items-center text-white group-hover:bg-[#915EFF] transition-colors duration-150">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            </div>
                        </motion.a>

                        {/* Email */}
                        <motion.a
                            href="mailto:@gmail.com"
                            className="w-12 h-12 p-[1.5px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-[#915EFF] hover:to-[#915EFF] cursor-pointer group"
                            whileHover={iconHoverAnimation}
                        >
                            <div className="w-full h-full rounded-full bg-[#050816] flex justify-center items-center text-white group-hover:bg-[#915EFF] transition-colors duration-150">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                            </div>
                        </motion.a>
                    </motion.div>
                </div>
            </motion.div>

            {/* الجزء الخاص بصورتك الشخصية */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={introComplete && imageLoaded ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute top-[160px] lg:top-[180px] right-5 md:right-10 lg:right-52 z-20 hidden sm:block"
            >
                <motion.div
                    animate={{
                        boxShadow: [
                            "0px 0px 20px rgba(145, 94, 255, 0.2)",
                            "0px 0px 60px rgba(145, 94, 255, 0.8)",
                            "0px 0px 20px rgba(145, 94, 255, 0.2)",
                        ],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
                    className="rounded-full p-1 bg-gradient-to-r from-purple-500 to-cyan-500"
                >
                    <div className="w-[200px] h-[200px] lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden relative border-4 border-[#050816]">
                        <Image
                            src={heroImg}
                            alt="Profile"
                            fill
                            className="object-cover object-top"
                            onLoad={() => setImageLoaded(true)}
                        />
                    </div>
                </motion.div>
            </motion.div>

        </section>
    );
});

export default Hero;