import React from 'react';
import { InputBox2 } from '../components/InputBox';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
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
	const [checked, setChecked] = React.useState(true);
	const handleChange = (event: any) => {
		setChecked(event.target.checked);
	};

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
				<div className='flex flex-col w-full'>
					<ThemeProvider theme={theme}>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<div className='flex flex-row w-full md:gap-8 gap-2'>
								<DatePicker
									disabled={checked}
									label='Start Date'
									className=' text-sm w-full'
									slotProps={{ textField: { size: 'small' } }}
								/>
								<DatePicker
									disabled={checked}
									label='End Date'
									className='text-sm w-full'
									slotProps={{ textField: { size: 'small' } }}
								/>
							</div>
							<FormGroup>
								<FormControlLabel
									value='Always'
									control={
										<Checkbox
											checked={checked}
											onChange={handleChange}
											inputProps={{ 'aria-label': 'controlled' }}
										/>
									}
									label='Always Available'
									labelPlacement='end'
								/>
							</FormGroup>
						</LocalizationProvider>
					</ThemeProvider>
				</div>
			</div>
			<p className='mt-2 mb-4 text-sm font-semibold leading-none text-dark900'>Upload photo of your vehicle</p>
			<ImageUploader />
		</>
	);
};

export default ListingInfoForm;
