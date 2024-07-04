"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import ProjectData from "./Projects";

const PortfolioPage = () => {
  return (
    <>
      <div
        className=" relative"
        // ref={ref}
      >
        <div className="w-screen h-[calc(50vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
      </div>
      <div>
        <div className="pt-0 mt-0 bg-gradient-to-tr text-grey-800">
          <ProjectData />
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
