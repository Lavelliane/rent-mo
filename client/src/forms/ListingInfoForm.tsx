import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Checkbox, FormControlLabel, FormGroup, TextField, ThemeProvider } from '@mui/material';
import ImageUploader from '../components/ImageUploader';
import { ICar } from '../../types/types';

type Props = {
	handleChange: (e: any) => void;
	ListingInfo: ICar;
};

const ListingInfoForm = ({ handleChange, ListingInfo }: Props) => {
	const [checked, setChecked] = useState(false);
	const handleCheckboxChange = (event: any) => {
		setChecked(event.target.checked);
	};

	return (
		<>
			<div className='flex md:flex-row flex-col md:mt-0 mt-5 items-center md:gap-8 gap-5'>
				<div className='flex flex-col w-full'>
					<label className='mb-3 text-sm leading-none text-dark900'>Car Brand</label>
					<TextField
						size='small'
						onChange={handleChange}
						value={ListingInfo.brand}
						name='brand'
						id='brand'
						type='text'
						placeholder='Enter car brand'
						defaultValue={''}
					/>
				</div>
				<div className='flex flex-col w-full'>
					<label className='mb-3 text-sm leading-none text-dark900'>Car Model</label>
					<TextField
						size='small'
						onChange={handleChange}
						value={ListingInfo.model}
						name='model'
						id='model'
						type='text'
						placeholder='Enter car model'
						defaultValue={''}
					/>
				</div>
			</div>
			<div className='flex md:flex-row flex-col mt-3 items-center md:gap-8 gap-5'>
				<div className='flex flex-col w-full'>
					<label className='mb-2 text-sm leading-none text-dark900'>License Plate Number</label>
					<TextField
						size='small'
						onChange={handleChange}
						value={ListingInfo.licensePlateNumber}
						name='licensePlateNumber'
						id='licensePlateNumber'
						type='text'
						placeholder='Enter license'
						defaultValue={''}
					/>
				</div>
				<div className='flex flex-col w-full'>
					<label className='mb-2 text-sm leading-none text-dark900'>Vehicle Identification Number</label>
					<TextField
						size='small'
						onChange={handleChange}
						value={ListingInfo.carRegistrationNumber}
						name='carRegistrationNumber'
						id='carRegistrationNumber'
						type='text'
						placeholder='Enter VIN'
						defaultValue={''}
					/>
				</div>
			</div>
			<p className='mt-3 text-sm leading-none text-dark900'>Car Availability</p>
			<div className='mt-4 flex items-center gap-8'>
				<div className='flex flex-col w-full'>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<div className='flex flex-row w-full md:gap-8 gap-2'>
							<DatePicker
								disabled={checked}
								onChange={handleChange}
								value={ListingInfo.carAvailability.startDate}
								label='Start Date'
								className=' w-full'
								slotProps={{ textField: { size: 'small' } }}
								defaultValue={''}
							/>
							<DatePicker
								disabled={checked}
								onChange={handleChange}
								value={checked ? '' : ListingInfo.carAvailability.endDate}
								label='End Date'
								className='w-full'
								slotProps={{ textField: { size: 'small' } }}
								defaultValue={''}
							/>
							<FormGroup className='w-1/2'>
								<FormControlLabel
									value='Always'
									control={
										<Checkbox
											checked={checked}
											onChange={handleCheckboxChange}
											name='isAlways'
											id='isAlways'
											value={checked}
											inputProps={{ 'aria-label': 'controlled' }}
											defaultValue={''}
										/>
									}
									label='Always Available'
									labelPlacement='end'
								/>
							</FormGroup>
						</div>
					</LocalizationProvider>
				</div>
			</div>
			<p className='mt-2 mb-4 text-sm font-semibold leading-none text-dark900'>Upload photo of your vehicle</p>
			<ImageUploader />
		</>
	);
};

export default ListingInfoForm;
