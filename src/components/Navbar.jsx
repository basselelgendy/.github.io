"use client";
import React, { memo, useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaCog, FaBriefcase, FaPaperPlane } from "react-icons/fa";

import { remainingLetters } from "../constants/constants"; // تأكد من مسار الاستيراد لو متغير عندك
import { styles } from "../styles"; // تأكد من مسار الاستيراد لو متغير عندك
import { menu, close } from "../assets"; // تأكد من مسار الاستيراد لو متغير عندك
import Image from "next/image";

const Navbar = memo(function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");

  const navLinks = useMemo(() => [
    { id: "home", title: "HOME", icon: FaHome },
    { id: "about", title: "ABOUT", icon: FaUser },
    { id: "skills", title: "SKILLS", icon: FaCog },
    { id: "projects", title: "PROJECTS", icon: FaBriefcase },
    { id: "contact", title: "CONTACT", icon: FaPaperPlane },
  ], []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          setScrolled(scrollTop > 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  const glowVariants = {
    inactive: {
      scale: 1,
      boxShadow: "0px 0px 0px rgba(145, 94, 255, 0)",
      color: "#aaa6c3",
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    active: {
      scale: 1.05,
      boxShadow: "0px 0px 22px 8px rgba(145, 94, 255, 0.7)",
      color: "#FFFFFF",
      textDecoration: "none",
      transition: { type: "spring", stiffness: 400, damping: 15 }
    },
    hoverInactive: {
      scale: 1.1,
      boxShadow: "0px 0px 22px 8px rgba(56, 189, 248, 0.7)",
      color: "#FFFFFF",
      transition: { type: "spring", stiffness: 400, damping: 15 }
    }
  };

  return (
      <nav
          className={`${
              styles.paddingX
          } w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300 ${
              scrolled
                  ? " bg-primary rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 "
                  : "bg-transparent"
          }`}
      >
        <div className="w-full flex justify-start items-center max-w-7xl mx-auto">
          <Link
              href="/"
              className="flex items-center"
              onClick={() => {setActiveId(""); window.scrollTo(0, 0);}}
          >
            <p className="text-white text-[29px] font-bold cursor-pointer flex items-center tracking-wide">
              <span className="text-[#915EFF] text-[38px] font-black mr-[1px]">B</span>
              {remainingLetters}
            </p>
          </Link>

          <ul className="list-none hidden sm:flex flex-row flex-1 justify-center items-center gap-14 ml-10">
            {navLinks.map((nav) => (
                <li key={nav.id} className="p-1 rounded-full">
                  <ScrollLink
                      to={nav.id}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className="cursor-pointer group flex flex-row items-center gap-2 rounded-full transition-colors duration-300"
                      // التعديل هنا: خلينا onSetActive بس وشيلنا onSetInactive تماماً
                      onSetActive={() => setActiveId(nav.id)}
                  >
                    <motion.div
                        custom={activeId === nav.id}
                        variants={glowVariants}
                        animate={activeId === nav.id ? "active" : "inactive"}
                        whileHover={activeId === nav.id ? "active" : "hoverInactive"}
                        className="flex flex-row items-center gap-2.5 px-4 py-1.5 rounded-full transition-colors duration-300"
                    >
                      <motion.div className="transition-colors duration-300 group-hover:!text-white flex justify-center items-center">
                        <nav.icon className={`w-5 h-5`} />
                      </motion.div>

                      <motion.span className={`text-[16px] font-medium transition-colors duration-300 group-hover:!text-white`}>
                        {nav.title}
                      </motion.span>
                    </motion.div>
                  </ScrollLink>
                </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center relative">
            <Image
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain cursor-pointer z-20"
                onClick={handleToggle}
            />

            <div
                className={`${
                    !toggle ? "hidden" : "flex"
                } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl transition-all duration-300`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map((nav) => (
                    <li
                        key={nav.id}
                        className="font-poppins font-medium cursor-pointer text-[16px]"
                    >
                      <ScrollLink
                          to={nav.id}
                          spy={true}
                          smooth={true}
                          offset={-80}
                          duration={500}
                          className="flex flex-row items-center gap-2"
                          // التعديل هنا برضه: للموبايل شيلنا onSetInactive
                          onSetActive={() => setActiveId(nav.id)}
                          onClick={() => setToggle(false)}
                      >
                        <motion.div
                            variants={glowVariants}
                            animate={activeId === nav.id ? "active" : "inactive"}
                            whileHover={activeId === nav.id ? "active" : "hoverInactive"}
                            className="flex flex-row items-center gap-2 px-3 py-1.5 rounded-full transition-colors duration-300"
                        >
                          <nav.icon className={`w-4 h-4`} />
                          <span>{nav.title}</span>
                        </motion.div>
                      </ScrollLink>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
});

export default Navbar;