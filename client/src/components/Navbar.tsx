import React, { useState } from "react";
import { useUser } from "../../hooks/zustand/useUser";
import { Link } from "react-router-dom";

import "../index.css";

const Navbar = () => {
	const [profile, setProfile] = useState(false);
	const [show, setShow] = useState(false);
	const store = useUser();
	const { user }: any = store?.user;

	return (
		<>
			<nav className='w-full border-b 2xl:px-36 px-4 border-none bg-black bg-opacity-0'>
				<div className='py-5 md:py-0 container mx-auto lg:px-2 px-0 flex items-center justify-between'>
					<a aria-label='Home. logo' role='img' href='/landing'>
						<img className='w-24 md:w-36 sm:w-32 lg:w-48 xl:w-48' src='../src/assets/logo/RentMo-logo.svg' alt='logo' />
					</a>
					<div>
						<button
							onClick={() => setShow(!show)}
							className={`${
								show ? "hidden" : ""
							} sm:block md:hidden text-dark800 focus:text-dark800 focus:outline-none focus:ring-2 focus:ring-dark800`}>
							<svg
								aria-haspopup='true'
								aria-label='open Main Menu'
								xmlns='http://www.w3.org/2000/svg'
								className='md:hidden icon icon-tabler icon-tabler-menu'
								width={24}
								height={24}
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='#FFFFFF'
								fill='none'
								strokeLinecap='round'>
								<path stroke='none' d='M0 0h24v24H0z' />
								<line x1={4} y1={8} x2={20} y2={8} />
								<line x1={4} y1={16} x2={20} y2={16} />
							</svg>
						</button>
						<div id='menu' className={` ${show ? "" : "hidden"} md:block lg:block bg-transparent `}>
							<button
								onClick={() => setShow(!show)}
								className={`block md:hidden lg:hidden text-dark200 hover:text-yellow focus:text-yellow fixed focus:outline-none focus:ring-2 focus:ring-yellow z-30 top-0 right-6 mt-6`}>
								<svg
									aria-label='close main menu'
									xmlns='http://www.w3.org/2000/svg'
									width={24}
									height={24}
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='#FFFFFF'
									fill='none'
									strokeLinecap='round'
									strokeLinejoin='round'>
									<path stroke='none' d='M0 0h24v24H0z' />
									<line x1={18} y1={6} x2={6} y2={18} />
									<line x1={6} y1={6} x2={18} y2={18} />
								</svg>
							</button>
							<ul className='flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-dark900 md:bg-transparent z-20 transition'>
								<li className='text-white  cursor-pointer text-lg pt-10 md:pt-0 transition'>
									<Link to='/how-it-works' className=' hover:text-yellow transition'>
										How it works
									</Link>
								</li>
								<li className='text-white  cursor-pointer text-lg pt-10 md:pt-0 md:ml-5 xl:ml-10 transition'>
									<Link to='/support' className=' hover:text-yellow transition'>
										Support
									</Link>
								</li>
								<li className='text-yellow font-bold cursor-pointer text-lg pt-10 md:pt-0 md:ml-5 xl:ml-10 transition'>
									<Link
										to='/become-a-host'
										className=' hover:text-white hover:ring-white transition ring-yellow ring-2 rounded-full py-4 px-8 '>
										Become a host
									</Link>
								</li>
								<span className=' xl:mx-10 md:mt-0 md:w-[2px] md:h-10 bg-dark600 bg-white md:mx-5 w-3/4 h-[1px] mt-14'></span>
								<li className={store.user ? "hidden" : "text-white  cursor-pointer text-lg pt-10 md:pt-0 transition"}>
									<Link to='/login' className=' hover:text-yellow transition'>
										Login
									</Link>
								</li>
								<li
									className={
										store.user
											? "hidden"
											: "text-white cursor-pointer text-lg pt-10 md:pt-0 md:ml-5 xl:ml-10 transition"
									}>
									<Link to='/register' className=' hover:text-yellow transition'>
										Sign up
									</Link>
								</li>

								<li
									className={
										store.user
											? "flex items-center relative cursor-pointer text-white text-base lg:text-lg pt-10 md:pt-0 transition"
											: "hidden"
									}
									onClick={() => setProfile(!profile)}>
									{profile && (
										<ul className='hidden md:block p-2 w-40 border-r bg-white absolute rounded left-0 shadow mt-16 top-0'>
											<li className='cursor-pointer text-dark800 text-sm leading-3 tracking-normal py-2 hover:text-yellow focus:text-yellow focus:outline-none transition-colors'>
												<div className='flex items-center'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														className='icon icon-tabler icon-tabler-user'
														width={20}
														height={20}
														viewBox='0 0 24 24'
														strokeWidth='1.5'
														stroke='currentColor'
														fill='none'
														strokeLinecap='round'
														strokeLinejoin='round'>
														<path stroke='none' d='M0 0h24v24H0z' />
														<circle cx={12} cy={7} r={4} />
														<path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
													</svg>
													<a className='ml-2' href='/profile'>
														My Profile
													</a>
												</div>
											</li>
											<li className='cursor-pointer text-dark800 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-yellow focus:text-yellow focus:outline-none flex items-center transition-colors'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													className='icon icon-tabler icon-tabler-help'
													width={20}
													height={20}
													viewBox='0 0 24 24'
													strokeWidth='1.5'
													stroke='currentColor'
													fill='none'
													strokeLinecap='round'
													strokeLinejoin='round'>
													<path stroke='none' d='M0 0h24v24H0z' />
													<circle cx={12} cy={12} r={9} />
													<line x1={12} y1={17} x2={12} y2='17.01' />
													<path d='M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4' />
												</svg>
												<a href='#help-center' className='ml-2'>
													Help Center
												</a>
											</li>
											<li className='cursor-pointer text-dark800 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-yellow flex items-center focus:text-yellow focus:outline-none transition-colors'>
												<img className='h-5' src='../src/assets/logo/icons8-logout.png' alt='logo' />
												<a href='#logout' className='ml-2'>
													Logout
												</a>
											</li>
										</ul>
									)}
									<img
										className='h-10 rounded-full invert select-none'
										src='../src/assets/logo/avatar-logo.png'
										alt='logo'
									/>
									<a
										href='/profile'
										className='select-none text-white md:text-md text-lg ml-2 transition-colors font-bold pointer-events-auto md:pointer-events-none'>
										{user.firstName + " " + user.lastName}
									</a>
								</li>
								<li className='md:hidden text-white  cursor-pointer text-lg pt-10 md:pt-0 md:ml-5 xl:ml-10 transition'>
									<Link to='/Help Center' className=' hover:text-yellow transition'>
										Help Center
									</Link>
								</li>
								<li className='md:hidden text-white  cursor-pointer text-lg pt-10 md:pt-0 md:ml-5 xl:ml-10 transition'>
									<Link to='#logout' className=' hover:text-yellow transition'>
										Logout
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
