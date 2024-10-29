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
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      id: 4,
      src: python,
      title: "Python",
      link: "https://docs.python.org/3/",
    },
    {
      id: 5,
      src: github,
      title: "GitHub",
      link: "https://docs.github.com/en",
    },
    {
      id: 6,
      src: cpp,
      title: "C++",
      link: "https://en.cppreference.com/w/",
    },
  ];

  return (
    <div
      name="Skills"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col items-center justify-center w-full h-full text-white">
        <div>
          <p className="text-3xl font-bold inline border-b-4 border-[#de143b]">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {langs.map(({ id, src, title, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="px-4 cursor-pointer transform hover:scale-110 duration-200 text-white hover:text-[#de143b]" 
            >
              <div>
                <img src={src} alt={title} className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;