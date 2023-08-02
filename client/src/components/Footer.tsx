import React from "react";

const Footer = () => {
	return (
		<div className='mx-auto h-full w-full py-10 text-dark900 bg-white shadow-buttonbox font-Messina-Sans'>
			<div className='flex flex-col items-center justify-center w-full h-full'>
				<div className='flex flex-wrap sm:gap-10 gap-8 items-center justify-center '>
					<a
						href='#about'
						className='hover:text-yellow text-base cursor-pointer leading-4 text-dark800 transition-colors'>
						About
					</a>
					<a
						href='#contact-us'
						className='hover:text-yellow text-base cursor-pointer leading-4 text-dark800 transition-colors'>
						Contact us
					</a>
					<a
						href='#terms-of-services'
						className='hover:text-yellow text-base cursor-pointer leading-4 text-dark800 transition-colors'>
						Terms of Service
					</a>
					<a
						href='#privacy-policy'
						className='hover:text-yellow text-base cursor-pointer leading-4 text-dark800 transition-colors'>
						Privacy Policy
					</a>
				</div>
				<div className='flex items-center gap-x-8 mt-6'>
					<div className='cursor-pointer'>
						<a href='https://twitter.com' target='_blank'>
							<img
								src='../src/assets/logo/icons8-facebook.png'
								className='w-10 hover:scale-[110%] transition-all'></img>
						</a>
					</div>
					<div className='cursor-pointer'>
						<a href='https://twitter.com' target='_blank'>
							<img
								src='../src/assets/logo/icons8-instagram.png'
								className='w-10 hover:scale-[110%] transition-all'></img>
						</a>
					</div>
					<div className='cursor-pointer'>
						<a href='https://twitter.com' target='_blank'>
							<img src='../src/assets/logo/twitter-x-logo.png' className='w-8 hover:scale-[110%] transition-all'></img>
						</a>
					</div>
				</div>
				<div className='flex items-center mt-5 no-select'>
					<p className='text-base leading-4 text-dark800 font-bold'>
						<span className=' font-normal'>2023</span>
						<span className=''></span> Rent
						<span className='text-yellow100 '>Mo</span>
					</p>
					<div className='border-l border-dark600 pl-2 ml-2'>
						<p className='text-base leading-4 text-dark800'>All rights reserved</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
