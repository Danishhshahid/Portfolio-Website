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
      <section className="text-gray-300 body-font bg-gray-900 py-24">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-300">
              MY PROJECTS
            </h1>
            <p className="lg:w-2/3 mx-auto text-base leading-relaxed">
              Dedicated to revolutionizing finance and technology through AI and
              blockchain. Join me on this journey to build innovative solutions!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="relative group">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center border-4 border-purple-900 rounded-2xl transition-transform transform group-hover:scale-105"
                src={Logo}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-900 bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                <h2 className="tracking-widest text-sm title-font font-medium text-[#cb6ce6] mb-1">
                  Made with Next.js
                </h2>
                <h1 className="title-font text-lg font-medium text-[#cb6ce6] mb-3">
                  Simple Countdown Timer
                </h1>
                <p className="leading-relaxed">
                  Countdown Timer built with Next.js, offering a sleek and
                  responsive design for seamless time tracking.
                </p>
                <Link href={""}>
                  <button className="inline-flex text-white bg-[#cb6ce6] border-0 py-2 px-6 focus:outline-none hover:bg-purple-900 rounded-lg text-lg mt-4">
                    View Project
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative group">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center border-4 border-purple-900 rounded-2xl transition-transform transform group-hover:scale-105"
                src={Logo2}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-700 bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  Made with Next.js
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Weather Widget App
                </h1>
                <p className="leading-relaxed">
                  Weather Widget App built with Next.js, providing real-time,
                  accurate forecasts with an intuitive and user-friendly
                  interface.
                </p>
                <Link href={""}>
                  <button className="inline-flex text-white bg-[#cb6ce6] border-0 py-2 px-6 focus:outline-none hover:bg-purple-900 rounded-lg text-lg mt-4">
                    View Project
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative group">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center border-4 border-purple-900 rounded-2xl transition-transform transform group-hover:scale-105"
                src={Logo3}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-700 bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  Made with Next.js
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  The Resume Builder App
                </h1>
                <p className="leading-relaxed">
                  Resume Builder App designed with Next.js, enabling users to
                  create professional, customizable resumes effortlessly.
                </p>
                <Link href={""}>
                  <button className="inline-flex text-white bg-[#cb6ce6] border-0 py-2 px-6 focus:outline-none hover:bg-purple-900 rounded-lg text-lg mt-4">
                    View Project
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative group">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center border-4 border-purple-900 rounded-2xl transition-transform transform group-hover:scale-105"
                src={Logo4}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-700 bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  Made with TypeScript
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  CLI Adventure Game
                </h1>
                <p className="leading-relaxed">
                  CLI Adventure Game created with Next.js, offering an
                  immersive text-based experience full of challenges and fun!
                </p>
                <Link href={""}>
                  <button className="inline-flex text-white bg-[#cb6ce6] border-0 py-2 px-6 focus:outline-none hover:bg-purple-900 rounded-lg text-lg mt-4">
                    View Project
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative group">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center border-4 border-purple-900 rounded-2xl transition-transform transform group-hover:scale-105"
                src={Logo5}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-700 bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  Made with TypeScript
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  CLI Simple Calculator
                </h1>
                <p className="leading-relaxed">
                  CLI Simple Calculator built with Next.js, offering a
                  straightforward and efficient way to perform basic
                  calculations.
                </p>
                <Link href={""}>
                  <button className="inline-flex text-white bg-[#cb6ce6] border-0 py-2 px-6 focus:outline-none hover:bg-purple-900 rounded-lg text-lg mt-4">
                    View Project
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative group">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center border-4 border-purple-900 rounded-2xl transition-transform transform group-hover:scale-105"
                src={Logo6}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 group-hover:opacity-100 transition-opacity">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  Made with TypeScript
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  CLI To-Do List
                </h1>
                <p className="leading-relaxed">
                  CLI To-Do List app built with Next.js, providing a simple
                  and effective way to manage tasks from the command line.
                </p>
                <Link href={""}>
                  <button className="inline-flex text-white bg-[#cb6ce6] border-0 py-2 px-6 focus:outline-none hover:bg-purple-900 rounded-lg text-lg mt-4">
                    View Project
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
