import React, { useState } from "react";
import Navbar from "../components/Navbar.tsx";
import Reviews from "../components/Reviews.tsx";
import ProfileCard from "../components/ProfileCard.tsx";
import Footer from "../components/Footer.tsx";

const Profile = () => {
  // const [inputValue, setInputValue] = useState('');

  // const handleInputChange = (event: any) => {
  //     setInputValue();
  //   };

  const userName = "Vincent Abella";
  const yearJoined = "2023";
  const aboutMe =
    "Lorem ipsum dolor sit amet, consectetur  consectetur  consectetur  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea";
  const language = "Filipino, English";
  const profession = "Freelance Driver";
  const listing = "5";

  return (
    <>
        <div className="flex flex-col w-full h-fit pb-20 bg-cover bg-no-repeat font-Messina-Sans">
          <Navbar />
          <div className="absolute w-full 3xl:h-80 h-72 bg-gradient-to-br from-dark700 to-dark900 -z-10"></div>
          <div className="justify-center flex w-full h-full px-44 relative text-white gap-14">
          <ProfileCard />
          <div className="self-start flex flex-col mt-16 3xl:w-3/5 w-4/6 h-5/6">
            <h1 className="text-6xl font-bold">{userName}</h1>
            <p className="ml-4 text-xl">Joined {yearJoined}</p>
            <div className="mt-10 text-dark900 text-lg">
              <div className="flex flex-col w-full h-fit">
                <p className="font-bold">About me</p>
                <textarea
                  rows={5}
                  className="text-base no-select px-4 mt-5 w-full h-fit text-justify resize-none disable select-none overflow-hidden"
                  value={aboutMe}
                ></textarea>
              </div>
              <div className="flex w-full h-fit text-base mt-5">
                <div className="flex w-3/5 items-center">
                  <img
                    className="h-8"
                    src="../src/assets/logo/icons8-language.png"
                    alt="logo"
                  />
                  <input
                    className="block p-2 no-select w-full"
                    type="text"
                    name="language"
                    // onChange={handleInputChange}
                    value={language}
                  ></input>
                </div>
                <span className=" xl:mx-2 md:mt-0 md:w-[2px] md:h-10 bg-dark500 md:mx-5 w-3/4 h-[1px] mt-14"></span>
                <div className="flex w-3/5 items-center">
                  <img
                    className="h-8"
                    src="../src/assets/logo/icons8-portfolio.png"
                    alt="logo"
                  />
                  <input
                    className="block p-2 no-select w-full"
                    name="profession"
                    // onChange={handleInputChange}
                    value={profession}
                  ></input>
                </div>
                <span className=" xl:mx-2 md:mt-0 md:w-[2px] md:h-10 bg-dark500 md:mx-5 w-3/4 h-[1px] mt-14"></span>
                <div className="flex w-full items-center">
                  <img
                    className="h-8"
                    src="../src/assets/logo/icons8-car.png"
                    alt="logo"
                  />
                  <input
                    className="block p-2 no-select w-24"
                    name="listing"
                    // onChange={handleInputChange}
                    value={listing + " Listing/s"}
                  ></input>
                  <a
                    href="#view-listings"
                    className="text-xs text-dark600 underline underline-offset-2"
                  >
                    View Listings
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-10 gap-10">
              <a
                href="#report-listings"
                className="rounded-full px-4 py-2 ring-1 ring-yellow300 text-yellow300 hover:text-yellow hover:ring-yellow font-bold drop-shadow-sm transition-colors"
              >
                Report Listing
              </a>
              <a
                href="#terms-and-regulations"
                className="rounded-full px-4 py-2 ring-1 ring-yellow300 text-yellow300 hover:text-yellow hover:ring-yellow font-bold drop-shadow-sm transition-colors"
              >
                Terms and Regulations
              </a>
            </div>
            <span className="mt-7 mb-5 xl:w-full xl:h-[2px] bg-dark500"></span>
            <Reviews />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Profile;
