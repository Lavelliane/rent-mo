import React from 'react';
import { InputBox2 } from '../components/InputBox';
import { MdCloudUpload } from 'react-icons/md';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ImageUploader from '../components/ImageUploader';
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
			<div className='flex md:flex-row flex-col md:mt-0 mt-5 items-center md:gap-8 gap-5'>
				<div className='flex flex-col w-full'>
					<label className='mb-3 text-sm leading-none text-dark900'>License Plate Number</label>
					<InputBox2
						type='text'
						placeholder='Enter car license plate number'
						defaultValue=''
					/>
				</div>
				<div className='flex flex-col w-full'>
					<label className='mb-3 text-sm leading-none text-dark900'>Vehicle Identification Number</label>
					<InputBox2
						type='text'
						placeholder='Enter your VIN'
						defaultValue=''
					/>
				</div>
			</div>
			<p className='mt-5 text-sm leading-none text-dark900'>Car Availability</p>
			<div className='mt-4 flex items-center gap-8'>
				<div className='flex flex-row lg:mt-0 w-full md:gap-8 gap-3'>
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
			<p className='mt-8 mb-4 text-sm font-semibold leading-none text-dark900'>Upload photo of your vehicle</p>
			<ImageUploader />
		</>
	);
};

export default ListingInfoForm;
