"use client";

import { useForm } from "@/app/context/FormContext";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const OrderForm = () => {
  const router = useRouter();
  const { formData, setFormData } = useForm();
  const [form, setForm] = useState({
    name: "",
    city: "",
    street: "",
    house: "",
    phone: "",
    wishes: ""
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  };



  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.city.trim()) newErrors.city = "City is required.";
    if (!form.street.trim()) newErrors.street = "Street is required.";
    if (!form.house.trim()) newErrors.house = "House number is required.";
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^(\+7|8)\d{10}$/.test(form.phone.replace(/[\s()-]/g, ""))) {
      newErrors.phone = "Phone number is invalid.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setFormData(form);
    router.push('/order')
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#ffe4d6] p-6 rounded-xl flex flex-col gap-4 w-full max-w-md text-[#922f2f] font-light">
      {[
        { name: "name", label: "Your Name", placeholder: "Anastasia", type: "text" },
        { name: "city", label: "City", placeholder: "Chicago", type: "text" },
        { name: "street", label: "Street", placeholder: "Michigan Avenue", type: "text" },
      ].map(({ name, label, placeholder, type }) => (
        <div key={name}>
          <label className="uppercase text-xs tracking-wide">{label}</label>
          <input
            name={name}
            type={type}
            value={(form)[name] ?? ""}
            onChange={handleChange}
            placeholder={placeholder}
            className="bg-[#fff2e5] rounded-full px-5 py-3 w-full placeholder-[#caa6a6] focus:outline-none"
          />
          {errors[name] && <p className="text-sm text-red-600">{errors[name]}</p>}
        </div>
      ))}

      <div className="flex gap-4">
        {[
          { name: "house", label: "House/apartment", placeholder: "32/01", type: "text" },
          { name: "phone", label: "Phone number", placeholder: "+77777777777", type: "tel" },
        ].map(({ name, label, placeholder, type }) => (
          <div key={name} className="flex flex-col flex-1">
            <label className="uppercase text-xs tracking-wide">{label}</label>
            <input
              name={name}
              type={type}
              value={(form as any)[name] ?? ""}
              onChange={handleChange}
              placeholder={placeholder}
              className="bg-[#fff2e5] rounded-full px-5 py-3 placeholder-[#caa6a6] focus:outline-none"
            />
            {errors[name] && <p className="text-sm text-red-600">{errors[name]}</p>}
          </div>
        ))}
      </div>

      <label className="uppercase text-xs tracking-wide">Write your wishes</label>
      <textarea
        name="wishes"
        value={form.wishes}
        onChange={handleChange}
        placeholder="Enter your wishes..."
        className="bg-[#fff2e5] rounded-2xl px-5 py-4 h-24 resize-none placeholder-[#caa6a6] focus:outline-none"
      />

      <button type="submit" className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-full font-semibold tracking-wide mt-4 transition">
        ORDER
      </button>
    </form>
  );
};
