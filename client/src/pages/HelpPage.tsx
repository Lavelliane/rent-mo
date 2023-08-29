import React from "react";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import image_1 from "../assets/images/bacolod.png";
import image_2 from "../assets/images/cdo.png";
import image_3 from "../assets/images/cebu.png";
import image_4 from "../assets/images/davao.png";
import image_5 from "../assets/images/iloilo@2x.png";
import { useUser } from "hooks/zustand/useUser.ts";

const HelpPage = () => {
  const quickGuide = [
    {
      color: "bg-red-300",
      description: "Getting started on RentMo",
      link: "/getting-started",
      imageSrc: image_1,
    },
    {
      color: "bg-blue-300",
      description: "Setting up your account",
      link: "/setting-up",
      imageSrc: image_2,
    },
    {
      color: "bg-green-300",
      description: "How to access and manage your account",
      link: "/manage-account",
      imageSrc: image_3,
    },
    {
      color: "bg-yellow100",
      description: "Help with a reservation",
      link: "/reserving-help",
      imageSrc: image_4,
    },
    {
      color: "bg-purple-300",
      description: "Setting up two-verification process",
      link: "/two-verification",
      imageSrc: image_5,
    },
  ];

  // const store = useUser();
  // const { user = {} }: any = store?.user || {};
  return (
    <>
      <div className="flex flex-col w-full h-fit pb-20 bg-cover bg-no-repeat font-Messina-Sans">
        <Navbar />
        <div className="absolute w-full h-32 bg-gradient-to-br from-dark700 to-dark900 -z-10"></div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="py-0 text-9xl lg:text-[20px] font-extrabold text-black dark:text-white">
          Hi! Need help?
        </h1>
        <div className="w-full h-fit flex relative items-center justify-center self-center ">
          {/* Search bar */}
          <input
            type="text"
            placeholder="     Search how-tos and more"
            className="p-3 mt-4 border bg-blue-gray-100 border-gray-300 rounded-full w-full max-w-md placeholder-black"
          />
        </div>
      </div>
      <div className="mt-8">
        <hr className="w-9/12 border-gray-500 mx-auto" />{" "}
      </div>
      <div className="w-9/12 mt-8 mx-auto bg-white rounded-lg border border-gray-300 p-8 flex justify-between items-center">
        <div className="flex relative">
          <h2 className="text-xl font-semibold text-gray-800">
            Don't fret, we got you!
          </h2>
          <p className="ml-10 mt-1">
            Get help with you reservations, account, and more.
          </p>
        </div>

        <a
          href="/login"
          className="px-4 py-2 bg-yellow100 text-white rounded-full"
        >
          {/* {store.user ? "Log-in or sign up" : "heheh"} */}
          Log-in or sign up
        </a>
      </div>
      <div className="mt-8">
        <hr className="w-9/12 border-gray-500 mx-auto" />{" "}
      </div>

      <div className="mx-auto flex flex-col items-center mt-8 mb-8">
        <div className="flex items-center">
          <h2 className="text-9xl lg:text-[30px] font-semibold text-gray-800">
            Quick starter guide
          </h2>
        </div>
        <div className="flex mt-4">
          {quickGuide.map((item, index) => (
            <div key={index} className="flex flex-col my-auto">
              <a
                className={`w-64 h-64 ${item.color} rounded-xl mb-2 mr-8 hover:shadow-2xl hover:border border-gray justify-between`}
                href={item.link}
              >
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src={item.imageSrc}
                />
              </a>
              <div
                className={`w-72 self-center h-12 flex items-center justify-left rounded-xl p-2 whitespace-pre-line font-bold`}
              >
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HelpPage;
