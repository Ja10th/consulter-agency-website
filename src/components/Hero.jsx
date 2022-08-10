import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div>
      <div>
        <div className="bg-[#084c75] h-[70px] w-[70px] absolute rounded-full ml-[180px] mt-7 sm:ml-[330px] sm:mt-[50px]"></div>
        <h1 className="text-left text-5xl text-black/70 font-bold mt-10 px-[17rem] sm:text-5xl sm:px-4">
          W<span className="text-black">e are an</span>{" "}
          <span className="underline">Operation & Technology</span> Strategy
          Agency
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-1">
        <img
          src={
            "https://www.myperfectresume.com/wp-content/uploads/2020/05/what-can-you-bring-to-the-team.jpg"
          }
          alt="imagess"
          className="h-[400px] my-14 object-cover"
        />
        <div className="bg-[#e7b897] h-[70px] w-[150px] absolute border-r rounded-l-full rounded-r-full ml-[540px] mt-[300px] sm:hidden"></div>
        <div className="bg-[#084c75] h-[70px] w-[150px] absolute border-r rounded-l-full ml-[1210px]  mt-[40px] sm:hidden"></div>
        <div>
          <p className="text-xl mt-[120px] text-gray-500 pr-[10rem] sm:text-left sm:pl-7 sm:text-xl sm:pr-[2rem] sm:mt-[2px]">
            We help leading mobility and consumer tech companies to navigate the
            early stages of innovation
          </p>
          <p className="flex items-center mt-10 text-[#aa3012] font-bold text-2xl  sm:text-lg sm:text-left sm:pl-7 sm:pr-[2rem] sm:mt-[2px] ">
            Find out more <BsArrowRight className="ml-2" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
