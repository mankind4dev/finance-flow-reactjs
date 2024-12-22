"use client";
import { Avatar, Button, Navbar, TextInput } from "flowbite-react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserFailure,
  deleteUserSuccess,
  signOutStart,
} from "../../redux/user/userSlice";
import { FaHamburger } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

const DashboardHead = () => {
  const { mainUser, loading, error } = useSelector((state) => state.finance);
  const [formDatas, setFormDatas] = useState({});
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      dispatch(signOutStart());
      const res = await fetch("/api/auth/signout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };
  return (
    <>
      <Navbar className="flex justify-between  w-full p-2  ">
        <img src={"/images/logo.png"} width={100} height={100} alt="logo" />

        <div className="flex gap-2 sm:gap-6">
          <form action="" className="hidden sm:flex  self-center p-3">
            <TextInput
              type="text"
              placeholder="Search..."
              rightIcon={AiOutlineSearch}
              className="hidden lg:inline"
            />
          </form>
          <Button className="w-12 h-10 hidden lg:hidden" color="gray" pill>
            <AiOutlineSearch />
          </Button>
          <div className="flex self-center">
            <svg
              className="w-8 h-8 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"
              />
            </svg>
          </div>
          <div className="flex gap-3 justify-center text-center ">
            <p className="flex p-1   w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] bg-gray-400 rounded-full">
              <img
                src={mainUser.avatar}
                className="w-full h-full rounded-full object-fill bg-white-200 cursor-pointer"
                alt={mainUser.companyName}
              />
            </p>
            <p className="hidden sm:flex sm:flex-col md:flex-col justify-center text-center ">
              <span className="text-red-600 truncate">
                {mainUser.companyName}
              </span>
              <span className="text-red-800 truncate">{mainUser.email}</span>
            </p>
            <IoMdMenu className="flex sm:hidden justify-center text-center self-center text-[30px] cursor-pointer" />
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default DashboardHead;
