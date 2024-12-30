"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// import humburger from "@/app/assets/humburger.png";
// import vector from "@/app/assets/Vector.png";
import header from "@/app/assets/header.jpg";
import Header from "@/app/components/header";

const PostList = () => {
  // For Hamburger Menu
  // const [menuOpen, setMenuOpen] = useState(false);
  // For Smooth Animation
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text after 1 second
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
  
    <>
      <Header/>
      {/* <div className="bg-pink-950 text-red-50"> */}
        {/* Navbar Section */}
        {/* <div className="flex items-center px-3 lg:px-12 py-6"> */}
          {/* Hamburger Menu for Mobile */}
          {/* <div className="lg:hidden">
            <Image
              src={humburger}
              alt="Hamburger"
              className="w-6 h-6 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div> */}

          {/* Logo */}
          {/* <div className="font-extrabold text-2xl lg:text-[32px] mb-2 mr-3 lg:mr-10">
            <Link href={"/"}>Blogi.com</Link>
          </div> */}

          {/* Navigation Links */}
          {/* <ul className="hidden lg:flex gap-6 items-center font-normal text-[16px]">
            <Link
              href={"/"}
              className="flex items-center gap-2 hover:underline hover:text-pink-300 transition duration-400"
            >
              Read Blogs
            </Link>
            <Link
              href={"/onsale"}
              className="hover:underline hover:text-pink-300 transition duration-900"
            >
              Create Blogs
            </Link>

            <Link
              href={"/onsale"}>
              <button className="bg-pink-800 p-2 rounded ml-[700px] hover:bg-pink-700"> Create Account</button>
              
            </Link>
          </ul>
        </div> */}

        {/* Hamburger Menu Content */}
        {/* <div
          className={`fixed top-0 left-0 h-full w-1/2 bg-pink-950 shadow-lg transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        > */}
          {/* Close Button */}
          {/* <button
            className="absolute top-4 right-4 text-black text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            <Image src={vector} alt="Close Icon" className="text-black" />
          </button>

          {/* Center Heading */}
          {/* <div className="flex justify-center items-center h-[80px] border-b-2">
            <h2 className="text-white font-bold font-font text-xl lg:text-[32px] mb-2">
              Blogi.com
            </h2>
          </div>  */}

          {/* Menu Items */}
          {/* <ul className="flex flex-col items-center py-10 space-y-6 font-medium text-black">
            <Link
              href={"/"}
              className="hover:underline text-white hover:text-gray-700 transition duration-200"
            >
            Read Blogs
            </Link>
            <Link
              href={"/"}
              className="hover:underline text-white cursor-progress hover:text-gray-700 transition duration-200"
            >
             Create Blogs
            </Link>
 
            <Link
              href={"/"}>
              <button className="bg-pink-800 p-2 rounded ml-[700px] cursor-progress hover:bg-pink-700"> Create Account</button>
              
            </Link>
            
          </ul> */}
        {/* </div>
      </div> */}

      {/* Hero Section */}
      <div className="relative">
        {/* Header Image */}
        <Image
          src={header}
          alt="Header"
          className="object-cover w-full h-screen"
        />

        {/* Text Section */}
        <div
          className={`absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white transition-opacity duration-1000 z-20 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col justify-center items-center text-center mt-11 space-y-4">
            {/* Main Heading */}
            <h1 className="text-3xl font-bold sm:text-4xl text-white">
              Publish your passions, your way
            </h1>

            {/* Subheading */}
            <h2 className="text-lg sm:text-2xl text-white/65">
              Create a unique and beautiful blog easily.
            </h2>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6 sm:mt-8">
            <button className="bg-pink-950 p-3 cursor-progress hover:bg-rose-900 z-30">
              Create Blog
            </button>

            <Link href="/blog1">
              <button className="bg-pink-950 p-3 cursor-pointer hover:bg-rose-900 z-30">
                Read Blog
              </button>
            </Link>
          </div>
        </div>



        {/* /////////////////////// */}

        {/* Background Overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-2000 z-10 ${
            showText ? "opacity-50" : "opacity-0"
          }`}
        />
      </div>
    </>
  );
};

export default PostList;
