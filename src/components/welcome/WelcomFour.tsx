"use client";

import { whatWeDoList } from "@/data/data";
import WhatWeDo from "./WhatWeDo";
import { motion } from "framer-motion";

export default function WelcomeFour() {
  return (
    <section className="w-full flex flex-col min-h-[200vh]">
      <div className="w-11/12 md:w-10/12 mx-auto flex flex-col p-4 bg-white/10 rounded-3xl">
        <div className="my-14 w-full">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl lg:text-6xl text-white font-bold text-start"
          >
            What We Do Here.
          </motion.p>
        </div>
        <div className="main-container w-full  text-white  md:gap-24">
          <div className="w-full ">
            {whatWeDoList.map((what, index) => {
              const recorder = index === 1 || index === 3;
              return <WhatWeDo key={index} {...what} reorder={recorder} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
