'use client'

import { useForm } from "@/app/context/FormContext";
import React, { useEffect } from "react";

export const OrderInfo = () => {
  const { formData } = useForm();

 useEffect(() => {
    console.log("[OrderInfo] formData =", formData);
  }, [formData]);


  return (
    <div className="w-[600px] rounded-[37px] bg-secondary-bg py-4 px-8 text-main-text mt-10">
      <h1 className="text-center text-main-text text-3xl">Address</h1>
      <ul className="text-main-text"> 
        <li className='flex items-center justify-between gap-2'>
          <p>Your name</p>
          <div className='border-1 border-main-text/30 flex-1'></div>
          <p>{formData.name}</p>
        </li>
        <li className='flex items-center justify-between gap-2'>
          <p>City</p>
          <div className='border-1 border-main-text/30 flex-1'></div>
          <p>{formData.city}</p>
        </li>
        <li className='flex items-center justify-between gap-2'>
          <p>Street</p>
          <div className='border-1 border-main-text/30 flex-1'></div>
          <p>{formData.street}</p>
        </li>
        <li className='flex items-center justify-between gap-2'>
          <p>House/Apartment</p>
          <div className='border-1 border-main-text/30 flex-1'></div>
          <p>{formData.house}</p>
        </li>
        <li className='flex items-center justify-between gap-2'>
          <p>Phone Number</p>
          <div className='border-1 border-main-text/30 flex-1'></div>
          <p>{formData.phone}</p>
        </li>
      </ul>
      <h1 className="text-center text-main-text text-3xl">Your wishes</h1>
      <p>{formData.wishes}</p>
    </div>
  );
};
