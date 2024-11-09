"use client"
import Image from "next/image";
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
        <div className="w-auto h-[4px] bg-[#cb6ce6] "></div>

      <section className="text-gray-300 body-font bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-[#cb6ce6]">
              MY SKILLS
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-300">
            "Proficient in modern programming languages and frameworks, with a strong focus on building innovative, efficient solutions. Continuously enhancing my skills to stay ahead in the fast-evolving tech landscape."
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 w-[100%] md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-700 text-[#cb6ce6] mb-4">
                <RiNextjsFill className="bg-cover text-5xl font-bold" />
                </div>
                <h2 className="text-lg text-gray-300 font-medium title-font mb-2">
                  Next JS
                </h2>
                <p className="leading-relaxed text-base">
                  <div className="flex-grow">
                    <div className=" relative h-1 w-full bg-gray-200 rounded">
                        <div className="absolute bg-[#cb6ce6] h-1 w-[50%] "></div>
                    </div>
                    <p className="font-bold text-[#cb6ce6] text-right">50%</p>

                  </div>
                </p>
              </div>
            </div>
            <div className="xl:w-1/3  w-[100%] md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-700 text-[#cb6ce6] mb-4">
                <FaHtml5 className="bg-cover text-3xl font-bold" />
                </div>
                <h2 className="text-lg text-gray-300 font-medium title-font mb-2">
                  HTML5
                </h2>
                <p className="leading-relaxed text-base">
                  <div className="flex-grow">
                    <div className=" relative h-1 w-full bg-gray-200 rounded">
                        <div className="absolute bg-[#cb6ce6] h-1 w-[100%] "></div>
                    </div>
                    <p className="font-bold text-[#cb6ce6] text-right">100%</p>

                  </div>
                </p>
              </div>
            </div>
            <div className="xl:w-1/3  w-[100%] md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-700 text-[#cb6ce6] mb-4">
                <RiTailwindCssFill className="bg-cover text-3xl font-bold" />
                </div>
                <h2 className="text-lg text-gray-300 font-medium title-font mb-2">
                  Tailwind CSS
                </h2>
                <p className="leading-relaxed text-base">
                  <div className="flex-grow">
                    <div className=" relative h-1 w-full bg-gray-200 rounded">
                        <div className="absolute bg-[#cb6ce6] h-1 w-[95%] "></div>
                    </div>
                    <p className="font-bold text-[#cb6ce6] text-right">95%</p>

                  </div>
                </p>
              </div>
            </div>
            <div className="xl:w-1/3  w-[100%] md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-700 text-[#cb6ce6] mb-4">
                <SiTypescript className="bg-cover text-2xl font-bold" />
                </div>
                <h2 className="text-lg text-gray-300 font-medium title-font mb-2">
                  Typescript
                </h2>
                <p className="leading-relaxed text-base">
                  <div className="flex-grow">
                    <div className=" relative h-1 w-full bg-gray-200 rounded">
                        <div className="absolute bg-[#cb6ce6] h-1 w-[80%] "></div>
                    </div>
                    <p className="font-bold text-[#cb6ce6] text-right">80%</p>

                  </div>
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 w-[100%]  md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-700 text-[#cb6ce6] mb-4">
                <FaPython className="bg-cover text-2xl font-bold" />
                </div>
                <h2 className="text-lg text-gray-300 font-medium title-font mb-2">
                  Python
                </h2>
                <p className="leading-relaxed text-base">
                  <div className="flex-grow">
                    <div className=" relative h-1 w-full bg-gray-200 rounded">
                        <div className="absolute bg-[#cb6ce6] h-1 w-[40%] "></div>
                    </div>
                    <p className="font-bold text-[#cb6ce6] text-right">40%</p>

                  </div>
                </p>
              </div>
            </div>
            <div className="xl:w-1/3  w-[100%] md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-700 text-[#cb6ce6] mb-4">
                <IoLogoFigma className="bg-cover text-2xl font-bold" />
                </div>
                <h2 className="text-lg text-gray-300 font-medium title-font mb-2">
                  Figma
                </h2>
                <p className="leading-relaxed text-base">
                  <div className="flex-grow">
                    <div className=" relative h-1 w-full bg-gray-200 rounded">
                        <div className="absolute bg-[#cb6ce6] h-1 w-[70%] "></div>
                    </div>
                    <p className="font-bold text-[#cb6ce6] text-right">70%</p>

                  </div>
                </p>
              </div>
            </div>
          </div>
          <Link href={"#contact"}>
          <button className="flex mx-auto mt-16 text-white bg-[#cb6ce6] border-0 py-2 px-8 focus:outline-none hover:bg-purple-900 rounded text-lg">
            Hire me!
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Skill;
