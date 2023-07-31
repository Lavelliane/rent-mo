import React, { useState } from "react";
import UpdateProfile from "../components/UpdateProfile";
import { useUser } from "../../hooks/zustand/useUser.ts";

const ProfileCard = () => {
	const [buttonPopup, setButtonPopup] = useState(false);

	const store = useUser();
	const { user }: any = store?.user;
	const reviews = "0 reviews";
	const userName = `${user.firstName + " " + user.lastName}`;
	const yearJoined = "2023";
	const profession = "Freelance Driver"; //
	const isVerified = "Verified User";
	const location = `${user.city + ", " + user.country}`;
	const language = "Filipino, English"; //
	const number = `${user.phoneNumber}`;
	const isLicensed = "Licensed to Drive";
	const badges = "No Badge to Display";

	return (
		<>
			<UpdateProfile trigger={buttonPopup} setTrigger={setButtonPopup}></UpdateProfile>
			<div className='flex flex-col w-full lg:w-fit h-fit bg-white shadow-searchbox rounded-lg text-dark900 pt-10 mt-10 2xl:hover:scale-[102%] transition-all'>
				<div className='lg:hidden flex flex-col h-fit w-full sm:px-10 px-2 items-center mb-5'>
					<h1 className='text-3xl font-bold text-center'>{userName}</h1>
					<p className=' text-sm'>Joined {yearJoined}</p>
				</div>
				<div className=' self-center overflow-hidden flex justify-center w-32 h-32 rounded-full shadow-xl'>
					<img className='object-cover select-none w-40' src='../src/assets/logo/avatar-logo.png' alt='logo' />
				</div>

				<button
					onClick={() => setButtonPopup(true)}
					className='self-center font-bold text-yellow300 hover:text-yellow transition-colors mt-4'>
					Update Profile
				</button>
				<div className='flex flex-col w-full lg:w-96 h-fit sm:px-10 px-2 py-5 gap-2 text-sm overflow-hidden'>
					<div className='flex items-center w-full gap-1'>
						<img className='h-8' src='../src/assets/logo/icons8-star.png' alt='logo' />
						<input
							className='block p-2 w-3/4 no-select'
							type='text'
							name='reviews'
							// onChange={handleInputChange}
							value={reviews}></input>
					</div>
					<div className='flex items-center w-full gap-1'>
						<img className='h-8' src='../src/assets/logo/icons8-portfolio.png' alt='logo' />
						<input
							className='block p-2 no-select w-fit'
							name='profession'
							// onChange={handleInputChange}
							value={profession}></input>
					</div>
					<div className='flex items-center w-full gap-1'>
						<img className='h-8' src='../src/assets/logo/icons8-verified.png' alt='logo' />
						<input
							className='block p-2 w-3/4 no-select'
							type='text'
							name='isVerified'
							// onChange={handleInputChange}
							value={isVerified}></input>
					</div>
					<div className='flex items-center w-full gap-1'>
						<img className='h-8' src='../src/assets/logo/icons8-house.png' alt='logo' />
						<input
							className='block p-2 w-3/4 no-select'
							type='text'
							name='location'
							// onChange={handleInputChange}
							value={location}></input>
					</div>
					<div className='flex items-center w-full gap-1'>
						<img className='h-8' src='../src/assets/logo/icons8-language.png' alt='logo' />
						<input
							className='block p-2 no-select w-max-fit'
							type='text'
							name='language'
							// onChange={handleInputChange}
							value={language}></input>
					</div>
					<div className='flex items-center w-full gap-1'>
						<img className='h-8' src='../src/assets/logo/icons8-phone.png' alt='logo' />
						<input
							className='block p-2 w-3/4 no-select'
							type='text'
							name='number'
							// onChange={handleInputChange}
							value={number}></input>
					</div>
					<div className='flex items-center w-full gap-1'>
						<img className='h-8' src='../src/assets/logo/icons8-driver-license.png' alt='logo' />
						<input
							className='block p-2 w-3/4 no-select gap-1'
							type='text'
							name='isLicensed'
							// onChange={handleInputChange}
							value={isLicensed}></input>
					</div>
					<span className='self-center my-5 w-full h-[2px] bg-dark500'></span>
					<div className='flex items-center justify-center w-full  gap-1'>
						<img className='w-8' src='../src/assets/logo/icons8-verified-badge.png' alt='logo' />
						<p className='font-bold no-select'>Badges</p>
					</div>
					<div className='flex items-center justify-center w-full mt-5'>
						<h1>{badges}</h1>
					</div>
					<div className='text-xs text-center my-5'>
						<p className='font-regular text-dark700'>
							{" "}
							<a href='#learn-more' className='font-semibold text-dark900 hover:text-yellow300'>
								Learn more
							</a>{" "}
							about how badges can help you be a RentMo rockstar and can help making RentMo more secure against
							fraudulent listers.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfileCard;
