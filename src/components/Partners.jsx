import React from "react";

const Partners = () => {
  return (
    <div className="mt-20">
      <div>
        <h3 className="text-center text-4xl text-[#aa3012]">
          Partnership & Affliations
        </h3>
      </div>
      <div className="flex text-center justify-center py-10">
        <div className="bg-slate-200 py-2 px-2 rounded-full w-[120px] text-center justify-center">
          <img
            src={
              "https://image.winudf.com/v2/image1/Y29tLm1hei5mb3JiZXNtYWdhemluZV9pY29uXzE1NTE1NTY1ODhfMDIx/icon.png?w=&fakeurl=1"
            }
            alt="/"
            className="h-[100px] rounded-full ml-[2px] op   "
          />
        </div>
        <div>
          <img
            src={"http://wwaadvisors.com/wp-content/uploads/wwaa-logo-3.jpg"}
            alt="/"
            className="h-[100px] rounded-full"
          />
        </div>
        <div className="bg-slate-200 py-2 px-2 rounded-full w-[120px] text-center justify-center">
          <img
            src={
              "https://mk0safeguardmedr3wxc.kinstacdn.com/app/uploads/2021/09/business-journal.jpeg"
            }
            alt="/"
            className="h-[100px] rounded-full ml-[2px] brightness-50  "
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
