"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function Frequent() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index); // Toggle the same index or close it
  };

  const faqs = [
    "What does this website do?",
    "How does this platform ensure data security?",
    "What are the pricing options?",
  ];

  const answers = [
    "It tracks income, expenses, and alerts you when spending exceeds limits.",
    "We use advanced encryption and security measures to protect your data.",
    "We offer free and premium plans to suit your needs.",
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-4 mb-6 h-[600px] bg-slate-50 p-1">
      <h1 className="text-[48px] ">FREQUENTLY ASKED QUESTIONS</h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="flex flex-col justify-center text-center w-[900px] h-[100px]  bg-[rgba(247,247,247,1)] shadow-lg rounded-lg"
        >
          <div className="flex justify-between text-center pt-6 px-6 ">
            <p className="text-[20px] font-[500]">{faq}</p>
            {active === index ? (
              <>
                <FaMinus
                  onClick={() => toggle(index)}
                  className="flex text-center justify-center self-center mb-2 bg-[rgba(66,133,244,0.7)] cursor-pointer text-white p-3 rounded-full text-[40px]"
                />
              </>
            ) : (
              <FaPlus
                onClick={() => toggle(index)}
                className="flex text-center justify-center self-center mb-2 bg-[rgba(66,133,244,0.7)] cursor-pointer text-white p-3 rounded-full text-[40px]"
              />
            )}
          </div>
          <span
            className={`text-start px-6 pb-6 text-[20px] font-[500] ${
              active === index ? "block" : "hidden"
            }`}
          >
            {answers[index]}
          </span>
        </div>
      ))}
    </div>
  );
}
