import React from "react";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import bg from "../assets/images/chocolate-hills.png";
import car from "../assets/units/toyota-car@2x.png";
import bg2 from "../assets/images/rice-terraces.png";
import car2 from "../assets/units/vios-car.png";
import booking from "../assets/sprites/booking.png";
import route from "../assets/sprites/map-location.png";
import calendar from "../assets/sprites/canceled.png";
import host from "../assets/images/become-host-bg.png";
import ride from "../assets/images/book-a-ride.png";
import book_car from "../assets/sprites/car-rental.png";
import find_car from "../assets/sprites/car-check.png";

const HowItWorks = () => {
  return (
    <>
      <div className="flex flex-col w-full h-fit bg-cover bg-no-repeat font-Messina-Sans">
        <Navbar />
        <div className="absolute w-full h-32 bg-gradient-to-br from-dark700 to-dark900 -z-10"></div>
      </div>
      <div className="w-full min-h-max">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 grid grid-col-1 gap-12 lg:grid-cols-2 relative">
          <div className="text-center relative">
            <img className=" absolute mt-16" src={bg} alt="chocolate hills" />
            <img className="absolute mt-80" src={car} alt="hilux" />
          </div>
          <div className="mt-24">
            <h1 className="py-0 text-9xl lg:text-[40px] font-extrabold text-black dark:text-white">
              How RentMo Works
            </h1>

            <h2 className="pt-10 mb-2 text-9xl lg:text-[20px] font-extrabold text-black dark:text-white">
              1. Sign Up and Apply
            </h2>
            <p>
              All you need to do is fill up the necessary information, provide a
              valid driver's license, and be approved in a matter of minutes!
            </p>
            <h2 className="pt-10 mb-2 text-9xl lg:text-[20px] font-extrabold text-black dark:text-white">
              2. Drive on Demand
            </h2>
            <p>
              Once approved, you can fill ou the required fields for booking.
              Book a vehicle for a few hours, for the whole day, or for a whole
              month!
            </p>
            <h2 className="pt-10 mb-2 text-9xl lg:text-[20px] font-extrabold text-black dark:text-white">
              3. Hop On The Driver's Seat and Cruise
            </h2>
            <p className="mb-8">
              Whether you're picking up the car or need it delivered, all you
              need to do is coordinate with the host and you're good to go!
            </p>

            <a
              href="/login"
              className="px-4 py-2 font-bold bg-yellow100 rounded-2xl"
            >
              Log-in or sign up
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-16  lg:px-8 grid grid-col-1 gap-12 lg:grid-cols-2 relative">
          <div className="mt-24">
            <h1 className="py-0 text-9xl lg:text-[40px] font-extrabold text-black dark:text-white">
              Why Choose RentMo?
            </h1>
            <div className="flex gap-7 mt-10">
              <div className="py-5">
                <img
                  className="rounded-2xl"
                  src={booking}
                  width="200"
                  height="150"
                />
              </div>
              <div className="">
                <h2 className="pt-4 mb-2 text-9xl lg:text-[20px] font-extrabold text-black dark:text-white">
                  Seamless booking experience
                </h2>
                <p>
                  5 From applying to booking your ride, the boking process is
                  fast and simple. Easily sort out the transportation of your
                  trip, all from your phone.
                </p>
              </div>
            </div>

            <div className="flex gap-7 mt-5">
              <div className="py-5">
                <img
                  className="rounded-2xl"
                  src={route}
                  width="230"
                  height="150"
                />
              </div>
              <div className="">
                <h2 className="pt-6 mb-2 text-9xl lg:text-[20px] font-extrabold text-black dark:text-white">
                  Get your rides, wherever and whenever
                </h2>
                <p>
                  Whenever your adventure takes you to the mountains, the beach,
                  or the city. RentMo has got you covered. Find vehicles for
                  each destination you're going to.
                </p>
              </div>
            </div>

            <div className="flex gap-7 mt-5">
              <div className="py-5">
                <img
                  className="rounded-2xl"
                  src={calendar}
                  width="180"
                  height="150"
                />
              </div>
              <div className="">
                <h2 className=" pt-8 mb-2 text-9xl lg:text-[20px] font-extrabold text-black dark:text-white">
                  Flexible cancellation
                </h2>
                <p className="mb-8">
                  Need to cancel? You can cancel your booking up to 24 hours
                  before the start of your trip without being charged any fees.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center relative pt-12">
            <img className=" absolute ml-32" src={bg2} alt="rice terraces" />
            <img className="absolute mt-72" src={car2} alt="vios" />
          </div>
        </div>
        <div className="flex justify-center items-center pb-32 pt-20">
          <div className="flex gap-7 items-center relative">
            <div className="relative">
              <img
                className="rounded-2xl items-center"
                src={host}
                width="600"
                alt="Host"
              />
              <div className="absolute inset-0 bg-black opacity-60 rounded-2xl"></div>
              <img
                className="absolute inset-0 flex justify-center items-center rounded-2xl pl-64 pt-7"
                src={book_car}
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center rounded-2xl">
                <p className="text-white text-center  text-xl pt-20 pl-10 pr-10">
                  Want to make some extra money on the side? Be a part of the
                  car-sharing marketplace on RentMo. List your vehicle and
                  become a host today!
                </p>
                <a
                  href="/login"
                  className="mt-6 px-4 py-2 font-bold bg-yellow100 rounded-2xl "
                >
                  Become a host
                </a>
              </div>
            </div>
            <div className="relative">
              <img className="rounded-2xl" src={ride} width="600" alt="Ride" />
              <div className="absolute inset-0 bg-yellow100 opacity-80 rounded-2xl"></div>
              <img
                className="absolute inset-0 flex justify-center items-center rounded-2xl pl-64 pt-7"
                src={find_car}
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center rounded-2xl">
                <p className="text-black font-bold text-center  text-xl pt-20 pl-10 pr-10">
                  Sign up today and start booking!
                </p>
                <p className="text-black font-bold text-center  text-xl pl-10 pr-10">
                  Travel like a boss with RentMo.
                </p>
                <a
                  href="/register"
                  className="mt-6 px-4 py-2 font-bold bg-black rounded-2xl text-white"
                >
                  Book a ride
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HowItWorks;
