import React from "react";
import ImgOne from "../assets/Abstract-wave-liquid-shape-Fluid-design-by-DEEMKA-STUDIO-34-removebg-preview.png";
import ImgTwo from "../assets/Abstract-wave-liquid-shape-Fluid-design-Graphics-3389501-1-removebg-preview.png";
import ImgThree from "../assets/Abstract-wave-liquid-shape-Fluid-design-Graphics-3389545-1-removebg-preview.png";
import { BsArrowRight } from "react-icons/bs";

const Services = () => {
  return (
    <div className="mt-10">
      <div className="pl-10">
        <h2 className="text-4xl font-bold text-[#084c75] ">Our Services</h2>
        <p className="text-xl text-gray-500 py-5 pr-[40rem] sm:pr-[2rem]">
          We pride ourselves on our bespoke approach to ensure client success
          before during and after our projects conclude.{" "}
        </p>
      </div>
      <div className="h-[400px] sm:h-[650px] absolute w-[2px] ml-8 mt-7  bg-[#e7b897] "></div>
      <div>
        <div className="flex pl-12 py-5 ml-4">
          <h2 className="text-3xl font-bold  text-[#e7b897]">01</h2>
          <img src={ImgOne} alt="/" className="h-20 pt-2 sm:hidden" />
          <div className="ml-4">
            <h4 className="text-lg text-[#aa3012] font-bold">
              Strategy Activation
            </h4>
            <p className="pr-[30rem] sm:pr-[2rem] text-xl text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              beatae deserunt non tempore tenetur nesciunt ab ipsam aut
              consequatur dolorum.
            </p>
          </div>
        </div>
        <div className="flex pl-12 py-5 ml-4">
          <h2 className="text-3xl font-bold  text-[#e7b897]">02</h2>
          <img src={ImgTwo} alt="/" className="h-20 pt-2 sm:hidden" />
          <div className="ml-4">
            <h4 className="text-lg text-[#aa3012] font-bold">Value Chain</h4>
            <p className="pr-[30rem] sm:pr-[2rem] text-xl text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              beatae deserunt non tempore tenetur nesciunt ab ipsam aut
              consequatur dolorum.
            </p>
          </div>
        </div>
        <div className="flex pl-12 py-5 ml-4">
          <h2 className="text-3xl font-bold  text-[#e7b897]">03</h2>
          <img src={ImgThree} alt="/" className="h-20 pt-2  sm:hidden" />
          <div className="ml-4">
            <h4 className="text-lg text-[#aa3012] font-bold">Technology</h4>
            <p className="pr-[30rem] sm:pr-[2rem] text-xl text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              beatae deserunt non tempore tenetur nesciunt ab ipsam aut
              consequatur dolorum.
            </p>
          </div>
        </div>
        <div className="justify-end text-right items-end sm:text-left pl-60 pr-60 sm:px-0 py-8">
          <h2 className="text-3xl text-[#aa3012] font-bold sm:pl-[40px]  px-60 sm:px-0 sm:text-2xl">
            Find out more details about our services
          </h2>
          <p className="text-center">
            <BsArrowRight className="text-4xl text-[#aa3012] absolute ml-[600px] sm:ml-[50px]" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
