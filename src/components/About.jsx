import React from "react";
import { BsDashLg } from "react-icons/bs";

const About = () => {
  return (
    <div className="flex my-4 sm:flex-col">
      <div className="bg-[#084c75] w-[540px] h-[400px] px-8 py-8 z-20 absolute ml-20 sm:ml-0 sm:w-[420px] shadow-xl sm:h-[420px] sm:px-2">
        <h2 className="text-5xl text-left px-4 text-[#e7b897] sm:text-3xl">
          Our Story
        </h2>
        <p className="flex items-center text-xl px-4 py-4 text-slate-300 border-b sm:text-lg border-b-white">
          {/* <BsDashLg className="text-4xl" /> */}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
          nesciunt ullam corporis facere exercitationem dignissimos officiis
          impedit accusamus accusantium ipsum, in nam.
        </p>
        <p className=" flex items-center justify-between text-xl px-4 text-slate-300  sm:text-lg mt-2">
          {/* <BsDashLg className="text-4xl" /> Lorem ipsum dolor sit amet */}
          consectetur, adipisicing elit. Fugiat nesciunt ullam corporis facere
          exercitationem dignissimos officiis impedit accusamus accusantium
          ipsum, in nam.
        </p>
      </div>
      <div className="bg-[#e7b897] h-[70px] w-[120px] absolute border-r rounded-r-full  mt-[350px] shadow-xl z-30 sm:hidden"></div>
      <div>
        <img
          src={
            "https://www.potential.com/wp-content/uploads/2017/03/teamwork.png"
          }
          alt="group"
          className="h-[445px] mt-10 ml-[560px] sm:ml-0 sm:mt-[420px] sm:h-[295px] object-cover"
        />
      </div>
    </div>
  );
};

export default About;
