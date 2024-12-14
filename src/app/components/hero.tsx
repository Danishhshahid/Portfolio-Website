"use client";
import Image from "next/image";
import React from "react";
import Logo from "../../../public/assets/pic.png";
import { Typewriter } from "react-simple-typewriter";
import { IoIosCloudDownload } from "react-icons/io";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-fixed bg-cover bg-center bg-slate-900">
      <div className="container mx-auto flex px-5 py-16 md:py-24 md:flex-row flex-col items-center">
        {/* Text Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-white leading-snug">
            It&#39;s Danish Abbasi <br />
            <br className="hidden lg:inline-block" />
            <span>
              <Typewriter
                words={[
                  "Fintech Enthusiast",
                  "Future AI Engineer",
                  "Frontend Developer",
                  "GIAIC Student",
                  "Agentic AI Visionary",
                ]}
                loop
                cursor
                cursorColor="#cb6ce6"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>

          <div className="w-full h-[2px] bg-[#cb6ce6] mb-6"></div>
          <p className="mb-8 leading-relaxed text-gray-300 text-base md:text-lg lg:w-[90%]">
            I&#39;m passionate about the intersection of finance, technology, and
            innovation. My goal is to dive deeply into AI and blockchain,
            exploring new frontiers in these fields. I aim to create an AI
            agent that embodies cutting-edge advancements, pushing the
            boundaries of what&#39;s possible in intelligent technology.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4">
            <Link href="#contact">
              <button className="inline-flex items-center justify-center text-white bg-[#cb6ce6] border-0 py-3 px-8 focus:outline-none hover:bg-purple-900 rounded-lg text-base transition">
                Contact
              </button>
            </Link>
            <Link href="#"><button className="inline-flex items-center justify-center text-white bg-[#cb6ce6] border-0 py-3 px-8 focus:outline-none hover:bg-purple-900 rounded-lg text-base transition">Download Resume <IoIosCloudDownload className="text-xl ml-2" /></button></Link>

          </div>
        </div>

        {/* Image Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
          <Image
            className="object-cover object-center rounded-3xl border-4 border-purple-700 shadow-lg mx-auto"
            alt="Hero"
            width={700}
            height={500}
            src={Logo}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
