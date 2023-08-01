import React, { useState } from "react";
import BgHomepage from "../assets/images/Rent-mo-hero-bg.png";
import axios from "axios";
import { ButtonLinkFill, ButtonFill, GoogleButton } from "../components/Buttons.tsx";
import Footer from "../components/Footer";

interface UserSignUp {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}
const initialUserState: UserSignUp = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
};

function Registration() {
	const [user, setUser] = useState(initialUserState);

	const handleSubmit = async (e: React.FormEvent): Promise<void> => {
		e.preventDefault();
		try {
			const req = await axios.post("/api/v1/auth/register", user);
			console.log(req.data);
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (e: any) => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	console.log(user);

	return (
		<>
			<div
				className='h-screen bg-gradient-to-tl bg-cover bg-center w-full py-16 px-4 font-Messina-Sans'
				style={{ backgroundImage: `url(${BgHomepage})` }}>
				<div className='flex flex-col items-center justify-center'>
					<img className=' h-20 inline self-center no-select' src='../src/assets/logo/RentMo-logo.svg'></img>
					<form onSubmit={handleSubmit} className='bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16'>
						<p
							tabIndex={0}
							role='heading'
							aria-label='Login to your account'
							className='text-2xl font-extrabold leading-6 text-gray-800'>
							Start your journey here
						</p>
						<GoogleButton />
						<div className='w-full flex items-center justify-between py-5'>
							<hr className='w-full bg-dark600' />
							<p className='text-base font-medium leading-4 px-2.5 text-dark600'>OR</p>
							<hr className='w-full bg-dark600' />
						</div>
						<div className='flex flex-col gap-5 sm:flex-row'>
							<div className='flex flex-col w-full'>
								<label htmlFor='firstName' className='text-sm font-medium leading-none text-gray-800'>
									{" "}
									First Name{" "}
								</label>
								<input
									onChange={handleChange}
									value={user.firstName}
									name='firstName'
									id='firstName'
									aria-labelledby='text'
									type='text'
									className='bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2'
									placeholder='e.g: Juan '
								/>
							</div>
							<div className='flex flex-col w-full'>
								<label htmlFor='lastName' className='text-sm font-medium leading-none text-gray-800'>
									{" "}
									Last Name{" "}
								</label>
								<input
									onChange={handleChange}
									value={user.lastName}
									name='lastName'
									aria-labelledby='text'
									type='text'
									className='bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2'
									placeholder='e.g: Cruz '
								/>
							</div>
						</div>
						<div className='mt-6  w-full'>
							<label htmlFor='email' className='text-base font-medium leading-none text-dark800'>
								{" "}
								Email{" "}
							</label>
							<input
								onChange={handleChange}
								value={user.email}
								name='email'
								aria-labelledby='email'
								type='email'
								className='bg-gray-200 border rounded text-sm font-medium leading-none placeholder-gray-400 text-gray-800 py-3 w-full pl-3 mt-2'
								placeholder='e.g: john@gmail.com '
							/>
						</div>
						<div className='mt-6  w-full'>
							<label htmlFor='myInput' className='text-base font-medium leading-none text-dark800'>
								{" "}
								Password{" "}
							</label>
							<div className='relative flex items-center justify-center'>
								<input
									onChange={handleChange}
									value={user.password}
									name='password'
									type='password'
									className='bg-gray-200 border rounded text-sm font-medium leading-none text-gray-800 py-3 w-full px-3 mt-2'
								/>
							</div>
						</div>
						<div className='mt-8'>
							<ButtonFill text='Create my account' />
						</div>
						<div className='mt-8 w-full flex'>
							<ButtonLinkFill text='Return' to='/landing' />
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Registration;
