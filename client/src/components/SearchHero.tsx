import React from "react";
import Button from "./Button";

const SearchHero = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-white shadow-searchbox w-fit h-20 rounded-full content-center items-center p-2 justify-evenly self-center xl:flex hidden ">
        {/* Location */}
        <div className="flex flex-col justify-start items-start w-72 ml-5">
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
                className="text-black bg-transparent text-lg focus:outline-none w-full fill-none in"
              />
            </div>
          </div>
        </div>
        <span className=" w-1 h-14 bg-dark400 mx-2 rounded-full"></span>
        {/* Start Trip */}
        <div className="flex flex-col justify-start items-start w-72">
          <label
            htmlFor="input-start-trip"
            className="text-black font-bold text-sm"
          >
            Start Trip
          </label>
          <div className="flex gap-2">
            <input
              id="input-start-trip"
              type="date"
              placeholder="Drop Location"
              className="text-black bg-transparent text-lg focus:outline-none w-[136px]"
            />
            <input
              id="input-start-trip-time"
              type="time"
              placeholder="Drop Location"
              className="text-black bg-transparent text-lg focus:outline-none w-[118px]"
            />
          </div>
        </div>
        <span className=" w-1 h-14 bg-dark400 mx-2 rounded-full"></span>
        {/* End Trip */}
        <div className="flex flex-col justify-start items-start w-72">
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
              className="text-black bg-transparent text-lg focus:outline-none w-[136px]"
            />
            <input
              id="input-end-trip-time"
              type="time"
              placeholder="Drop Location"
              className="text-black bg-transparent text-lg focus:outline-none w-[118px]"
            />
          </div>
        </div>
        <div className="flex self-end ml-4">
          <Button />
        </div>
      </div>
      <div className="flex-col xl:hidden w-full min-w-fit max-w-sm h-fit bg-white mx-6 p-6 rounded-lg shadow-searchbox ">
        {/* Location */}
        <div className="flex flex-col w-full items-start gap-2">
          <label
            htmlFor="input-location"
            className="text-black font-bold text-sm"
          >
            Location
          </label>
          <div className="flex w-full">
            <img className="h-6" src="../src/assets/logo/pin-loc.png"></img>
            <div className="flex border-b-2 border-white hover:border-dark200 transition-colors w-full">
              <input
                id="input-location"
                type="search"
                placeholder="Drop Location"
                className="text-black bg-transparent focus:outline-none w-full md:text-lg text-base px-2"
              />
            </div>
          </div>
        </div>
        <span className="flex w-full h-[2px] bg-dark400 rounded-full my-3"></span>
        {/* Start Trip */}
        <div className="flex flex-col justify-start items-start w-full gap-2">
          <label
            htmlFor="input-start-trip"
            className="text-black font-bold text-sm"
          >
            Start Trip
          </label>
          <div className="flex md:flex-row w-full md:gap-16 gap-2 flex-col">
            <input
              id="input-start-trip"
              type="date"
              placeholder="Drop Location"
              className="text-black bg-transparent focus:outline-none w-full md:text-lg text-base"
            />
            <input
              id="input-start-trip-time"
              type="time"
              placeholder="Drop Location"
              className="text-black bg-transparent focus:outline-none w-5/6 md:text-lg text-base"
            />
          </div>
        </div>
        <span className="flex w-full h-[2px] bg-dark400 rounded-full my-3"></span>
        {/* End Trip */}
        <div className="flex flex-col justify-start items-start w-full gap-2">
          <label
            htmlFor="input-start-trip"
            className="text-black font-bold text-sm"
          >
            End Trip
          </label>
          <div className="flex flex-col md:flex-row md:gap-16 gap-2 w-full">
            <input
              id="input-end-trip"
              type="date"
              placeholder="Drop Location"
              className="text-black bg-transparent focus:outline-none w-full md:text-lg text-base"
            />
            <input
              id="input-end-trip-time"
              type="time"
              placeholder="Drop Location"
              className="text-black bg-transparent focus:outline-none w-5/6 md:text-lg text-base"
            />
          </div>
        </div>
        <div className="flex justify-center w-full mt-4">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default SearchHero;
