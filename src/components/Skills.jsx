import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import python from "../assets/python.png";
import github from "../assets/github.png";
import cpp from "../assets/cpp.png";

const Skills = () => {
  const langs = [
    {
      id: 1,
      src: html,
      title: "HTML",
 },
    {
      id: 2,
      src: css,
      title: "CSS",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
    },
    {
      id: 4,
      src: python,
      title: "Python",
    },
    {
      id: 5,
      src: github,
      title: "GitHub",
    },
    {
      id: 6,
      src: cpp,
      title: "C++",
    },
  ];

  return (
    <div
      name="Skills"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-3xl font-bold inline border-b-4 border-[#de143b]">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {langs.map(({ id, src, title}) => (
            <div
              key={id}
              className={`px-4 cursor-pointer capitalize font-medium text-white-500 hover:scale-150 duration-200`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;