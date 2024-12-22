"use client";
import { Avatar, Sidebar } from "flowbite-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteUserFailure,
  deleteUserSuccess,
  signOutStart,
} from "../../redux/user/userSlice";
import { LiaSignOutAltSolid } from "react-icons/lia";

const DashboardAside = () => {
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
      <Sidebar className="flex flex-col w-full h-full ">
        <div className="flex justify-center text-center gap-2">
          <Avatar
            src={mainUser.avatar}
            alt={mainUser.companyName} 
            className="rounded-full p-4 bg-slate-300"
          />
          <p className="flex flex-col justify-center">
            <span className="font-bold capitalize">Welcome back</span>
            <span className="">{mainUser.companyName}</span>
          </p>
        </div>
        <Sidebar.ItemGroup className="flex flex-col gap-2 pt-2">
          <Link to="/dashboard">
            <Sidebar.Item className=" py-1 text-[20px] mt-4">
              Dashboard
            </Sidebar.Item>
          </Link>
          <Link to="/reports">
            <Sidebar.Item className=" py-1 text-[20px]">Reports</Sidebar.Item>
          </Link>
          <Link to="/expenses">
            <Sidebar.Item className=" py-1 text-[20px]">Expenses</Sidebar.Item>
          </Link>
          <Link to="/income">
            <Sidebar.Item className=" py-1 text-[20px]">Income</Sidebar.Item>
          </Link>
          <Link to="/account">
            <Sidebar.Item className=" py-1 text-[20px]">Account</Sidebar.Item>
          </Link>
          <Link to="/expenses-tracking">
            <Sidebar.Item className=" py-1 text-[20px]">
              Expenses Tracking
            </Sidebar.Item>
          </Link>
          <Link to="/profile">
            <Sidebar.Item className=" py-1 text-[20px]">Profile</Sidebar.Item>
          </Link>
          <Sidebar.Item onClick={handleSignOut} className=" py-1 text-[20px] cursor-pointer">
          <LiaSignOutAltSolid className="rotate-[-90deg] text-[50px] text-red-800" />
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar>
    </>
  );
};

export default DashboardAside;
