import Image from "next/image";
import React from "react";
import Logo from "../../../public/assets/pic.png";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";


const About = () => {
  return (
    <div id="about">
        
      <div className="w-auto h-[4px] bg-[#cb6ce6] "></div>
      <section className="text-gray-300 body-font bg-gray-900">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-xl border-purple-600 border-4"
            alt="hero"
            src={Logo}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#cb6ce6]">
              Future Ai And Fintech Developer
            </h1>
            <p className="mb-8 leading-relaxed">
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
            </p>
            <div className="flex justify-center">

              <Link href={"#contact"}>
              <button className="inline-flex text-white bg-[#cb6ce6] border-0 py-2 px-6 focus:outline-none hover:bg-purple-900 rounded text-lg">
                Contact
              </button>
              </Link>
              <Link
              target="_blank"
              href={"https://www.linkedin.com/in/danish-shahid-abbasi-6952a42b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
              <button className=" ml-6 inline-flex text-white bg-[#cb6ce6] border-0 py-2 px-6 focus:outline-none hover:bg-purple-900 rounded text-lg">
                View Linkedin
                <FaLinkedin className="text-2xl mt-1 hover:text-[#0077B5] ml-1" />
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
