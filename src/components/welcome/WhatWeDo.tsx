import { motion } from "framer-motion";
interface WhatWeDo {
  img: string;
  serviceTitle: string;
  serviceList: string[];
  reorder: boolean;
}

export default function WhatWeDo({
  img,
  serviceTitle,
  serviceList,
  reorder,
}: WhatWeDo) {
  return (
    <div className="mb-16 grid grid-cols-3 gap-8 place-items-center">
      <div
        className={`col-span-3 lg:col-span-2  w-full h-64 overflow-hidden ${
          reorder ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <motion.img
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="rounded-3xl w-full h-full object-cover"
          src={img}
          alt=""
        />
      </div>
      <div
        className={`col-span-3 lg:col-span-1 p-4 w-full flex flex-col items-start justify-start ${
          reorder ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <p className="text-xl font-bold mt-6 mb-4">{serviceTitle}</p>
        <div className="w-8/12 mb-2 md:mb-6 list-container">
          {serviceList.map((service, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="flex items-center gap-2 my-1"
              key={index}
            >
              <img className="w-6 " src="correct.png" alt="" />
              <div className="">
                <p className=" text-sm whitespace-nowrap">{service}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
