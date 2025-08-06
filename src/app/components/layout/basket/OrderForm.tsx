"use client";

import React from "react";

export const OrderForm = () => {
  return (
    <form className="bg-[#ffe4d6] p-6 rounded-xl flex flex-col gap-4 w-full max-w-md text-[#922f2f] font-light">
      <label className="uppercase text-xs tracking-wide">Your Name</label>
      <input
        type="text"
        placeholder="Anastasia"
        className="bg-[#fff2e5] rounded-full px-5 py-3 placeholder-[#caa6a6] focus:outline-none"
      />

      <label className="uppercase text-xs tracking-wide">City</label>
      <input
        type="text"
        placeholder="Chicago"
        className="bg-[#fff2e5] rounded-full px-5 py-3 border-2 placeholder-[#caa6a6] focus:outline-none"
      />

      <label className="uppercase text-xs tracking-wide">Street</label>
      <input
        type="text"
        placeholder="Michigan Avenue"
        className="bg-[#fff2e5] rounded-full px-5 py-3 placeholder-[#caa6a6] focus:outline-none"
      />

      <div className="flex gap-4">
        <div className="flex flex-col flex-1">
          <label className="uppercase text-xs tracking-wide">
            House/apartment
          </label>
          <input
            type="text"
            placeholder="32/01"
            className="bg-[#fff2e5] rounded-full px-5 py-3 placeholder-[#caa6a6] focus:outline-none"
          />
        </div>

        <div className="flex flex-col flex-1">
          <label className="uppercase text-xs tracking-wide">
            Phone number
          </label>
          <input
            type="text"
            placeholder="(777) 777 7777"
            className="bg-[#fff2e5] rounded-full px-5 py-3 placeholder-[#caa6a6] focus:outline-none"
          />
        </div>
      </div>

      <label className="uppercase text-xs tracking-wide">
        Write your wishes
      </label>
      <textarea
        placeholder="Enter your wishes regarding the menu and delivery and also write down your food allergies, if any."
        className="bg-[#fff2e5] rounded-2xl px-5 py-4 placeholder-[#caa6a6] h-24 resize-none focus:outline-none"
      />

      <button
        type="submit"
        className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-full font-semibold tracking-wide mt-4 transition"
      >
        ORDER
      </button>
    </form>
  );
};
