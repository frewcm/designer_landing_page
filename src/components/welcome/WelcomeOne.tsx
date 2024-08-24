"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function WelcomeOne() {
  const img = useRef(null);
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const par1 = useRef(null);
  const par2 = useRef(null);
  const par3 = useRef(null);

  useGSAP(() => {
    gsap.from(img.current, {
      x: -100,
      scale: 0.7,
      opacity: 0,
      duration: 6,
      ease: "elastic.out",
    });
    gsap.from(img1.current, {
      x: 100,
      scale: 0.7,
      opacity: 0,
      duration: 4,
      ease: "elastic.out",
    });
    gsap.from(par1.current, {
      x: -100,
      scale: 0.7,
      opacity: 0,
      duration: 4,
      ease: "elastic.out",
    });
    gsap.from(img2.current, {
      y: 100,
      scale: 0.7,
      opacity: 0,
      ease: "elastic.out",
      duration: 4,
    });
    gsap.from(par2.current, {
      y: 100,
      scale: 0.7,
      opacity: 0,
      ease: "elastic.out",
      duration: 4,
    });
    gsap.from(img3.current, {
      x: 100,
      scale: 0.7,
      opacity: 0,
      duration: 4,
      ease: "elastic.out",
    });
    gsap.from(par3.current, {
      x: -100,
      scale: 0.7,
      opacity: 0,
      duration: 4,
      ease: "elastic.out",
    });
  }, []);
  return (
    <section className="relative w-full h-dvh overflow-hidden">
      <img
        ref={img}
        className="absolute bottom-0 right-0 opacity-20 z-[-1] w-[500px]"
        src="wave.png"
        alt=""
      />
      <div className="h-full flex flex-col items-center justify-center">
        <div className="flex items-center gap-4">
          <img
            ref={img1}
            className=" h-16 w-32 lg:h-20 lg:w-40 object-cover rounded-full"
            src="lion.jpg"
            alt=""
          />
          <p
            ref={par1}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white"
          >
            TRANSFORM
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p
            ref={par2}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white"
          >
            TRANSFORM
          </p>
          <img
            ref={img2}
            className=" h-16 w-44 lg:h-20 lg:w-56 object-cover rounded-full"
            src="lion.jpg"
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <img
            ref={img3}
            className=" h-16 w-32 lg:h-20 lg:w-40 object-cover rounded-full"
            src="lion.jpg"
            alt=""
          />
          <p ref={par3} className="text-4xl md:text-6xl lg:text-7xl font-bold ">
            TRANS <span className="text-orange-500">FORM</span>
          </p>
        </div>
      </div>
    </section>
  );
}
