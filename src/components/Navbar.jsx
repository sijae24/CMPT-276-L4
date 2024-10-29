import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
    const links = [
      { id: 1, link: "home" },
      { id: 2, link: "about" },
      { id: 3, link: "projects" },
      { id: 4, link: "skills" },
    ];

  return (
    <nav className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <img src={Logo} alt='Logo' className="w-12" />
      </div>

      <ul className="flex flex-grow justify-center">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white-500 hover:scale-150 duration-200">
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;