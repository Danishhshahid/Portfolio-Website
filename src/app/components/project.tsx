import Image from "next/image";
import React from "react";
import Logo from "../../../public/assets/p1.png";
import Logo2 from "../../../public/assets/p2.png";
import Logo3 from "../../../public/assets/p3.png";
import Logo4 from "../../../public/assets/p4.png";
import Logo5 from "../../../public/assets/p5.png";
import Logo6 from "../../../public/assets/p6.png";
import Link from "next/link";

const Project = () => {
  return (
    <div id="project">
      <div className="w-auto h-[4px] bg-[#cb6ce6] "></div>
      <section className="text-gray-300 body-font bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-300">
              MY PROJECTS
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Dedicated to revolutionizing finance and technology through AI and
              blockchain. Join me on this journey to build innovative solutions!
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {[Logo, Logo2, Logo3, Logo4, Logo5, Logo6].map((logo, index) => (
              <div className="lg:w-1/3 sm:w-1/2 p-4" key={index}>
                <div className="flex relative group">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center border-4 border-purple-900 rounded-2xl"
                    src={logo}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-900 bg-gray-700 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300">
                    <h2 className="tracking-widest text-sm title-font font-medium text-[#cb6ce6] mb-1">
                      {index === 0
                        ? "Made with Next.js"
                        : index === 1
                        ? "Made with TypeScript"
                        : "Made with Next.js"}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-[#cb6ce6] mb-3">
                      {index === 0
                        ? "Simple Countdown Timer"
                        : index === 1
                        ? "Weather Widget App"
                        : index === 2
                        ? "Resume Builder App"
                        : index === 3
                        ? "CLI Adventure Game"
                        : index === 4
                        ? "CLI Simple Calculator"
                        : "CLI Todo-list"}
                    </h1>
                    <p className="leading-relaxed">
                      {index === 0
                        ? "Countdown Timer built with Next.js, offering a sleek and responsive design for seamless time tracking."
                        : index === 1
                        ? "Weather Widget App providing real-time, accurate forecasts with an intuitive and user-friendly interface."
                        : index === 2
                        ? "Resume Builder App designed with Next.js, enabling users to create professional, customizable resumes effortlessly."
                        : index === 3
                        ? "CLI Adventure Game offering an immersive text-based experience full of challenges and fun!"
                        : index === 4
                        ? "CLI Simple Calculator offering a straightforward and efficient way to perform basic calculations."
                        : "CLI To-Do List app providing a simple and effective way to manage tasks from the command line."}
                    </p>
                    <Link href="#">
                      <button className="inline-flex text-white bg-[#cb6ce6] border-0 py-2 px-6 focus:outline-none hover:bg-purple-900 rounded-lg text-lg">
                        View Project
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
