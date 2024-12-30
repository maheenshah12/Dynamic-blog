"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi"; // Import the hamburger menu icon
import vector from "@/app/assets/Vector.png"; // Assuming this is your close icon image

const Header = () => {
  // For Hamburger Menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-pink-950 text-red-50">
        {/* Navbar Section */}
        <div className="flex items-center justify-between px-4 lg:px-12 py-6">
          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden flex items-center">
            {/* Using the GiHamburgerMenu icon directly instead of Image */}
            <GiHamburgerMenu
              className="w-6 h-6 cursor-pointer text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>

          {/* Logo */}
          <div className="font-extrabold text-2xl lg:text-[32px] mb-2 mr-3 lg:mr-10 flex-grow text-center lg:text-left">
            <Link href={"/"}>Blogi.com</Link>
          </div>

          {/* Navigation Links for larger screens */}
          <ul className="mr-[600px] hidden lg:flex gap-6 items-center font-normal text-[16px] justify-center flex-grow">
            <li>
              <Link
                href={"/blog1"}
                className="flex items-center gap-2 hover:text-pink-300 transition duration-400"
              >
                Read Blogs
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="hover:text-pink-300 transition duration-900"
              >
                Create Blogs
              </Link>
            </li>
    </ul>


          <Link href={"/"} className="hidden lg:flex gap-6 items-center font-normal text-[16px] justify-center flex-grow">
                <button className="bg-pink-800 p-2 rounded hover:bg-pink-700">
                  Create Account
                </button>
              </Link>
        </div>

        {/* Hamburger Menu Content */}
        <div
          className={`fixed top-0 left-0 h-full w-1/2 bg-pink-950 shadow-lg transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-black text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            <Image src={vector} alt="Close Icon" className="text-black" />
          </button>

          {/* Center Heading */}
          <div className="flex justify-center items-center h-[80px] border-b-2">
            <h2 className="text-white font-bold font-font text-xl lg:text-[32px] mb-2">
              Blogi.com
            </h2>
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col items-center py-10 space-y-6 font-medium text-black">
            <li>
              <Link
                href={"/blog1"}
                className="hover:underline text-white hover:text-pink-300 transition duration-200"
              >
                Read Blogs
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="hover:underline text-white cursor-progress hover:text-pink-300 transition duration-200"
              >
                Create Blogs
              </Link>
            </li>

            {/* Create Account Button in Hamburger Menu */}
            <li>
              <Link href={"/"}>
                <button className="bg-pink-800 p-2 rounded hover:bg-pink-700">
                  Create Account
                </button>
              </Link>
            </li>
          </ul>
          
        </div>
      </div>
    </>
  );
};

export default Header;

