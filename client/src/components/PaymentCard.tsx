import React from 'react';
import { BsFillCreditCard2FrontFill, BsPaypal, BsWalletFill } from 'react-icons/bs';

const PaymentCard = () => {
	return (
		<div className='flex flex-row justify-evenly font-Messina-Sans text-sm'>
			<a
				href='#card'
				className='w-48 h-32 bg-dark300 rounded-lg shadow-md p-5 flex flex-col items-center justify-center hover:scale-105 transition-all'>
				<BsFillCreditCard2FrontFill className='w-12 h-12' />
				<p>Credit or Debit Card</p>
			</a>
			<a
				href='#e-wallet'
				className='w-48 h-32 bg-dark300 rounded-lg shadow-md p-5 flex flex-col items-center justify-center hover:scale-105 transition-all'>
				<BsWalletFill className='w-12 h-12' />
				<p>E-wallet</p>
			</a>
			<a
				href='#paypal'
				className='w-48 h-32 bg-dark300 rounded-lg shadow-md p-5 flex flex-col items-center justify-center hover:scale-105 transition-all'>
				<BsPaypal className='w-12 h-12' />
				<p>Paypal</p>
			</a>
		</div>
	);
};

export default PaymentCard;
