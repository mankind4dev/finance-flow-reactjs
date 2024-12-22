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
            <h1 className="text-[50px] capitalize">profile</h1>
          </div>
          <ProfileForm />
        </div>
      </DashboardHome>
    </>
  );
}
