import React from 'react';
import { InputBox2 } from '../components/InputBox';
import PaymentCard from '../components/PaymentCard.tsx';

const BillingInfoForm = () => {
	return (
		<>
			{/* <h1 className='font-semibold text-lg'>Billing Information</h1> */}
			<div>
				<div>
					<PaymentCard />
				</div>
				<div className='flex items-center gap-8 mt-10'>
					<div className='flex flex-col w-full'>
						<label className='mb-3 text-sm leading-none text-dark900'>Card Number</label>
						<InputBox2
							type='number'
							placeholder='xxxx-xxxx-xxxx-xxxx'
							defaultValue=''
						/>
					</div>
				</div>
				<div className='mt-5 flex items-center gap-8'>
					<div className='flex flex-col lg:mt-0 mt-5 w-full'>
						<label className='mb-3 text-sm leading-none text-dark900'>Expiration Date</label>
						<InputBox2
							type='date'
							placeholder='Expiration Date'
							defaultValue=''
						/>
					</div>

					<div className='flex flex-col w-full lg:mt-0 mt-5'>
						<label className='mb-3 text-sm leading-none text-dark900'>Security Code</label>
						<InputBox2
							type='number'
							placeholder='CVV'
							defaultValue=''
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default BillingInfoForm;
