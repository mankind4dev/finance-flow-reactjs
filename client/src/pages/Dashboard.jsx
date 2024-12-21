import React from "react";
import DashboardHead from "../components/DashboardHead";
import DashboardAside from "../components/DashboardAside";
import DashBoardHome from "../components/DashBoardHome";

export default function Dashboard() {
  return (
    <>
      <div className=" ">
        <div className=" w-full border-slate-300">
          <DashboardHead />
        </div>
        <div className="flex sticky">
          <div className="flex  justify-center text-start h-[100vh] w-[300px]  ">
            <DashboardAside />
          </div>
          <div className="flex w-full bg-slate-300 px-3">
            <DashBoardHome /> 
          </div>
        </div>
      </div>
    </>
  );
}
