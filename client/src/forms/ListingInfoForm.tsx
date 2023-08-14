import React from 'react';
import { InputBox2 } from '../components/InputBox';
import { MdCloudUpload } from 'react-icons/md';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		fontSize: 12,
		fontFamily: 'Messina Sans',
	},
	palette: {
		text: {
			secondary: '#c2c2c2',
		},
	},
});

const ListingInfoForm = () => {
	return (
		<>
			{/* <h1 className='font-semibold text-lg'>Listing Information</h1> */}
			<div className='flex items-center gap-8'>
				<div className='flex flex-col w-full'>
					<label className='mb-3 text-sm leading-none text-dark900'>License Plate Number</label>
					<InputBox2
						type='text'
						placeholder='Enter car license plate number'
						defaultValue=''
					/>
				</div>
				<div className='flex flex-col lg:mt-0 mt-5 w-full'>
					<label className='mb-3 text-sm leading-none text-dark900'>Vehicle Identification Number</label>
					<InputBox2
						type='text'
						placeholder='Enter your VIN'
						defaultValue=''
					/>
				</div>
			</div>
			<p className='mt-5 text-sm leading-none text-dark900 font-semibold'>Car Availability</p>
			<div className='mt-3 flex items-center gap-8'>
				<div className='flex flex-row lg:mt-0 mt-5 w-full gap-8'>
					<ThemeProvider theme={theme}>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<DatePicker
								label='Start Date'
								className=' text-sm w-full'
								slotProps={{ textField: { size: 'small' } }}
							/>
							<DatePicker
								label='End Date'
								className='text-sm w-full'
								slotProps={{ textField: { size: 'small' } }}
							/>
						</LocalizationProvider>
					</ThemeProvider>
				</div>
			</div>
			<p className='mt-8 text-sm font-semibold leading-none text-dark900'>Upload photo of your vehicle</p>
			<div className='mt-3 lg:flex items-center'>
				<div className='flex items-center justify-center w-full'>
					<label
						htmlFor='dropzone-file'
						className='flex flex-col items-center justify-center w-full h-24 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-white hover:bg-dark100'>
						<div className='flex flex-col items-center justify-center pt-5 pb-6'>
							<MdCloudUpload
								size='30px'
								color='#747474'
							/>
							<p className='mb-2 text-sm text-dark600 dark:text-dark200'>
								<span className='font-semibold'>Click to upload</span> or drag and drop
							</p>
							<p className='text-xs text-dark600 dark:text-dark200'>HEIC, PNG, JPG</p>
						</div>
						<input
							id='dropzone-file'
							type='file'
							className='hidden'
						/>
					</label>
				</div>
			</div>
		</>
	);
};

export default ListingInfoForm;
