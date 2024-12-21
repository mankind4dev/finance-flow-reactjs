"use client";
import { Link } from "react-router-dom";

const Tracking = () => {
  return (
    <>
      <div className="flex  w-full mx-auto mt-8">
        <div className="flex flex-col flex-1 justify-center text-start  p-8">
          <p className="flex-wrap items-start text-[48px] font-[600] ">
            TRACK YOUR INCOME AND EXPENSES IN ONE PLACE
          </p>
          <div className="flex items-end  justify-center mt-32 gap-7 ">
            <Link to="/sign-up">
              <button className="p-[20px] px-[30px] rounded-[26px] text-xl font-normal  text-[rgba(66,133,244,1)] bg-white">
                Get Started
              </button>
            </Link>
            <Link to="/">
              <button className="p-[20px] px-[30px] rounded-[26px] text-xl font-normal  text-[rgba(66,133,244,1)] bg-white">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="  flex-1 relative  w-full ">
          <img src="/images/tracking.png" />
        </div>
      </div>
    </>
  );
};

export default Tracking;
