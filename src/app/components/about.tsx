import Image from "next/image";
import React from "react";
import Logo from "../../../public/assets/pic.png";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";

const About = () => {
  return (
    <div id="about">
      <div className="w-full h-[4px] bg-[#cb6ce6]"></div>
      <section className="text-gray-300 body-font bg-gray-900">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          {/* Profile Image */}
          <Image
            className="lg:w-1/4 md:w-2/5 w-3/5 mb-10 object-cover object-center rounded-xl border-purple-600 border-4"
            alt="Profile Picture"
            src={Logo}
          />
          <div className="text-center lg:w-2/3 w-full">
            {/* Heading */}
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#cb6ce6]">
              Future AI and Fintech Developer
            </h1>
            {/* Description */}
            <p className="mb-8 leading-relaxed text-base sm:text-lg">
              Passionate about innovation and technology, I aim to merge AI and
              fintech to create solutions that redefine possibilities. With a
              vision to transform industries, I explore the intersection of
              technology and finance, pushing boundaries to achieve greatness.
            </p>
            {/* Buttons */}
            <div className="flex justify-center flex-wrap gap-4">
              <Link href={"#contact"}>
                <button className="inline-flex items-center text-white bg-[#cb6ce6] border-0 py-2 px-6 focus:outline-none hover:bg-purple-900 rounded-lg text-lg transition">
                  Contact
                </button>
              </Link>
              <Link
                target="_blank"
                href={
                  "https://www.linkedin.com/in/danish-shahid-abbasi-6952a42b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                }
              >
                <button className="inline-flex items-center text-white bg-[#cb6ce6] border-0 py-2 px-6 focus:outline-none hover:bg-purple-900 rounded-lg text-lg transition">
                  View LinkedIn
                  <FaLinkedin className="text-2xl ml-2 hover:text-[#0077B5]" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
