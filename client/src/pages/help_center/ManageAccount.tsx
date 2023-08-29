import React from 'react';
import Navbar from '../../components/Navbar.tsx';
import Footer from '../../components/Footer.tsx';

const ManageAccount = () => {
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
					<h2 className='font-bold text-2xl mb-0'>How to Manage Your User Account</h2>
					<p className='mb-8'>
						Efficiently managing your user account ensures that your information is up-to-date and your experience is
						tailored to your preferences. Follow these steps to make the most out of your account:
					</p>
					<h2 className='font-bold text-2xl mt-8 mb-4'>1. Log In To Your Account</h2>
					<p>
						Begin by logging in to your user account using your provided credentials. If you've forgotten your password,
						you can request a password reset via email.
					</p>
					<h2 className='font-bold text-2xl mt-8 mb-4'>2. Navigate to Account Settings</h2>
					<p>
						Once logged in, locate the "Account Settings" or "Profile" section. This is accessible through the menu in
						the navigation bar.
					</p>
					<h2 className='font-bold text-2xl mt-8 mb-4'>3. Review Your Account Information</h2>
					<p>
						Take a moment to review the existing information associated with your account. This includes your name,
						email address, and contact details. Ensure that this information is accurate and up-to-date.
					</p>
					<h2 className='font-bold text-2xl mt-8 mb-4'>4. Update Personal Details</h2>
					<p>
						If you've moved, changed your email address, or updated your phone number, this is the place to make those
						changes. Update any outdated or incorrect information to ensure that you can be reached when needed.
					</p>
					<h2 className='font-bold text-2xl mt-8 mb-4'>5. Personalize Your Profile Picture</h2>
					<p>
						Add a personal touch to your account by uploading or changing your profile picture. A profile picture can
						help others recognize you and make your account feel more welcoming.
					</p>
					<h2 className='font-bold text-2xl mt-8 mb-4'>6. Customize Notification Preferences</h2>
					<p>
						We allow you to customize how and when you receive notifications. Tailor these settings to align with your
						communication needs—whether you prefer email, in-app notifications, or both.
					</p>
					<h2 className='font-bold text-2xl mt-8 mb-4'>7. Set Language Preferences</h2>
					<p>
						Ensure that the language is set according to your preferences. This ensures that you can easily navigate and
						understand the content presented to you.
					</p>
					<h2 className='font-bold text-2xl mt-8 mb-4'>8. Save Your Changes</h2>
					<p>
						After making any desired updates, be sure to click the "Save" or button to confirm your changes. This
						ensures that your preferences are reflected across the platform.
					</p>
					<h2 className='font-bold text-2xl mt-8 mb-4'>Enhancing Your Account's Security</h2>
					<p>
						Maintaining the security of your account is crucial. Follow these practices to keep your account safe from
						unauthorized access:
					</p>
					<ol className='list-decimal pl-6'>
						<li>Enable Two-Factor Authentication (2FA)</li>
						<li>Monitor Devices</li>
						<li>Use Strong Passwords</li>
						<li>Keep Information Private</li>
					</ol>

					<h2 className='font-bold text-2xl mt-8 mb-4'>Changing Your Account Password</h2>
					<p>If you need to update your account password, follow these steps:</p>
					<ol className='list-decimal pl-6'>
						<li>Log in to your account</li>
						<li>Navigate to the "Password" section</li>
						<li>Follow the prompts to enter your current password and your new, strong password</li>
						<li>Click "Change Password" or a similar option to finalize the update</li>
					</ol>
					<br />
					<p>
						Remember, managing your user account ensures a personalized and secure experience on the platform. If you
						encounter any difficulties or have questions, don't hesitate to reach out to the platform's support
						team—they're there to assist you every step of the way.
					</p>
					<div className='mt-8'>
						<hr className='w-full border-gray-500 mx-auto' />{' '}
					</div>

					<h2 className='font-bold text-2xl mt-8 mb-4'>Related Articles</h2>
					<a
						className='font-bold text-xl '
						href='/getting-started'>
						<u>Getting Started</u>
					</a>
					<p>
						Just joined us? We're excited to have you on board! Discover how to set up your account, personalize your
						profile, and manage your notification preferences to make the most of your experience.
					</p>
					<div className='mt-8 mb-8'>
						<hr className='w-full border-gray-500 mx-auto' />{' '}
					</div>
					<a
						className='font-bold text-xl '
						href='/setting-up'>
						<u>Setting up your account</u>
					</a>
					<p>
						You’ve logged in, but you need to edit your account. Where do you go? Here’s how to update your profile,
						manage notification settings, and more.
					</p>
					{/* Add more content here */}
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

export default ManageAccount;
