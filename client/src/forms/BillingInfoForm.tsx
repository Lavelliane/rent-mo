import React from 'react';
import PaymentCard from '../components/PaymentCard.tsx';
import { TextField } from '@mui/material';
import { ICar } from 'types/types';

type Props = {
	handleChange: (e: any) => void;
	billingInfo: ICar;
};

const BillingInfoForm = ({ handleChange, billingInfo }: Props) => {
	return (
		<>
			<div className='mb-4'>
				<div>
					<PaymentCard />
				</div>
				<div className='flex items-center gap-4 sm:mt-10 mt-6'>
					<div className='flex flex-col w-full'>
						<label className='mb-3 text-sm leading-none text-dark900'>Listing Price</label>
						<TextField
							size='small'
							onChange={handleChange}
							value={billingInfo.price}
							name='price'
							id='price'
							type='number'
							placeholder='Enter price per day'
							defaultValue={''}
							required
						/>
					</div>
					<div className='flex flex-col w-full'>
						<label className='mb-3 text-sm leading-none text-dark900'>Card Number</label>
						<TextField
							size='small'
							//onChange={}
							//value={}
							name='cardNumber'
							id='cardNumber'
							type='number'
							placeholder='Enter card number'
							defaultValue={''}
						/>
					</div>
				</div>
				<div className='mt-5 flex items-center gap-4'>
					<div className='flex flex-col sm:mt-5 mt-0 w-full'>
						<label className='mb-3 text-sm leading-none text-dark900'>Expiration Date</label>
						<TextField
							size='small'
							//onChange={}
							//value={}
							name='cardExpiration'
							id='cardExpiration'
							type='string'
							placeholder='Enter expiration date'
							defaultValue={''}
						/>
					</div>

					<div className='flex flex-col sm:mt-5 mt-0 w-full'>
						<label className='mb-3 text-sm leading-none text-dark900'>Security Code</label>
						<TextField
							size='small'
							//onChange={}
							//value={}
							name='securityCode'
							id='securityCode'
							type='number'
							placeholder='Enter CVV'
							defaultValue={''}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default BillingInfoForm;
