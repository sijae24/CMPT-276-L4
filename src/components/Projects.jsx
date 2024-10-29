import React from "react";
import rps from "../assets/rps.png";
import cannon from "../assets/cannon.png";
import weatherapp from "../assets/weatherapp.png";

const Projects = () => {
    const projects = [
      {
        id: 1,
        src: rps,
        title: "Rock Paper Scissors",
      },
      {
        id: 2,
        src: cannon,
        title: "Cannon Game",

      },
      {
        id: 3,
        src: weatherapp,
        title: "Weather App",
      },
    ];
  
    return (
      <div
        name="Projects"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex items-center flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-3xl font-bold inline border-b-4 border-[#de143b]">
              Projects
            </p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {projects.map(({ id, src, title }) => (
                <div key={id} className= "border-solid border-2 rounded-lg p-3">
                <p className="text-lg font-semibold text-center">{title}</p>
                <img
                  src={src}
                  alt={title}
                  className="rounded-md hover:scale-110 duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;