import React from 'react';
import InputBox from '../components/InputBox.tsx';
import { MdClose, MdCloudUpload } from 'react-icons/md';

const UpdateProfile = (props: any) => {
	return props.trigger ? (
		<>
			<div
				id='popup'
				className='z-50 fixed w-full flex justify-center inset-0 font-Messina-Sans'>
				<div className='w-full h-full bg-black bg-opacity-40 z-0 absolute inset-0' />
				<div className='mx-auto container'>
					<div className='flex items-center justify-center h-full w-full'>
						<div className='bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5'>
							<div className='bg-dark300 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between'>
								<p className='text-base font-semibold text-dark800'>Update Profile</p>
								<button
									onClick={() => props.setTrigger(false)}
									className='focus:outline-none'>
									<MdClose
										size='28px'
										color='#747474'
									/>
								</button>
							</div>
							<div className='px-4 md:px-10 pt-6 md:pt-12 md:pb-4 pb-7'>
								<div className='flex items-center justify-center'>
									<div className='flex items-center justify-center w-full'>
										<label
											htmlFor='dropzone-file'
											className='flex flex-col items-center justify-center w-40 h-40 border-2 border-gray-300 border-dashed rounded-full cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'>
											<div className='flex flex-col items-center justify-center pt-5 pb-6'>
												<MdCloudUpload
													size='28px'
													color='#747474'
												/>
												<p className='mb-2 text-sm text-gray-500 dark:text-gray-400 px-2 text-center'>
													<span className='font-semibold'>Click to upload</span> or drag and drop
												</p>
												<p className='text-xs text-gray-500 dark:text-gray-400 text-center'>PNG/JPG/HEIC</p>
											</div>
											<input
												id='dropzone-file'
												type='file'
												className='hidden'
											/>
										</label>
									</div>
								</div>
								<form className='mt-11'>
									<div className='flex flex-col sm:flex-row items-center gap-4'>
										<InputBox
											placeholder='First Name'
											type='text'
										/>
										<InputBox
											placeholder='Last Name'
											type='text'
										/>
										<input
											placeholder='Age'
											type='number'
											min={0}
											className='sm:w-1/4 w-full focus:outline-none py-3 px-3 text-sm leading-none text-dark700 bg-white border rounded border-dark500'
										/>
									</div>
									<div className='flex flex-col sm:flex-row items-center gap-4 sm:mt-8 mt-4'>
										<InputBox
											placeholder='Email'
											type='email'
										/>
										<InputBox
											placeholder='Number'
											type='number'
										/>
									</div>
									<div className='flex flex-col sm:flex-row items-center gap-4 sm:mt-8 mt-4'>
										<InputBox
											placeholder='Profession'
											type='text'
										/>
										<InputBox
											placeholder='Language'
											type='text'
										/>
									</div>
									<div className='mt-4 sm:mt-8'>
										<textarea
											placeholder='Tell us about yourself...'
											className='py-3 pl-3 overflow-y-auto h-24 border rounded border-dark500 w-full resize-none text-dark700 focus:outline-none'
											defaultValue={''}
										/>
									</div>
								</form>
								<div className='flex items-center justify-between mt-9 mb-4'>
									<button
										onClick={() => props.setTrigger(false)}
										className='px-6 py-3 bg-dark300 hover:bg-dark500 shadow rounded text-sm text-dark800'>
										Cancel
									</button>
									<button
										type='submit'
										className='px-6 py-3 bg-yellow hover:bg-dark400 shadow rounded text-sm text-dark800'>
										Update
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	) : (
		''
	);
};

export default UpdateProfile;
