"use client";

import { motion } from "framer-motion";
import { teamList } from "@/data/data";
import Member from "./Member";

export default function WelcomThree() {
  return (
    <section className="py-10 w-full min-h-screen overflow-hidden">
      <div className="w-11/12 md:w-10/12 mx-auto flex flex-col items-start">
        <p className="text-3xl font-bold text-white my-12">
          Meet the Team Behind
          <span className="text-orange-500 ml-2">Our Company</span>
        </p>
        <div className="members-container responsive-grid w-full">
          {teamList?.map((person, index) => (
            <motion.div
              initial={{ opacity: 0, x: -10, y: -10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.5 }}
              key={person.id}
            >
              <Member {...person} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
