import React, { useState } from 'react';
import UpdateProfile from '../forms/UpdateProfileForm.tsx';
import { useUser } from '../../hooks/zustand/useUser.ts';
import ProfileCardText from '../components/ProfileCardText.tsx';

const ProfileCard = () => {
	const [buttonPopup, setButtonPopup] = useState(false);

	const store = useUser();
	const { user }: any = store?.user;
	const reviews = '0 reviews';
	const userName = `${user.firstName + ' ' + user.lastName}`;
	const yearJoined = `${user.createdAt.split('-')[0]}`;
	const profession = user.profession ? `${user.profession}` : 'Unknown'; //
	const email = `${user.email}`;
	const location =
		user.unitAddress || user.city || user.state || user.country
			? `${user.unitAddress + ', ' + user.city + ', ' + user.state + ', ' + user.country}`
			: 'No address provided';
	const language = user.language ? `${user.language}` : 'Unknown'; //
	const phoneNumber = `${user.phoneNumber}`;
	const isLicensed = user.isLicensed ? 'Licensed to Drive' : 'Not Licensed to Drive';
	const isVerified = user.isVerified ? 'Verified' : 'Not Verified';
	const badges = user.badge ? user.badge : 'No Badge to Display';

	return (
		<>
			<UpdateProfile trigger={buttonPopup} setTrigger={setButtonPopup}></UpdateProfile>
			<div className='self-start flex flex-col w-full lg:w-fit h-fit bg-white shadow-searchbox rounded-lg text-dark900 pt-10 mt-10 2xl:hover:scale-[102%] transition-all'>
				<div className='lg:hidden flex flex-col h-fit w-full sm:px-10 px-2 items-center mb-5'>
					<h1 className='text-3xl font-bold text-center'>{userName}</h1>
					<p className=' text-sm'>Joined {yearJoined}</p>
				</div>
				<div className=' self-center overflow-hidden flex justify-center w-32 h-32 rounded-full shadow-xl'>
					<img className='object-cover select-none w-40' src='../src/assets/logo/avatar-logo.png' alt='logo' />
				</div>
				<button
					onClick={() => setButtonPopup(true)}
					className='self-center font-bold text-yellow300 hover:text-yellow transition-colors mt-4'
				>
					Update Profile
				</button>
				<div className='flex flex-col w-full lg:w-96 h-fit sm:px-10 px-2 py-5 gap-2 text-sm overflow-hidden'>
					<ProfileCardText image='../src/assets/logo/icons8-phone.png' text={phoneNumber} />
					<ProfileCardText image='../src/assets/logo/icons8-email.png' text={email} />
					<ProfileCardText image='../src/assets/logo/icons8-house.png' text={location} />
					<ProfileCardText image='../src/assets/logo/icons8-star.png' text={reviews} />
					<ProfileCardText image='../src/assets/logo/icons8-portfolio.png' text={profession} />
					<ProfileCardText image='../src/assets/logo/icons8-language.png' text={language} />
					<ProfileCardText image='../src/assets/logo/icons8-driver-license.png' text={isLicensed} />
					<ProfileCardText image='../src/assets/logo/icons8-verified.png' text={isVerified} />

					<span className='self-center my-5 w-full h-[2px] bg-dark500'></span>
					<div className='flex items-center justify-center w-full  gap-1'>
						<img className='w-8' src='../src/assets/logo/icons8-verified-badge.png' alt='logo' />
						<h1 className='font-bold no-select'>Badges</h1>
					</div>
					<div className='flex items-center justify-center w-full mt-5'>
						<h1>{badges}</h1>
					</div>
					<div className='text-xs text-center my-5'>
						<p className='font-regular text-dark700'>
							{' '}
							<a href='#learn-more' className='font-semibold text-dark900 hover:text-yellow300'>
								Learn more
							</a>{' '}
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
