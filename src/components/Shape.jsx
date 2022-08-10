import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Shape = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="bg-[#084c75] h-[70px] w-[150px] border-r rounded-l-full ml-[180px]  mt-[40px]  sm:hidden"></div>
        <div className="bg-[#e7b897] h-[70px] w-[70px]  rounded-full ml-[180px] mt-7 sm:ml-[330px] sm:hidden"></div>
        <div className="bg-[#084c75] h-[70px] w-[70px]  rounded-full ml-[180px] mt-7 sm:ml-[140px] sm:mt-[400px]"></div>
        <div className="bg-[#e7b897] h-[70px] w-[150px] border-r rounded-r-full ml-[180px]  mt-[40px]  sm:mt-[50px] "></div>
      </div>
      <div className="justify-end text-right items-end sm:text-left pl-60 pr-60 sm:px-0 py-8">
        <h2 className="text-3xl text-[#aa3012] font-bold sm:pl-[40px]  px-60 sm:px-0 sm:text-2xl">
          Ready to Start? Let's get in touch!
        </h2>
        <p className="text-center">
          <BsArrowRight className="text-4xl text-[#aa3012] absolute ml-[600px] sm:ml-[50px]" />
        </p>
      </div>
    </div>
  );
};

export default Shape;
