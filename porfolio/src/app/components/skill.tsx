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
              Proficient in modern programming languages and frameworks, with a
              strong focus on building innovative, efficient solutions.
              Continuously enhancing my skills to stay ahead in the
              fast-evolving tech landscape.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Skill Cards */}
            {[
              { icon: <RiNextjsFill />, label: "Next JS", percentage: 50 },
              { icon: <FaHtml5 />, label: "HTML5", percentage: 100 },
              { icon: <RiTailwindCssFill />, label: "Tailwind CSS", percentage: 95 },
              { icon: <SiTypescript />, label: "Typescript", percentage: 80 },
              { icon: <FaPython />, label: "Python", percentage: 40 },
              { icon: <IoLogoFigma />, label: "Figma", percentage: 70 }
            ].map((skill, index) => (
              <div key={index} className="xl:w-1/3 w-full md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-700 text-[#cb6ce6] mb-4">
                    {skill.icon}
                  </div>
                  <h2 className="text-lg text-gray-300 font-medium title-font mb-2">
                    {skill.label}
                  </h2>
                  <div className="leading-relaxed text-base">
                    <div className="flex-grow">
                      <div className="relative h-1 w-full bg-gray-200 rounded">
                        <div
                          className="absolute bg-[#cb6ce6] h-1"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                      <p className="font-bold text-[#cb6ce6] text-right">
                        {skill.percentage}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
