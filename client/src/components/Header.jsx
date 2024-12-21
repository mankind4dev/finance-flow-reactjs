"use client"
import { PiPlus } from "react-icons/pi";
import { FcMenu } from "react-icons/fc";
import { BsMenuApp } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-[rgba(255,255,255,1)]">
        <div className="flex text-center justify-between py-6 pr-16 pl-16">
          <Link to="/">
            <img src="/images/logo.png" alt="logo" width={200} height={100} />
          </Link>
          <ul className="hidden md:flex text-center self-center ">
            <li className="text-[20px] font-[500] mr-6 text-[rgba(0,0,0,1)] hover:text-gray-500 hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="text-[20px] font-[500] mr-6 text-[rgba(0,0,0,1)] hover:text-gray-500 hover:underline">
              <Link to="/feature">Features</Link>
            </li>
            <li className="text-[20px] font-[500] mr-6 text-[rgba(0,0,0,1)] hover:text-gray-500 hover:underline">
              <Link to="/about">About</Link>
            </li>
            <li className="text-[20px] font-[500] mr-6 text-[rgba(0,0,0,1)] hover:text-gray-500 hover:underline">
              <Link to="/contact-us">Contact us</Link>
            </li>
          </ul>
          <div className="flex justify-between items-center">
            <Link to="/sign-up">
              <li className="hidden md:flex text-[20px] font-[500] mr-6 whitespace-nowrap bg-[rgba(66,133,244,1)] text-white list-none py-4 px-12 rounded-[50px]  hover:underline">
                Get Started
              </li>
            </Link>
            <Link to="/sign-in">
              <li className="text-[20px] font-[500] mr-6 whitespace-nowrap bg-[rgba(66,133,244,1)] text-white list-none py-4 px-12 rounded-[50px] hover:underline">
                Sign In
              </li>
            </Link>
          </div>
          <div className="flex justify-center text-center md:hidden">
            <IoMdMenu className="self-center text-[60px] text-white cursor-pointer " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
