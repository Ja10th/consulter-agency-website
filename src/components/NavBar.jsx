import React from "react";
import { BsFillInboxesFill, BsArrowRight } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="w-full flex justify-between pt-2 ">
      <div className="flex flex-row  items-center w-full h-[50px] ">
        <BsFillInboxesFill className="text-4xl px-1 mr-1 ml-8 border-r text-yellow-600 border-r-black" />
        <div className="flex flex-col items-left mr-20">
          <p className="font-bold text-gray-500">SOLUTION</p>
          <p className="font-bold text-gray-500">CONSULTER</p>
        </div>
        <div className="sm:hidden">
          <ul className="flex mx-28 justify-between">
            <li className="mr-10 text-lg text-black hover:text-black-600 font-bold underline ">
              Home
            </li>
            <li className="mr-10 text-lg text-gray-600 hover:text-black-600 hover:font-bold">
              Services
            </li>
            <li className="mr-10 text-lg text-gray-600 hover:text-black-600 hover:font-bold">
              Case Studies
            </li>
            <li className="mr-10 text-lg text-gray-600 hover:text-black-600 hover:font-bold">
              About
            </li>
          </ul>
        </div>
        <div className="flex justify-end ml-28 sm:hidden">
          <a
            href="/"
            className="flex items-center ml-28 justify-between text-[#084c75] font-bold">
            Get in touch <BsArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
