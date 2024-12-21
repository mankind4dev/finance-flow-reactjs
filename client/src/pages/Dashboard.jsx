import React from "react";
import DashboardHead from "../components/DashboardHead";
import DashboardAside from "../components/DashboardAside";
import DashBoardHome from "../components/DashBoardHome";

export default function Dashboard() {
  return (
    <>
      <div className="h-[100vh]">
        <div className="sticky w-full bg-[rgba(217,217,217,1)] border-b-2 border-slate-300">
          <DashboardHead />
        </div>
        <div className="flex sticky gap-2">
          <div className="flex sticky justify-center text-start w-[300px]  ">
            <DashboardAside />
          </div>
          <div className="flex w-full bg-slate-300">
            <DashBoardHome />
            {/* {children} */}
          </div>
        </div>
      </div>
    </>
  );
}
