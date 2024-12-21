"use client";
import { Avatar, Sidebar } from "flowbite-react"; 
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DashboardAside = () => {
    const { mainUser, loading, error } = useSelector((state) => state.finance);

  return (
    <>

      <Sidebar className="w-full snap-y bg-none">
        <div className="flex flex-col sticky scroll-my-1 bg-[rgba(66,133,244,1)] h-[100vh] p-2 rounded-lg ">
          <div className="flex justify-center text-center gap-2">
            <Avatar
            src={mainUser.avatar}
              alt={mainUser.companyName} 
              style={{ width: "100px", height: "100px" }}
              className="rounded-full bg-slate-300"
            />
            <p className="flex flex-col justify-center">
              <span className="">Welcome back</span>
              <span className="">{mainUser.companyName}</span>
            </p>
          </div>
          <Sidebar.ItemGroup className="flex flex-col gap-2 pt-2">
            <Link href="/dashboard-home">
              <Sidebar.Item className="py-4 text-[30px] mt-4">
                Dashboard
              </Sidebar.Item>
            </Link>
            <Link href="/reports">
              <Sidebar.Item className="py-4 text-[30px]">Reports</Sidebar.Item>
            </Link>
            <Link href="/expenses">
              <Sidebar.Item className="py-4 text-[30px]">Expenses</Sidebar.Item>
            </Link>
            <Link href="/income">
              <Sidebar.Item className="py-4 text-[30px]">Income</Sidebar.Item>
            </Link>
            <Link href="/account">
              <Sidebar.Item className="py-4 text-[30px]">Account</Sidebar.Item>
            </Link>
            <Link href="/expenses-tracking">
              <Sidebar.Item className="py-4 text-[30px]">
                Expenses Tracking
              </Sidebar.Item>
            </Link>
            <Link href="/profile">
              <Sidebar.Item className="py-4 text-[30px]">
               Profile
              </Sidebar.Item>
            </Link>
          </Sidebar.ItemGroup>
        </div>
      </Sidebar>
    </>
  );
};

export default DashboardAside;
