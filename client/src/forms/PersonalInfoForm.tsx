import React from 'react';
import { InputBox2 } from '../components/InputBox';

const PersonalInfoForm = () => {
	return (
		<>
			{/* <h1 className='font-semibold text-lg'>Personal Information</h1> */}
			<div>
				<div className='flex lg:flex-row items-center lg:gap-8 flex-col gap-0 lg:mt-5'>
					<div className='flex flex-col w-full'>
						<label className='mb-3 text-sm leading-none text-dark900'>Mobile Number</label>
						<InputBox2
							type='text'
							placeholder=''
							defaultValue='+63'
						/>
					</div>
					<div className='flex flex-col lg:mt-0 mt-5 w-full'>
						<label className='mb-3 text-sm leading-none text-dark900'>Email Address</label>
						<InputBox2
							type='email'
							placeholder='rentmo@gmail.com'
							defaultValue=''
						/>
					</div>
				</div>
				<div className='mt-5 flex lg:flex-row items-center lg:gap-8 flex-col gap-0'>
					<div className='flex flex-col lg:mt-0 mt-5 w-full'>
						<label className='mb-3 text-sm leading-none text-dark900'>Street Address</label>
						<InputBox2
							type='text'
							placeholder='Unit#/Street/Barangay'
							defaultValue=''
						/>
					</div>
					<div className='flex flex-col lg:mt-0 mt-5 w-full'>
						<label className='mb-3 text-sm leading-none text-dark900'>City</label>
						<InputBox2
							type='text'
							placeholder='Enter City'
							defaultValue=''
						/>
					</div>
				</div>
				<div className='mt-5 flex lg:flex-row items-center lg:gap-8 flex-col gap-0'>
					<div className='flex flex-col w-full lg:mt-0 mt-5'>
						<label className='mb-3 text-sm leading-none text-dark900'>Province</label>
						<InputBox2
							type='text'
							placeholder='Enter Province'
							defaultValue=''
						/>
					</div>
					<div className='flex flex-col w-full lg:mt-0 mt-5'>
						<label className='mb-3 text-sm leading-none text-dark900'>Country</label>
						<InputBox2
							type='text'
							placeholder='Enter Country'
							defaultValue=''
						/>
					</div>
					<div className='flex flex-col lg:w-1/2 w-full lg:my-0 mt-5 mb-10'>
						<label className='mb-3 text-sm leading-none text-dark900'>Zip Code</label>
						<InputBox2
							type='text'
							placeholder='Zip Code'
							defaultValue=''
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default PersonalInfoForm;
