import React from 'react';
import Navbar from '../../components/Navbar.tsx';
import Footer from '../../components/Footer.tsx';

const TwoVerification = () => {
	return (
		<div className=' font-Messina-Sans'>
			<div className='flex flex-col w-full h-fit pb-20 bg-cover bg-no-repeat'>
				<Navbar />
				<div className='absolute w-full h-32 bg-gradient-to-br from-dark700 to-dark900 -z-10'></div>
			</div>
			<div className='flex flex-col items-center justify-center w-full h-full'>
				<h1 className='py-0 text-9xl lg:text-[20px] font-extrabold text-black dark:text-white'>Hi! Need help?</h1>
				<div className='w-full h-fit flex relative items-center justify-center self-center '>
					{/* Search bar */}
					<input
						type='text'
						placeholder='     Search how-tos and more'
						className='p-3 mt-4 border bg-blue-gray-100 border-gray-300 rounded-full w-full max-w-md placeholder-black'
					/>
				</div>
			</div>

			<div className='flex flex-row justify-between'>
				{/* Left Content */}
				<div className='w-2/5 p-8 ml-72'>
					<p className='font-bold mb-1'>How-to</p>
					<h2 className='font-bold text-2xl mb-0'>Two-Factor Verification</h2>
					<p className='mb-8'>Enhance your account security by enabling two-factor verification (2FA).</p>
					<p>Two-factor verification adds an extra layer of protection to your account. Here's how to set it up:</p>
					<ol className='list-decimal pl-6'>
						<li>Log in to your account and navigate to the "Security" or "Account Settings" section.</li>
						<li>Locate the two-factor verification option and select "Enable 2FA" or similar.</li>
						<li>Choose your preferred method of verification:</li>
						<ul className='list-disc pl-8'>
							<li>SMS/Text Message: Receive a verification code via SMS on your registered phone number.</li>
							<li>Email: Receive verification codes via email on your registered email address.</li>
						</ul>
						<li>Follow the prompts to set up your chosen method and verify your device.</li>
						<li>Enter the verification code provided by your chosen method to complete the setup.</li>
						<li>
							Once set up, you'll be prompted to enter a verification code whenever you log in from an unrecognized
							device or after a certain time period.
						</li>
					</ol>
					<br />
					<p>
						Two-factor verification significantly enhances the security of your account by ensuring that only you can
						access it, even if someone knows your password. Don't forget to securely store backup codes in case you lose
						access to your primary verification method.
					</p>
					<div className='mt-8'>
						<hr className='w-full border-gray-500 mx-auto' />{' '}
					</div>
					<h2 className='font-bold text-2xl mt-8 mb-4'>Related Articles</h2>
					<a
						className='font-bold text-xl '
						href='/setting-up'>
						<u>Setting up your account</u>
					</a>
					<p>
						You’ve logged in, but you need to edit your account. Where do you go? Here’s how to update your profile,
						manage notification settings, and more.
					</p>
					<div className='mt-8 mb-8'>
						<hr className='w-full border-gray-500 mx-auto' />{' '}
					</div>
					<a
						className='font-bold text-xl'
						href='/manage-account'>
						<u>How to access and manage your account</u>
					</a>
					<p>
						Learn how to effortlessly navigate through your account settings, update personal information, enhance
						security measures, and efficiently manage payments.
					</p>
				</div>

				{/* Right Content */}
				<div>
					<div className='w-2/8 mt-8 mr-52 bg-white rounded-lg border border-gray-300 p-8'>
						<div className='flex flex-col'>
							<p className='mt-1 font-semibold text-xl text-gray-800'>
								Get help with your reservations, account, and more.
							</p>
							<a
								href='/login'
								className='px-4 py-2 bg-yellow100 mt-3 text-white rounded-xl'>
								Log-in or sign up
							</a>
						</div>
					</div>
				</div>
			</div>

			<br />

			<Footer />
		</div>
	);
};

export default TwoVerification;
