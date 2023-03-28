import Image from "next/image";
import { Raleway } from "next/font/google";
import { HomeContent } from "./sections/home";
import { useState } from "react";
import { AboutSection } from "./sections/about";
const raleway = Raleway({
  variable: "--raleway",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={"bg-white " + raleway.variable}>
      <div className="w-full flex flex-col">
        <section className="relative px-flex flex-col h-full md:h-screen py-4  from-white via-white to-yellow-200 bg-gradient-to-r">
          <Image
            fill
            src={"/fruits-1.png"}
            className="absolute left-10 hidden md:block"
            alt="fruits"
            style={{ left: "45%", zIndex: 10, opacity: 0.85 }}
          />
          {/* Nav Bar */}
          <div className="px-4 md:px-24 flex items-center justify-start gap-4 md:gap-48">
            <div className="relative w-36 h-36">
              <Image
                src={"/logo.svg"}
                className="w-full h-full"
                fill
                alt={"Weight To Go Logo"}
              />
            </div>
            <li className="h-full  flex-row items-center gap-16 hidden md:flex">
              <a className="z-40 w-auto md:w-16 cursor-pointer font-medium hover:font-semibold hover:text-goldenrod transition-all duration-75 ease-linear">
                Home
              </a>
              <a
                href="#about"
                className="z-40 w-auto md:w-16 cursor-pointer font-medium hover:font-semibold hover:text-goldenrod transition-all duration-75 ease-linear"
              >
                About
              </a>
              <a className="z-40 w-auto md:w-16  cursor-pointer font-medium hover:font-semibold hover:text-goldenrod transition-all duration-75 ease-linear">
                Contact
              </a>
            </li>
          </div>

          {/* Hero */}
          <HomeContent />
        </section>
        <AboutSection />
      </div>
    </main>
  );
}
