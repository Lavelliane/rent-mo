import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';
import bg from '../assets/images/chocolate-hills.png';
import car from '../assets/units/toyota-car@2x.png';
import bg2 from '../assets/images/rice-terraces.png';
import car2 from '../assets/units/vios-car.png';
import booking from '../assets/sprites/booking.png';
import route from '../assets/sprites/map-location.png';
import calendar from '../assets/sprites/canceled.png';

import host from '../assets/images/become-host-bg.png';
import ride from '../assets/images/book-a-ride.png';
import book_car from '../assets/sprites/car-rental.png';
import find_car from '../assets/sprites/car-check.png';

const HowItWorks = () => {
	const location = useLocation();

	return (
		<div id='how-it-works'>
			<div className='w-full min-h-screen items-center justify-around xl:p-40 p-20'>
				<div className='flex xl:flex-row flex-col justify-evenly items-start gap-20'>
					<div className='w-full flex items-center justify-center'>
						<img className='translate-x-[50%] w-[539px] h-fit' src={bg} alt='chocolate hills' />
						<img className='-translate-x-[40%] translate-y-[50%] w-[650px] h-fit' src={car} alt='hilux' />
					</div>
					<div className='w-full flex flex-col'>
						<h1 className='mt-10 text-[40px] font-bold text-black dark:text-white'>How RentMo Works</h1>

						<h2 className='mb-2 text-xl font-bold text-black dark:text-white'>1. Sign Up and Apply</h2>
						<p className='mb-8 text-base'>
							All you need to do is fill up the necessary information, provide a valid driver's license, and be approved
							in a matter of minutes!
						</p>
						<h2 className='mb-2 text-xl font-bold text-black dark:text-white'>2. Drive on Demand</h2>
						<p className='mb-8 text-base'>
							Once approved, you can fill ou the required fields for booking. Book a vehicle for a few hours, for the
							whole day, or for a whole month!
						</p>
						<h2 className='mb-2 text-xl font-bold text-black dark:text-white'>
							3. Hop On The Driver's Seat and Cruise
						</h2>
						<p className='mb-8 text-base'>
							Whether you're picking up the car or need it delivered, all you need to do is coordinate with the host and
							you're good to go!
						</p>
						<a
							href='/login'
							className='px-6 py-4 font-bold text-md bg-yellow w-fit rounded-full shadow-md hover:scale-105 transition-transform'
						>
							Learn More
						</a>
					</div>
				</div>
			</div>
			<div className='w-full min-h-screen items-center justify-center xl:p-20 p-10'>
				<div className='flex 2xl:flex-row-reverse flex-col justify-evenly items-start gap-20'>
					<div className='w-full self-center flex items-center justify-center'>
						<img className='translate-x-[50%] w-[539px] h-fit' src={bg2} alt='terraces' />
						<img className='-translate-x-[50%] translate-y-[50%] w-[650px] h-fit' src={car2} alt='vios' />
					</div>
					<div className='w-full self-center flex flex-col gap-6 2xl:px-20 md:px-40 px-4'>
						<h1 className='text-[40px] font-bold text-black dark:text-white'>Why Choose RentMo?</h1>
						<div className='flex gap-6 h-fit items-center'>
							<img className='w-20 h-20' src={booking} />
							<div>
								<h2 className='mb-1 text-xl font-bold text-black dark:text-white'>Seamless booking experience</h2>
								<p className='text-base'>
									5 From applying to booking your ride, the boking process is fast and simple. Easily sort out the
									transportation of your trip, all from your phone.
								</p>
							</div>
						</div>
						<div className='flex gap-6 h-fit items-center'>
							<img className='w-20 h-20' src={route} />

							<div>
								<h2 className='mb-1 text-xl font-bold text-black dark:text-white'>
									Get your rides, wherever and whenever
								</h2>
								<p className='text-base'>
									Whenever your adventure takes you to the mountains, the beach, or the city. RentMo has got you
									covered. Find vehicles for each destination you're going to.
								</p>
							</div>
						</div>
						<div className='flex gap-6 h-fit items-center'>
							<img className='w-20 h-20' src={calendar} />
							<div>
								<h2 className='mb-1 text-xl font-bold text-black dark:text-white'>Flexible cancellation</h2>
								<p className='text-base'>
									Need to cancel? You can cancel your booking up to 24 hours before the start of your trip without being
									charged any fees.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowItWorks;
