"use client"
import React from "react";
import Logo from "../../../public/assets/Danish.__2_-removebg-preview(1)(1).png";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-300 body-font bg-gray-800">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src={Logo} alt="Logo" width={200} height={100} />
            {/* <span className="ml-3 text-xl">Tailblocks</span> */}
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Danish-Abbasi —
            <a
              href="https://twitter.com/knyttneve"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @danishtech.
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link 
            target="_blank"
            href={"https://www.facebook.com/nawabkhan.abbasi.5?mibextid=ZbWKwL"} className="text-gray-500">
            <FaFacebook className="text-2xl hover:text-[#1877F2]" />

            </Link>
            <Link 
            target="_blank"
            href={"https://www.facebook.com/nawabkhan.abbasi.5?mibextid=ZbWKwL"} className="text-gray-500">
            < IoLogoWhatsapp  className="text-2xl hover:text-[#075E54] ml-2" />

            </Link>
            <Link 
            target="_blank"
            href={"https://www.linkedin.com/in/danish-shahid-abbasi-6952a42b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} className="text-gray-500">
            <FaLinkedin className="text-2xl hover:text-[#0077B5] ml-2" />

            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
