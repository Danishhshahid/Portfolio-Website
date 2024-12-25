"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/assets/Danish.__2_-removebg-preview(1)(1).png";

const Header = () => {
  // Define the rendered output
  const renderedOutput = (
    <div className="z-50 sticky top-0">
      <header className="text-gray-600 body-font bg-gray-800">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-300 mb-4 md:mb-0">
            <Image src={Logo} alt="Logo" width={100} height={70} />
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-lg justify-center text-gray-300">
            <Link href={"/"} className="mr-5 hover:text-[#cb6ce6]">Home</Link>
            <Link href={"#about"} className="mr-5 hover:text-[#cb6ce6]">About</Link>
            <Link href={"#skills"} className="mr-5 hover:text-[#cb6ce6]">Skills</Link>
            <Link href={"#project"} className="mr-5 hover:text-[#cb6ce6]">Projects</Link>
            <Link href={"#contact"} className="mr-5 hover:text-[#cb6ce6]">Contact</Link>
          </nav>
        </div>
      </header>
      <div className="w-auto h-[4px] bg-[#cb6ce6] "></div>
    </div>
  );

  // Log the rendered output to the console
  console.log("Rendered Output:", renderedOutput);

  // Return the rendered output
  return renderedOutput;
};

export default Header;