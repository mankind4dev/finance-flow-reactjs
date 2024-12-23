import React from "react";
import DashboardHead from "./DashboardHead";
import DashboardAside from "./DashboardAside";

export default function DashboardHome({ children }) {
  return (
    <>
      <div className=" relative h-[100vh]">
        <div className="w-full border-b-2 border-slate-200">
          <DashboardHead />
        </div>
        <div className="flex ">
          <div className="hidden sticky  h-full md:flex justify-center text-start  w-[300px]  border-r-2">
            <DashboardAside />
          </div>
          <div className="flex h-full   flex-grow w-full bg-white px-3 pb-5">{children}</div>
        </div>
      </div>
    </>
  );
}
