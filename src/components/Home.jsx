import React from "react";
import Profile from "../assets/profile-photo.jpg"; 
import {FaGithub, FaEnvelope} from "react-icons/fa";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl sm:text-6xl font-bold text-[#de143b]">
            I am CJ Rasos
          </h2>
          <p className="text-white flex justify-center items-center max-w-md">
            Hello! Welcome to my portfolio! This is for CMPT 276 Lab 4 using ReactJs and TailwindCSS.
          </p>

          <div className="flex mt-4 space-x-4">
            <a
              href="mailto:cjr16@sfu.ca"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-[#de143b] transition-colors duration-300"
            >
              <FaEnvelope size={30} />
            </a>
            <a
              href="https://github.com/sijae24"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-[#de143b] transition-colors duration-300"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>

        <div>
          <img
            src={Profile} 
            alt="CJ Pic" 
            className=" border-2 border-white rounded-md mx-auto w-1/2 md:w-1/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;