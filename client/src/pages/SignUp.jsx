"use client";
import { FcGoogle } from "react-icons/fc";
import { FaRegEnvelope } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { PiLockKeyLight } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import OAuth from "../components/OAuth";
import { Alert, Spinner } from "flowbite-react";

export default function SignUp() {
  const [formDatas, setFormDatas] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [signUpSuccess, setSignUpSuccess] = useState(false)
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  console.log(formDatas);

  const handleChange = (e) => {
    setFormDatas({
      ...formDatas,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formDatas.companyName ||
      !formDatas.email ||
      !formDatas.country ||
      !formDatas.password
    ) {
      return setErrorMessage("Please fill out all fields.");
    }
    // if (
    //   formDatas.companyName ||
    //   formDatas.email ||
    //   formDatas.country ||
    //   formDatas.password
    // ) {
    //   return setErrorMessage("Please fill out all fields.");
    // }

    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDatas),
      });
      const datas = await res.json();
      console.log(datas);
      if (datas.success === false) {
        return setErrorMessage(datas.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="min-w-full min-h-full ">
        <div className="flex flex-col sm:flex md:flex-row h-[100vh] w-[100%] bg-[rgba(66,133,244,1)]">
          <div className="flex flex-col px-8 w-[100%] pt-6 bg-[rgba(255,255,255,0.3)]">
            <img
              src="/images/logo.png"
              alt="logo"
              width={200}
              height={100}
              className="items-center"
            />
            <p className="text-[20px] font-[400] sm:mt-[2rem] md:mt-[6rem] w-full">
              This app has been a game-changer for my small business! Connecting
              my bank account was super easy, and now I can see all my cash flow
              and expenses in one place. The automated reports save me so much
              time I used to spend hours trying to make sense of my finances.
              The insights are also spot-on, helping me identify where I am
              overspending. Highly recommend this to any SME owner who wants to
              stay on top of their financial health without the stress!
            </p>
            <p className="text-[25px] font-[600] py-3">
              .Jane O., Owner of FreshBakes Confectioneries
            </p>
          </div>

          <div className="w-full  bg-white align-center">
            <div className="flex flex-col w-full justify-center px-32 pt-7   ">
              <h1 className="text-start text-[28px] font-[700] mb-4 text-black">
                Create an account
              </h1>
              <div className="flex justify-center p-2 rounded-[30px]  w-full bottom-2 border-[1px] border-[rgba(66,133,244,1)] text-[rgba(0,0,0,1)] text-[20px] font-[500]">
                <FcGoogle className="flex text-center self-center mr-4 text-20" />
                <OAuth />
              </div>
              <p className="relative flex justify-center mt-10 border-[1px] border-[rgba(188,188,188,1)]">
                <span className="absolute flex justify-center text-center self-center text-[rgba(188,188,188,1)] text-[20px] bg-white px-10">
                  OR
                </span>
              </p>
              <form
                onSubmit={handleSubmit}
                action=""
                className="flex flex-col mt-5"
              >
                <label className="text-[20px] font[500] mb-1 text-[rgba(0,0,0,1)]">
                  Company Name
                </label>
                <div className="flex text-start place-items-center  border-[1px] border-[rgba(66,133,244,1)] rounded-[8px]  p-1">
                  <BsFillPeopleFill className="text-start justify-center pl-2  text-[35px]" />
                  <input
                    type="text"
                    
                    id="companyName"
                    onChange={handleChange}
                    className="text-start text-[20px]  p-2 w-full border-none outline-none"
                    placeholder="Type your company name...."
                  />
                </div>

                <label className="text-[20px] font[500] mb-1 mt-4 text-[rgba(0,0,0,1)]">
                  Email Address
                </label>
                <div className="flex text-start place-items-center  border-[1px] border-[rgba(66,133,244,1)] rounded-[8px]  p-1">
                  <FaRegEnvelope className="text-start justify-center pl-2  text-[35px]" />
                  <input
                    type="email"
                    id="email"
                    onChange={handleChange}
                    
                    className="text-start text-[20px]  p-2 w-full outline-none"
                    placeholder="example@gmail.com"
                  />
                </div>
                <label className="text-[20px] font[500] mb-1 mt-4 text-[rgba(0,0,0,1)]">
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
                <label className="text-[20px] font[500] mb-1 mt-4 text-[rgba(0,0,0,1)]">
                  Country of residence
                </label>
                <div className="flex text-start place-items-center  border-[1px] border-[rgba(66,133,244,1)] rounded-[8px]  p-1">
                  <select
                    id="country"
                    onChange={handleChange}
                    
                    className="p-2  text-[20px] w-full"
                  >
                    <option value=""> e.g Nigeria</option>
                    <option value="Canada">Canada</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Algeria">Algeria</option>
                    <option value="Angola">Angola</option>
                    <option value="Benin">Benin</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cabo Verde">Cabo Verde</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Central African Republic">
                      Central African Republic
                    </option>
                    <option value="Chad">Chad</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo (Congo-Brazzaville)</option>
                    <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Egypt">Egypt</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Eswatini">
                      Eswatini (fmr. "Swaziland")
                    </option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libya">Libya</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Mali">Mali</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Niger">Niger</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="São Tomé and Príncipe">
                      São Tomé and Príncipe
                    </option>
                    <option value="Senegal">Senegal</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Sudan">South Sudan</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Togo">Togo</option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="flex justify-center p-4 rounded-[30px]  w-full bottom-2 mt-5  text-[rgba(230,242,242,1)]  bg-[rgba(66,133,244,1)] text-[rgba(0,0,0,1)] text-[20px] font-[500]"
                >
                  {loading ? (
                    <>
                      <Spinner size="sm" />
                      <span className="pl-3">Loading...</span>
                    </>
                  ) : (
                    "Create an account "
                  )}
                </button>
              </form>
              <div className="flex justify-center text-center py-3  whitespace-nowrap">
                <p className="text-[rgba(83,83,83,1)] text-[16px]">
                  Already have an account?
                </p>
                <Link
                  to="/sign-in"
                  className="ml-2 text-[rgba(66,133,244,1)] text-[18px]"
                >
                  Sign in
                </Link>
              </div>
              {errorMessage && signUpSuccess && (
                <Alert className="mt-5" color="failure">
                  {errorMessage}
                </Alert>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
