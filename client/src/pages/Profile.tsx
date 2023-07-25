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

	const listing = "5";

	return (
		<>
			<div className='flex flex-col w-full h-fit pb-20 bg-cover bg-no-repeat font-Messina-Sans'>
				<Navbar />
				<div className='absolute w-full h-72 bg-gradient-to-br from-dark700 to-dark900 -z-10'></div>
				<div className='items-center flex lg:flex-row flex-col w-full h-full 2xl:px-44 sm:px-12 px-4 relative text-white 2xl:gap-20 gap-10'>
					<ProfileCard />
					<div className='self-start flex flex-col lg:mt-20 w-full h-full'>
						<div className='hidden lg:flex flex-col h-20 w-full overflow-hidden'>
							<h1 className='text-5xl font-bold whitespace-nowrap text-ellipsis'>{userName}</h1>
							<p className='ml-4 text-xl'>Joined {yearJoined}</p>
						</div>
						<div className='mt-8 text-dark900 lg:text-lg text-base'>
							<div className='flex flex-col w-full h-fit'>
								<p className='font-bold'>About me</p>
								<textarea
									rows={5}
									className='lg:text-base text-sm no-select px-4 mt-5 w-full h-fit text-justify resize-none disable select-none overflow-hidden'
									value={aboutMe}></textarea>
							</div>
							<div className='flex w-full h-fit text-base mt-5'>
								<div className='flex w-full items-center'>
									<img className='h-8' src='../src/assets/logo/icons8-car.png' alt='logo' />
									<input
										className='block p-2 no-select w-24'
										name='listing'
										// onChange={handleInputChange}
										value={listing + " Listing/s"}></input>
									<a href='#view-listings' className='text-xs text-dark600 underline underline-offset-2'>
										View Listings
									</a>
								</div>
							</div>
						</div>
						<div className='flex flex-col sm:flex-row items-center mt-10 justify-center lg:gap-10 gap-5'>
							<a
								href='#report-listings'
								className='rounded-full px-4 py-2 ring-1 ring-yellow300 text-yellow300 hover:text-yellow hover:ring-yellow font-bold drop-shadow-sm transition-colors'>
								Report Listing
							</a>
							<a
								href='#terms-and-regulations'
								className='rounded-full px-4 py-2 ring-1 ring-yellow300 text-yellow300 hover:text-yellow hover:ring-yellow font-bold drop-shadow-sm transition-colors'>
								Terms and Regulations
							</a>
						</div>
						<span className='mt-7 mb-5 w-full h-[2px] bg-dark500'></span>
						<Reviews />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Profile;
