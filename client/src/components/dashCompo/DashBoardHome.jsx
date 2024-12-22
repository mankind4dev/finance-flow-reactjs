import React from "react";
import DashboardHead from "./DashboardHead";
import DashboardAside from "./DashboardAside";

export default function DashboardHome({ children }) {
  return (
    <>
      <div className=" ">
        <div className=" w-full border-b-2 border-slate-200">
          <DashboardHead />
        </div>
        <div className="flex  ">
          <div className="hidden md:flex justify-center text-start  w-[300px]  border-r-2">
            <DashboardAside />
          </div>
          <div className="flex w-full bg-white px-3">{children}</div>
        </div>
      </div>
    </>
  );
}
