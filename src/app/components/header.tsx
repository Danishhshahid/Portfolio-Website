"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../../public/assets/Danish.__2_-removebg-preview(1)(1).png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="z-50 sticky top-0 w-full">
      <header className="text-gray-600 body-font bg-gray-800 shadow-md w-full">
        <div className="container mx-auto flex flex-wrap p-4 sm:p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-300 mb-4 md:mb-0">
            <Image src={Logo} alt="Logo" width={100} height={70} />
          </a>
          <button
            onClick={toggleMenu}
            className="inline-flex w-full items-center md:hidden text-gray-300 ml-auto focus:outline-none hover:text-[#cb6ce6]"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <nav
            className={`md:ml-auto md:flex flex-wrap items-center text-lg justify-center text-gray-300 ${
              isMenuOpen ? "block" : "hidden"
            } md:block`}
          >
            <Link href="/" className="mr-5 hover:text-[#cb6ce6]">
              Home
            </Link>
            <Link href="#about" className="mr-5 hover:text-[#cb6ce6]">
              About
            </Link>
            <Link href="#skills" className="mr-5 hover:text-[#cb6ce6]">
              Skills
            </Link>
            <Link href="#project" className="mr-5 hover:text-[#cb6ce6]">
              Projects
            </Link>
            <Link href="#contact" className="mr-5 hover:text-[#cb6ce6]">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <div className="w-full h-[4px] bg-[#cb6ce6]"></div>
    </div>
  );
};

export default Header;
