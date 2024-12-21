"use client"

import { Link } from "react-router-dom";

const LinkBank = () => {
  return (
    <>
      <div className="flex flex-col mt-2 ">
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-[68px] font-[600] px-32 ">
            LINK YOUR BANK CARDS AND GET ALERTS ON EXPENSES AND INCOME EASILY
          </h1>
          <p className="text-[32px] font-[600] mt-2">
            YOUR SECURITY IS OUR NO 1 CONCERN
          </p>
        </div>
        <div className="flex flex-wrap w-full   gap-x-4 gap-y-8 justify-center text-center mt-24 ">
          <img
            src="/images/link1.png"
            width={900}
            // height={500}
            // alt="tracking-image"
            // objectFit="contain"
          />
          <img
            src="/images/link2.png"
            width={900}
            // height={500}
            // alt="report-image"
            // objectFit="contain"
          />
        </div>
        <div className="flex justify-center pt-32 ">
        <Link href={"/signin"}>
          <button  className="p-[20px] px-[30px] rounded-[26px] text-xl font-normal  text-[rgba(66,133,244,1)] bg-white">
            Get Started
          </button>
        </Link>
        </div>
      </div>
    </>
  );
};

export default LinkBank;
