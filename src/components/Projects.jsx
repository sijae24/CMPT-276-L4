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
        demo: "https://github.com/sijae24/rock-paper-scissors",
        code: "https://github.com/sijae24/rock-paper-scissors",
      },
      {
        id: 2,
        src: cannon,
        title: "Cannon Game",
        demo: "https://github.com/sijae24/Cannon-Game",
        code:  "https://github.com/sijae24/Cannon-Game",
      },
      {
        id: 3,
        src: weatherapp,
        title: "Weather App",
        demo: "https://cjweatherapp.netlify.app/",
        code: "https://cjweatherapp.netlify.app/",
      },
    ];
  
    return (
      <div
        name="projects"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex items-center flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-3xl font-bold inline border-b-4 border-[#de143b]">
              Projects
            </p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {projects.map(({ id, src, title, demo, code }) => (
                <div key={id} className= "border-solid border-2 rounded-lg p-3">
                <p className="text-lg font-semibold text-center mb-4">{title}</p>
                <img
                  src={src}
                  alt={title}
                  className="rounded-md mb-4 max-h-40" 
                />
                 <div className="flex justify-center gap-4">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 text-center text-white bg-white bg-opacity-0 border-2 border-white rounded-lg hover:bg-[#de143b] hover:border-[#de143b] duration-200"
                >Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 text-center text-white bg-white bg-opacity-0 border-2 border-white rounded-lg hover:bg-[#de143b] hover:border-[#de143b] transition-all duration-200"
                >Code
                </a>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;