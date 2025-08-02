"use client";
import React from "react";
import { ReservationInput } from "../../ui/ReservationInput";
import { Button } from "../../common/Button";

export const ReservationForm = () => {

  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [city, setCity] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");

  return (
    <form action="" className="text-main-text uppercase md:w-full">
      <ReservationInput
        placeholder="Japaneserestaurant@mail.com"
        id="Email"
        labelTitle="Enter your email"
        onChange={(e) => {setEmail(e.target.value)}}
        value={email}
      />
      <ReservationInput
        placeholder="Anastasia"
        id="name"
        labelTitle="Enter your name"
        onChange={(e) => {setName(e.target.value)}}
        value={name}
      />
      <ReservationInput
        placeholder="Chicago"
        id="city"
        labelTitle="City"
        onChange={(e) => {setCity(e.target.value)}}
        value={city}
      />
      <ReservationInput
        type="date"
        placeholder="Choose the date"
        id="date"
        labelTitle="date"
        onChange={(e) => {setDate(e.target.value)}}
        value={date}
      />
      <ReservationInput
        placeholder="Choose the time"
        id="time"
        labelTitle="time"
        onChange={(e) => {setTime(e.target.value)}}
        value={time}
      />

      <Button className="mt-10">Reserve a Table</Button>
    </form>
  );
};
