import React from "react";
import BgHomepage from "../assets/images/Rent-mo-hero-bg.png";
import Navbar from "../components/Navbar.tsx";
import Button from "../components/Button.tsx";
import "../index.css";

const HeroPage = () => {
  return (
    <>
      <div
        className="h-screen w-full bg-cover bg-center flex flex-col font-Messina-Sans"
        style={{ backgroundImage: `url(${BgHomepage})` }}
      >
        <Navbar />
        <div className=" translate-y-[50%] px-[14%] items-center justify-center text-center flex flex-col text-white gap-6">
          <h1 className="font-bold text-[9vh] select-none">
            Jump-Start Your Next Adventure
          </h1>
          <p className="font-regular text-[3.8vh] select-none">
            Need a ride for your trip? Get the wheels you need in a matter of
            minutes right here!
          </p>
         
        </div>
      </div>
      <div className="w-full h-screen bg-slate-500">

</div>
    </>
  );
};

export default HeroPage;
