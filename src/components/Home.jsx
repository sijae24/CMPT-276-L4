import React from "react";
// import Profile from "../assets/profile-photo.jpg"; 

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
        </div>
      </div>
    </div>
  );
};

export default Home;