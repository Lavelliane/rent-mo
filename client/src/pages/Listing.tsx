import React, { useState } from "react";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

const Listing = () => {
	return (
		<>
			<div className='flex flex-col w-full h-fit pb-20 bg-cover bg-no-repeat font-Messina-Sans'>
				<Navbar />
				<div className='absolute w-full h-72 bg-gradient-to-br from-dark700 to-dark900 -z-10'></div>
				<div className='w-fit h-fit flex relative items-center justify-center self-center'>
					<div className=' self-center w-full bg-white px-4 py-10 sm:p-10 shadow-searchbox rounded-lg mt-5 m-2'>
						<div className='flex items-center border-b pb-6 border-dark400 justify-center'>
							<div className='flex items-center mt-0 justify-center'>
								<div className='w-10 h-10 bg-yellow rounded-full flex items-center justify-center'>
									<p className='text-base font-medium leading-none text-dark900'>01</p>
								</div>
								<span className='lg:w-40 h-[2px] bg-dark700 lg:mx-2 mx-1 w-10' />
							</div>
							<div className='flex items-center mt-0 justify-center'>
								<div className='w-10 h-10 bg-transparent rounded-full flex items-center justify-center border-[2px] border-dark500'>
									<p className='text-base font-medium leading-none text-dark900'>02</p>
								</div>
								<span className='lg:w-40 h-[2px] bg-dark700 lg:mx-2 mx-1 w-10' />
							</div>
							<div className='flex items-center mt-0 justify-center'>
								<div className='w-10 h-10 bg-transparent rounded-full flex items-center justify-center border-[2px] border-dark500'>
									<p className='text-base font-medium leading-none text-dark900'>03</p>
								</div>
							</div>
						</div>
						<h1
							tabIndex={0}
							role='heading'
							aria-label='profile information'
							className='focus:outline-none text-3xl font-bold text-dark900 mt-5'>
							Personal Information
						</h1>
						<p role='contentinfo' className=' focus:outline-nonetext-sm font-light leading-tight text-gray-600 mt-4'>
							Fill in the data for profile. It will take a couple of minutes. <br />
						</p>
						<div className='mt-8 lg:flex items-center'>
							<div className='flex flex-col'>
								<label className='mb-3 text-sm leading-none text-dark900'>Mobile Number</label>
								<input
									type='text'
									tabIndex={0}
									aria-label='Enter your mobile number'
									className='lg:w-64 w-full bg-transparent text-sm font-medium leading-none text-dark900 p-3 border rounded border-dark400'
									defaultValue='(+63)'
								/>
							</div>
							<div className='flex flex-col lg:ml-12 lg:mt-0 mt-8'>
								<label className='mb-3 text-sm leading-none text-dark900'>Email Address</label>
								<input
									type='email'
									tabIndex={0}
									aria-label='Enter email Address'
									className='lg:w-64 w-full bg-transparent text-sm font-medium leading-none text-dark900 p-3 border rounded border-dark400'
									placeholder='rentmo@gmail.com'
									defaultValue=''
								/>
							</div>
							<div className='flex flex-col lg:ml-12 lg:mt-0 mt-8'>
								<label className='mb-3 text-sm leading-none text-dark900'>Street Address</label>
								<input
									type='text'
									tabIndex={0}
									aria-label='Enter Street Address'
									className='lg:w-64 w-full bg-transparent text-sm font-medium leading-none text-dark900 p-3 border rounded border-dark400'
									placeholder='Unit#/Street/Barangay'
									defaultValue=''
								/>
							</div>
						</div>
						<div className='mt-5 lg:flex items-center'>
							<div className='flex flex-col'>
								<label className='mb-3 text-sm leading-none text-dark900'>City</label>
								<input
									type='text'
									tabIndex={0}
									aria-label='Enter City'
									className='lg:w-64 w-full bg-transparent text-sm font-medium leading-none text-dark900 p-3 border rounded border-dark400'
									placeholder='Enter City'
									defaultValue=''
								/>
							</div>
							<div className='flex flex-col lg:ml-12 lg:mt-0 mt-8'>
								<label className='mb-3 text-sm leading-none text-dark900'>Province</label>
								<input
									type='text'
									tabIndex={0}
									aria-label='Enter Province'
									className='lg:w-64 w-full bg-transparent text-sm font-medium leading-none text-dark900 p-3 border rounded border-dark400'
									placeholder='Enter Province'
									defaultValue=''
								/>
							</div>
							<div className='flex flex-col lg:ml-12 lg:mt-0 mt-8'>
								<label className='mb-3 text-sm leading-none text-dark900'>Country</label>
								<input
									type='text'
									tabIndex={0}
									aria-label='Enter Country'
									className='lg:w-64 w-full bg-transparent text-sm font-medium leading-none text-dark900 p-3 border rounded border-dark400'
									placeholder='Enter Country'
									defaultValue=''
								/>
							</div>
						</div>
						<div className='mt-5 lg:flex items-center'>
							<div className='flex items-center justify-center w-full'>
								<label
									htmlFor='dropzone-file'
									className='flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-dark300'>
									<div className='flex flex-col items-center justify-center pt-5 pb-6'>
										<svg
											className='w-8 h-8 mb-4 text-dark600 dark:text-dark200'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 20 16'>
											<path
												stroke='currentColor'
												stroke-linecap='round'
												stroke-linejoin='round'
												stroke-width='2'
												d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
											/>
										</svg>
										<p className='mb-2 text-sm text-dark600 dark:text-dark200'>
											<span className='font-semibold'>Click to upload</span> or drag and drop
										</p>
										<p className='text-xs text-dark600 dark:text-dark200'>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
									</div>
									<input id='dropzone-file' type='file' className='hidden' />
								</label>
							</div>
						</div>
						<div className='mt-5'>
							<div className='py-0 flex items-center'>
								<div className='bg-white dark:bg-dark900 border rounded border-dark200 dark:border-dark700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative'>
									<input
										type='checkbox'
										tabIndex={0}
										aria-label='I agree with the terms of service'
										defaultChecked
										className='checkbox opacity-0 absolute cursor-pointer w-full h-full'
									/>
									<div className='check-icon hidden bg-yellow text-dark600 rounded'>
										<svg
											className='icon icon-tabler icon-tabler-check'
											xmlns='http://www.w3.org/2000/svg'
											width={16}
											height={16}
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											fill='none'
											strokeLinecap='round'
											strokeLinejoin='round'>
											<path stroke='none' d='M0 0h24v24H0z' />
											<path d='M5 12l5 5l10 -10' />
										</svg>
									</div>
								</div>
								<p className='text-sm leading-none ml-2'>
									I agree with the{" "}
									<a className='text-indigo-700' href='#term-of-services'>
										terms of service
									</a>
								</p>
							</div>
						</div>
						<button
							role='button'
							aria-label='Next step'
							className='flex items-center justify-center py-4 px-7 bg-yellow rounded-full mt-7 lg:mt-14 hover:bg-transparent border-2 border-yellow transition-all'>
							<span className='text-sm font-medium text-center text-dark900 capitalize'>Next Step</span>
							<svg
								className='mt-1 ml-3'
								width={12}
								height={8}
								viewBox='0 0 12 8'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z' fill='#242731' />
							</svg>
						</button>
					</div>
					<style
						dangerouslySetInnerHTML={{
							__html: "\n          .checkbox:checked + .check-icon {\n              display: flex\n          }\n      ",
						}}
					/>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Listing;
