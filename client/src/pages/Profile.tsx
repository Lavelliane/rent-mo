import Navbar from "../components/Navbar.tsx";
import Reviews from "../components/Reviews.tsx";
import ProfileCard from "../components/ProfileCard.tsx";
import { ButtonNoFillRounded } from "../components/Buttons.tsx";
import Footer from "../components/Footer.tsx";
import { useUser } from "../../hooks/zustand/useUser.ts";

const Profile = () => {
	const store = useUser();
	const { user }: any = store?.user;
	console.log(user);
	const userName = `${user.firstName + " " + user.lastName}`;
	const yearJoined = `${user.createdAt.split("-")[0]}`;
	const aboutMe = `${user.aboutMe}`;

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
									<input className='block p-2 no-select w-24' name='listing' value={listing + " Listing/s"}></input>
									<a href='#view-listings' className='text-xs text-dark600 underline underline-offset-2'>
										View Listings
									</a>
								</div>
							</div>
						</div>
						<div className='flex flex-col sm:flex-row items-center mt-10 justify-center lg:gap-10 gap-5'>
							<ButtonNoFillRounded text='Report Listing' />
							<ButtonNoFillRounded text='Terms and Regulations' />
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
