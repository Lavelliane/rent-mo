import React from 'react';
import PaymentCard from '../components/PaymentCard.tsx';
import { TextField } from '@mui/material';

const BillingInfoForm = () => {
	return (
		<>
			<div>
				<div>
					<PaymentCard />
				</div>
				<div className='flex items-center gap-8 mt-10'>
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
				<div className='mt-5 flex items-center gap-8'>
					<div className='flex flex-col lg:mt-0 mt-5 w-full'>
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

					<div className='flex flex-col w-full lg:mt-0 mt-5'>
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
