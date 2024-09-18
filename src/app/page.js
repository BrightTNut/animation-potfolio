"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "@/components/typewriter";
import Link from "next/link";

const roles = ["Full Stack Developer", "Full Stack Blockchain developer"];

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.gif" alt="" fill className="object-contain " />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">Tejas Shiwankar</h1>
          <div className="flex items-center space-x-2">
            <span className="text-lg">I am a</span>
            <span className="text-lg font-bold text-blue-500">
              <Typewriter texts={roles} />
            </span>
          </div>
          {/* DESC */}
          <p className="md:text-xl">
            Hello! I'm Tejas Shiwankar,<br></br> a web developer with expertise
            in ReactJS and NextJS, creating dynamic and user-friendly
            applications. I have a strong understanding of blockchain
            technology, enabling me to develop decentralized applications and
            innovative solutions. I'm enthusiastic and energetic, always ready
            to tackle new challenges in the blockchain field. Let's connect and
            build something amazing together!
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              <Link href="https://drive.google.com/file/d/1drm9KIyYTWETNjUbOPWjEoPuHUEHiCd3/view?usp=sharing">
                Check Resume
              </Link>
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
