"use client";  
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap bg-transparent p-8">
        <div className="flex text-center justify-around flex-wrap p-3">
          <Link href={"/"}>
            <img src="/images/logo.png" alt="logo" width={130} height={100} />
          </Link>
          <ul className="flex text-center self-center">
            <li className="text-[20px] font-[500] mr-6 text-[rgba(0,0,0,1)] hover:text-gray-500 hover:underline">
              <Link to="/advertisement">Advertisement</Link>
            </li>
            <li className="text-[20px] font-[500] mr-6 text-[rgba(0,0,0,1)] hover:text-gray-500 hover:underline">
              <Link to="/feature">About</Link>
            </li>
            <li className="text-[20px] font-[500] mr-6 text-[rgba(0,0,0,1)] hover:text-gray-500 hover:underline">
              <Link to="/about">FAQ</Link>
            </li>
            <li className="text-[20px] font-[500] mr-6 text-[rgba(0,0,0,1)] hover:text-gray-500 hover:underline">
              <Link to="/contact-us">Support</Link>
            </li>
          </ul>
          <ul className="flex text-center self-center gap-x-4">
            <li className="bg-[rgba(247,247,247,1)] p-2 rounded-full cursor-pointer">
              <FaInstagram />
            </li>
            <li className="bg-[rgba(247,247,247,1)] p-2 rounded-full cursor-pointer">
              <FaXTwitter />
            </li>
            <li className="bg-[rgba(247,247,247,1)] p-2 rounded-full cursor-pointer">
              <FaFacebook />
            </li>
            <li className="bg-[rgba(247,247,247,1)] p-2 rounded-full cursor-pointer">
              <IoLogoYoutube />
            </li>
            <li className="bg-[rgba(247,247,247,1)] p-2 rounded-full cursor-pointer">
              <FaTiktok />
            </li>
          </ul>
        </div>
        <div className=" flex justify-around mt-8">
          <p className="text-[rgba(17,17,17,0.87)] text-[20px] font-[400] self-center">
            &copy; <span>{new Date().getFullYear()}</span> Finance Flow 
          </p>
          <ul className="flex text-center self-center">
            <li className=" text-[20px] font-[400] mr-6 text-[rgba(17,17,17,0.87)] hover:text-gray-500 hover:underline">
              <Link to="/advertisement">Terms of use</Link>
            </li>
            <li className=" text-[20px] font-[400] mr-6 text-[rgba(17,17,17,0.87)] hover:text-gray-500 hover:underline">
              <Link to="/feature">Privacy policy</Link>
            </li>
            <li className=" text-[20px] font-[400] mr-6 text-[rgba(17,17,17,0.87)] hover:text-gray-500 hover:underline">
              <Link to="/about">Cookies</Link>
            </li> 
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
