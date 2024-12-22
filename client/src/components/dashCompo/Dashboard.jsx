import React from "react";
import DashboardHome from "./DashBoardHome";
import { useSelector } from "react-redux";
import Balance from "./Balance";

export default function Dashboard() {
  const { mainUser, loading, error } = useSelector((state) => state.finance);
  return (
    <>
      <DashboardHome>
        <div className="flex flex-col md:flex-ro  w-full">
          <div className="border-b-2 py-2 w-full">
            <h1 className="text-[50px]">Dashboard</h1>
            <p className="text-[20px]">Welcome back {mainUser.companyName}</p>
          </div>
          <div className="flex flex-col sm:flex-row mt-2">
            <Balance />
          </div>
          <div className="">
            dsfghjk
          </div>
        </div>
      </DashboardHome>
    </>
  );
}
