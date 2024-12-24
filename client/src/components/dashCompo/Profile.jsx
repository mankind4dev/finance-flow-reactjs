import React from "react";
import DashboardHome from "./DashBoardHome";
import { useSelector } from "react-redux";
import ProfileForm from "./ProfileForm";

export default function Profile() {
  const { mainUser, loading, error } = useSelector((state) => state.finance);
  return (
    <>
      <DashboardHome>
        <div className="flex flex-col w-full">
          <div className="border-b-2 py-2 w-full">
            <h1 className="text-[50px] capitalize">profile setting</h1>
            <p className="text-[12px] text-slate-500">Update your profile and upload your image 👍🏻</p>
          </div>
          <ProfileForm />
        </div>
      </DashboardHome>
    </>
  );
}
