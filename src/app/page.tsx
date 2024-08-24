"use client";
import { useEffect } from "react";
import WelcomeFive from "@/components/welcome/WelcomeFive";
import WelcomeOne from "@/components/welcome/WelcomeOne";
import WelcomThree from "@/components/welcome/WelcomeThree";
import WelcomeTwo from "@/components/welcome/WelcomeTwo";
import WelcomeFour from "@/components/welcome/WelcomFour";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className="overflow-hidden">
      <WelcomeOne />
      <WelcomeTwo />
      <WelcomThree />
      <WelcomeFour />
      <WelcomeFive />
    </main>
  );
}
