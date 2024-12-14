// import Image from "next/image";
import React from "react";
import { RiNextjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import Link from "next/link";

const Skill = () => {
  return (
    <div id="skills">
      <div className="w-auto h-[4px] bg-[#cb6ce6]"></div>

      <section className="text-gray-300 body-font bg-gray-900">
        <div className="container mx-auto px-4 py-12 sm:py-24">
          {/* Section Header */}
          <div className="flex flex-wrap w-full mb-12 sm:mb-20 flex-col items-center text-center">
            <h1 className="text-2xl sm:text-3xl font-medium title-font mb-4 text-[#cb6ce6]">
              MY SKILLS
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-sm sm:text-base text-gray-300">
              Proficient in modern programming languages and frameworks, with a
              strong focus on building innovative, efficient solutions.
              Continuously enhancing my skills to stay ahead in the
              fast-evolving tech landscape.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              { Icon: RiNextjsFill, skill: "Next JS", level: 50 },
              { Icon: FaHtml5, skill: "HTML5", level: 100 },
              { Icon: RiTailwindCssFill, skill: "Tailwind CSS", level: 95 },
              { Icon: SiTypescript, skill: "TypeScript", level: 80 },
              { Icon: FaPython, skill: "Python", level: 40 },
              { Icon: IoLogoFigma, skill: "Figma", level: 70 },
            ].map(({ Icon, skill, level }, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center border border-gray-700 p-6 rounded-lg bg-gray-800 shadow-lg"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 text-[#cb6ce6] mb-4">
                  <Icon className="text-4xl font-bold" />
                </div>
                <h2 className="text-lg sm:text-xl text-gray-300 font-medium mb-2">
                  {skill}
                </h2>
                <div className="w-full">
                  <div className="relative h-1 bg-gray-200 rounded">
                    <div
                      className="absolute bg-[#cb6ce6] h-1 rounded"
                      style={{ width: `${level}%` }}
                    ></div>
                  </div>
                  <p className="font-bold text-[#cb6ce6] text-right mt-1">
                    {level}%
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Hire Me Button */}
          <div className="flex justify-center mt-12 sm:mt-16">
            <Link href="#contact">
              <button className="w-full sm:w-auto text-white bg-[#cb6ce6] border-0 py-2 px-6 sm:px-8 focus:outline-none hover:bg-purple-900 rounded text-lg">
                Hire me!
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
