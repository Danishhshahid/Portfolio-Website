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
        <div className="container px-5 py-8 mx-auto flex flex-wrap items-center justify-between">
          {/* Logo Section */}
          <a className="flex title-font font-medium items-center md:justify-start justify-center">
            <Image src={Logo} alt="Logo" width={200} height={100} />
          </a>

          {/* Copyright Section */}
          <p className="text-sm text-gray-400 text-center sm:text-left mt-4 sm:mt-0">
            © 2024 Danish-Abbasi —
            <a
              href="https://twitter.com/knyttneve"
              className="text-gray-500 ml-1 hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              @danishtech
            </a>
          </p>

          {/* Social Media Links */}
          <span className="flex justify-center mt-4 sm:mt-0 sm:ml-auto">
            <Link
              target="_blank"
              href={
                "https://www.facebook.com/nawabkhan.abbasi.5?mibextid=ZbWKwL"
              }
              className="text-gray-500 hover:text-[#1877F2] mx-2"
              aria-label="Facebook"
            >
              <FaFacebook className="text-2xl" />
            </Link>
            <Link
              target="_blank"
              href={
                "https://www.facebook.com/nawabkhan.abbasi.5?mibextid=ZbWKwL"
              }
              className="text-gray-500 hover:text-[#075E54] mx-2"
              aria-label="WhatsApp"
            >
              <IoLogoWhatsapp className="text-2xl" />
            </Link>
            <Link
              target="_blank"
              href={
                "https://www.linkedin.com/in/danish-shahid-abbasi-6952a42b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
              className="text-gray-500 hover:text-[#0077B5] mx-2"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
