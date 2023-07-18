import React from 'react'
import BgHomepage from "../assets/images/Rent-mo-hero-bg.png";
import Navbar from "../components/Navbar.tsx";
import Button from "../components/Button.tsx";
import "../index.css";

const HeroPage = () => {
  return (
    <div
        className="h-screen w-full bg-cover bg-center flex flex-col font-Messina-Sans"
        style={{ backgroundImage: `url(${BgHomepage})` }}
      >
        <Navbar/>
        <div className=" translate-y-[50%] px-[14%] items-center justify-center text-center flex flex-col text-white gap-6">
          <h1 className="font-bold text-[9vh] select-none">Jump-Start You Next Adventure</h1>
          <p className="font-regular text-[3.8vh] select-none">
            Need a ride for your trip? Get the wheels you need in a matter of
            minutes right here!
          </p>
          <div className="bg-white shadow-searchbox w-full h-20 rounded-full flex content-center items-center p-2 justify-evenly">
            {/* Location */}
            
            <div className="flex flex-col justify-start items-start w-full ml-5">
              <label
                htmlFor="input-location"
                className="text-black font-bold text-sm"
              >
                Location
              </label>
              <div className="flex">
                <img className="h-6" src="../src/assets/logo/pin-loc.png"></img>
                <div className="flex border-b-2 border-white hover:border-dark200 transition-colors w-full">
                  <input
                    id="input-location"
                    type="search"
                    placeholder="Drop Location"
                    className="text-black bg-transparent text-lg focus:outline-none w-full"
                    />
                </div>
              </div>
            </div>
            <span className=" w-1 h-12 bg-dark400 mx-4"></span>
            {/* Start Trip */}
            <div className="flex flex-col justify-start items-start w-3/4">
              <label
                htmlFor="input-start-trip"
                className="text-black font-bold text-sm"
              >
                Start Trip
              </label>
              <div className="flex gap-4">
                <input
                  id="input-start-trip"
                  type="date"
                  placeholder="Drop Location"
                  className="text-black bg-transparent text-lg focus:outline-none"
                />
                  <input
                  id="input-start-trip-time"
                  type="time"
                  placeholder="Drop Location"
                  className="text-black bg-transparent text-lg focus:outline-none"
                />
              </div>
            </div>
            <span className=" w-1 h-12 bg-dark400 mx-4"></span>
            {/* End Trip */}
            <div className="flex flex-col justify-start items-start w-3/4">
              <label
                htmlFor="input-start-trip"
                className="text-black font-bold text-sm"
              >
                End Trip
              </label>
              <div className="flex gap-4">
                <input
                  id="input-end-trip"
                  type="date"
                  placeholder="Drop Location"
                  className="text-black bg-transparent text-lg focus:outline-none"
                />
                <input
                  id="input-end-trip-time"
                  type="time"
                  placeholder="Drop Location"
                  className="text-black bg-transparent text-lg focus:outline-none"
                />
              </div>
            </div>
            <div className="flex self-end ml-4">
                <Button/>
            </div>
         
          </div>
        </div>
      </div>
  )
}

export default HeroPage;