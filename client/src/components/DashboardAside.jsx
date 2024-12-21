"use client";
import { Avatar, Sidebar } from "flowbite-react"; 
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DashboardAside = () => {
    const { mainUser, loading, error } = useSelector((state) => state.finance);

  return (
    <>

      <Sidebar className="flex flex-col w-full "> 
          <div className="flex justify-center text-center gap-2">
            <Avatar
            src={mainUser.avatar}
              alt={mainUser.companyName} 
            //   style={{ width: "100px", height: "100px" }}
              className="rounded-full p-4 bg-slate-300"
            />
            <p className="flex flex-col justify-center">
              <span className="font-bold capitalize">Welcome back</span>
              <span className="">{mainUser.companyName}</span>
            </p>
          </div>
          <Sidebar.ItemGroup className="flex flex-col gap-2 pt-2">
            <Link href="/dashboard-home">
              <Sidebar.Item className="py-4 text-[20px] mt-4">
                Dashboard
              </Sidebar.Item>
            </Link>
            <Link href="/reports">
              <Sidebar.Item className="py-4 text-[20px]">Reports</Sidebar.Item>
            </Link>
            <Link href="/expenses">
              <Sidebar.Item className="py-4 text-[20px]">Expenses</Sidebar.Item>
            </Link>
            <Link href="/income">
              <Sidebar.Item className="py-4 text-[20px]">Income</Sidebar.Item>
            </Link>
            <Link href="/account">
              <Sidebar.Item className="py-4 text-[20px]">Account</Sidebar.Item>
            </Link>
            <Link href="/expenses-tracking">
              <Sidebar.Item className="py-4 text-[20px]">
                Expenses Tracking
              </Sidebar.Item>
            </Link>
            <Link href="/profile">
              <Sidebar.Item className="py-4 text-[20px]">
               Profile
              </Sidebar.Item>
            </Link>
          </Sidebar.ItemGroup> 
      </Sidebar>
    </>
  );
};

export default DashboardAside;
