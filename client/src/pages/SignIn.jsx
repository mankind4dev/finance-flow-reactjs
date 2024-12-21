"use client";
import { FcGoogle } from "react-icons/fc";
import { FaRegEnvelope } from "react-icons/fa";
import { PiLockKeyLight } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { useState } from "react";
import { Alert, Spinner } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";
import { BsHouseFill } from "react-icons/bs";

export default function SignIn() {
  const [formDatas, setFormDatas] = useState({});
  const { loading, error } = useSelector((state) => state.finance);
  // const [loading, setLoading] = useState(false);
  // const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(formDatas);

  const handleChange = (e) => {
    setFormDatas({
      ...formDatas,
      [e.target.id]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());
    if (!formDatas.email || !formDatas.password) {
      // return setErrorMessage("Please fill out all fields.");
      return dispatch(signInFailure("Please fill out all fields."));
    }
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDatas),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/dashboard");
      }
    } catch (error) {
      dispatch(signInSuccess(error.message));
    }
  };
  return (
    <>
      <div className="min-w-full min-h-full">
        <div className="flex flex-col md:flex sm:row h-[100vh] w-[100%]  bg-[rgba(66,133,244,1)]  ">
          <div className="flex flex-col px-8 pt-5  w-[100%] bg-[rgba(255,255,255,0.3)]">
            <img
              src="/images/logo.png"
              alt="logo"
              width={200}
              height={100}
              className="items-center"
            />
            <p className="md:text-[28px] sm:text-[15px] font-[400] sm:mt-[2rem] md:mt-[2rem] w-full">
              This app has been a game-changer for my small business! Connecting
              my bank account was super easy, and now I can see all my cash flow
              and expenses in one place. The automated reports save me so much
              time I used to spend hours trying to make sense of my finances.
              The insights are also spot-on, helping me identify where I am
              overspending. Highly recommend this to any SME owner who wants to
              stay on top of their financial health without the stress!
            </p>
            <p className="md:text-[25px] sm:text-[16px] font-[600] py-3">
              .Jane O., Owner of FreshBakes Confectioneries
            </p>
          </div>

          <div className="w-[100%]  p-2 bg-white align-center">
            <div className="flex flex-col w-full justify-center">
              <h1 className="text-start text-[28px] font-[700] mb-4 text-black">
                Welcome back
              </h1>
              <p className="flex justify-center p-2 rounded-[30px]  w-full bottom-2 border-[1px] border-[rgba(66,133,244,1)] text-[rgba(0,0,0,1)] text-[20px] font-[500]">
                <FcGoogle className="flex text-center self-center mr-4 text-20" />
                <OAuth />
              </p>
              <p className="relative flex justify-center mt-10 border-[1px] border-[rgba(188,188,188,1)]">
                <span className="absolute flex justify-center text-center self-center text-[rgba(188,188,188,1)] text-[20px] bg-white px-10">
                  OR
                </span>
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col   mt-5">
                <label className="text-[20px] font[500] mb-2 mt-6 text-[rgba(0,0,0,1)]">
                  Email Address
                </label>
                <div className="flex text-start place-items-center  border-[1px] border-[rgba(66,133,244,1)] rounded-[8px]  p-1">
                  <FaRegEnvelope className="text-start justify-center pl-2  text-[35px]" />
                  <input
                    type="email"
                    id="email"
                    onChange={handleChange}
                    className="text-start text-[20px] w-full  p-2 outline-none"
                    placeholder="example@gmail.com"
                  />
                </div>
                <label className="text-[20px] font-[500] mb-2 mt-6 text-[rgba(0,0,0,1)]">
                  Password
                </label>
                <div className="flex text-start place-items-center  border-[1px] border-[rgba(66,133,244,1)] rounded-[8px]  p-1">
                  <PiLockKeyLight className="text-start justify-center pl-2  text-[35px]" />
                  <input
                    type="password"
                    id="password"
                    onChange={handleChange}
                    className="text-start text-[20px]  p-2 w-full outline-none"
                    placeholder="Enter your password...."
                  />
                </div>
                <Link href="/forget-password">
                  <p className="text-end justify-center pt-1 hover:underline">
                    Forgotten password?
                  </p>
                </Link>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex justify-center p-2 rounded-[30px]  w-full bottom-2 mt-8 text-]rgba(230,242,242,1)]   bg-[rgba(66,133,244,1)] text-[rgba(0,0,0,1)] text-[20px] font-[500]"
                >
                  {loading ? (
                    <>
                      <Spinner size="sm" />
                      <span className="pl-3">Loading...</span>
                    </>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </form>
              <div className="flex flex-col justify-center text-center mt-3 whitespace-nowrap">
                <p className="flex self-center">
                  <span className="text-[rgba(83,83,83,1)] text-[16px]">
                    Do not have an account?
                  </span>
                  <Link
                    to="/sign-up"
                    className="ml-2 text-[rgba(66,133,244,1)] text-[18px]"
                  >
                    Create an account
                  </Link>
                </p>
                <Link to="/" className="flex justify-center text-center   mt-1 gap-2  hover:underline">
                  <BsHouseFill className="  self-center" />
                  <span className="text-[15px] text-slate-500"></span>
                  Go back home
                </Link>
              </div>
              {error && (
                <Alert className="mt-5" color="failure">
                  {error.message}
                </Alert>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
