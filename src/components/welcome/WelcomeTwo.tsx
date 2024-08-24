"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WelcomeTwo() {
  const box = useRef(null);
  const titleContainer = useRef(null);
  const ourStory = useRef(null);
  const storyDesc = useRef(null);
  const aboutImage = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: box.current,
        start: "-500 top",
        end: "top+=100",
        scrub: true,
      },
    });
    tl.from(titleContainer.current, {
      y: 100,
      scale: 0.5,
      ease: "power1",
      duration: 1,
      opacity: 0,
    })
      .from(
        ourStory.current,
        {
          x: -300,
          ease: "power1",
          duration: 1,
          opacity: 0,
        },
        0
      )
      .from(
        storyDesc.current,
        {
          x: -300,
          ease: "power1",
          duration: 1,
          opacity: 0,
        },
        0
      )
      .from(
        aboutImage.current,
        {
          x: 300,
          ease: "power1",
          duration: 1,
          opacity: 0,
        },
        0
      );
  }, []);
  return (
    <section ref={box} className="md:py-28 w-10/12 mx-auto min-h-screen">
      <div className="w-full flex flex-col items-center gap-12">
        <div ref={titleContainer} className="flex items-center gap-6">
          <div className="about-blob w-28 md:w-44 h-14 md:h-20 bg-orange-500"></div>
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            About Us
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-center gap-4">
            <p ref={ourStory} className="text-white text-3xl md:text-4xl">
              Our Story
            </p>
            <p
              ref={storyDesc}
              className="w-10/12 text-lg text-white text-center md:text-start"
            >
              Breeze, lantern, velvet, meadow, ember, mosaic, quill, sapphire,
              drift, whistle, harmony, echo, pebble, wisp, canvas, twilight,
              glimmer, nimbus, serene, aurora, wander, grove, ripple, crescent,
              frost, dusk, meadowlark, whisper, glisten, fern, zephyr, lush,
              ember, cascade, glade, radiance, solace, timber, horizon, seraph.
            </p>
          </div>

          <div ref={aboutImage} className="w-full mt-14 md:mt-8">
            <img
              className="about-lion w-full mx-auto object-cover"
              src="lion.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
