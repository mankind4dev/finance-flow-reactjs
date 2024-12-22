"use client";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";
import { Button } from "flowbite-react";
import { IoMdAdd } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";

export default function Balance() {
  return (
    <>
      <div className="flex justify-between w-full pl-2 pr-2 sm:pr-4 sm:pl-4 py-2 rounded dashboardBg">
        <div className="flex flex-col mr-4  ">
          <p className="flex text-center mb-3">
            <span className="text-white text-[15px] sm:text-[25px] mr-2 whitespace-nowrap">
              Available Balance
            </span>
            <span className="flex self-center">
              <IoEye className="text-[13px] sm:text-[20px] text-white cursor-pointer" />
              <IoMdEyeOff className="hidden text-[13px] sm:text-[20px] text-white cursor-pointer" />
            </span>
          </p>
          <div className="flex justify-start text-end w-full h-full">
            <p className="flex justify-start text-start self-end text-white w-full p-0 mb-2 sm:m-0">
              <TbCurrencyNaira className="self-end text-[20px] sm:text-[25px]" />
              <span className="text-[22px]">5,368,893.59</span>
            </p>
          </div>
        </div>
        <div className="grid sm:flex grid-cols-2 gap-1 text-center justify-center sm:gap-8">
          <Button
            size="xl"
            className="self-center bg-gradient-to-r from-[rgba(66,133,244,0.9)] to-[rgba(66,133,244,0.7)] hover:from-[rgba(66,133,244,0.8)] hover:to-[rgba(66,133,244,0.6)] text-white px-2 py-0 text-sm md:px-8 md:py-4 md:text-lg"
          >
            <IoMdAdd className="self-center mr-2" />
            <p className="text-[12px] md:text-[30px] capitalize">add</p>
          </Button>
          <Button
            size="xl"
            className="self-center bg-gradient-to-r from-[rgba(66,133,244,0.9)] to-[rgba(66,133,244,0.7)] hover:from-[rgba(66,133,244,0.8)] hover:to-[rgba(66,133,244,0.6)] text-white py-0 text-sm md:px-8 md:py-4 md:text-lg"
          >
            <FaArrowUp className="self-center mr-2" />
            <p className="text-[12px] md:text-[30px] capitalize">send</p>
          </Button>
          <Button
            size="xl"
            className="self-center bg-gradient-to-r from-[rgba(66,133,244,0.9)] to-[rgba(66,133,244,0.7)] hover:from-[rgba(66,133,244,0.8)] hover:to-[rgba(66,133,244,0.6)] text-white py-0 text-sm md:px-8 md:py-4 md:text-lg"
          >
            <IoReload className="self-center mr-1 text-sm md:text-lg" />
            <p className="text-[12px] md:text-[30px] capitalize">request</p>
          </Button>

          <Button
            size="xl"
            className="self-center bg-gradient-to-r from-[rgba(66,133,244,0.9)] to-[rgba(66,133,244,0.7)] hover:from-[rgba(66,133,244,0.8)] hover:to-[rgba(66,133,244,0.6)] text-white py-0 text-sm md:px-8 md:py-4 md:text-lg"
          >
            <CiMenuKebab className="self-center mr-2 rotate-90" />
          </Button>
        </div>
      </div>
    </>
  );
}
