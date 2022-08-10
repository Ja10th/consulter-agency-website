import React from "react";

const Offer = () => {
  return (
    <div className="py-10 flex sm:flex-col">
      <div>
        <img
          src={
            "https://imageio.forbes.com/specials-images/imageserve/717085855/960x0.jpg?format=jpg&width=960"
          }
          alt=""
          className="h-[500px] object-cover"
        />
      </div>
      <div className="bg-[#e7b897] h-[70px] ml-[700px] w-[120px] absolute border-r rounded-r-full  mt-[370px] shadow-xl z-30 sm:hidden"></div>
      <div className="bg-[#084c75] w-[540px] h-[450px] ml-[700px] px-8 py-8 z-20 absolute mt-5 sm:ml-0 sm:w-[420px]  sm:mt-[500px] shadow-xl sm:h-[420px] sm:px-2">
        <p className="text-xl px-4 py-4 text-slate-300">Our Primary Measure</p>
        <h2 className="text-3xl text-left px-4 mt-10 text-[#e7b897] sm:text-3xl">
          Clients hug us in the airport
        </h2>
        <p className="flex items-center text-xl px-4 py-4 text-slate-300 border-b sm:text-lg border-b-white">
          {/* <BsDashLg className="text-4xl" /> */}
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <p className="flex items-center text-xl px-4 py-4 text-slate-300 border-b sm:text-lg border-b-white">
          {/* <BsDashLg className="text-4xl" /> */}
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <p className=" flex items-center justify-between text-xl px-4 text-slate-300  sm:text-lg mt-2">
          {/* <BsDashLg className="text-4xl" /> Lorem ipsum dolor sit amet */}
          consectetur, adipisicing elit. Fugiat
        </p>
      </div>
    </div>
  );
};

export default Offer;
