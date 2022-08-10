import React from "react";

const Footer = () => {
  return (
    <div className="pt-15 mt-20 h-[300px] sm:h-[700px] pb-0 mb-0 bg-[#e7b897] flex">
      <div className="pt-5">
        <ul className="flex flex-col mx-28 justify-between">
          <li className="mr-10 text-xl pt-3 text-black hover:text-black-600 font-bold underline ">
            Home
          </li>
          <li className="mr-10 text-xl pt-3 text-slate-800 hover:text-black-600 hover:font-bold">
            Services
          </li>
          <li className="mr-10 text-xl pt-3 text-slate-800 hover:text-black-600 hover:font-bold">
            Case Studies
          </li>
          <li className="mr-10 text-xl pt-3 text-slate-800 hover:text-black-600 hover:font-bold">
            About
          </li>
        </ul>
      </div>
      <div className="bg-[#084c75] w-[250px] h-[200px] ml-[700px] px-2 py-2 z-20 absolute mt-[-40px] sm:ml-0 sm:w-[420px] sm:mt-[300px] shadow-xl sm:h-[420px] sm:px-2">
        <p className="text-xl px-4 py-2 text-slate-300">Email</p>
        <p className="flex items-center text-sm px-4 py-1 text-slate-300 border-b sm:text-lg border-b-white">
          {/* <BsDashLg className="text-4xl" /> */}
          Jamesoluwaleye@gmail.com
        </p>
        <p className="text-xl px-4 py-2 text-slate-300">Work Address</p>
        <p className="flex items-center text-sm px-4 py-1 text-slate-300 border-b sm:text-lg border-b-white">
          {/* <BsDashLg className="text-4xl" /> */}
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <p className="absolute mt-[270px] ml-[300px] text-xl">
        All rights reserved
      </p>
    </div>
  );
};

export default Footer;
