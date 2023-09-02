import React, { useState } from 'react';
import Navbar from '../components/Navbar.tsx';
import ListingStepper from '../components/ListingStepper.tsx';

export default function Listing() {
	return (
		<>
			<div className='flex flex-col w-full h-fit pb-20 bg-cover bg-no-repeat font-Messina-Sans'>
				<Navbar />
				<div className='absolute w-full h-72 bg-gradient-to-br from-dark700 to-dark900 -z-10'></div>
				<div className='xl:w-1/2 w-3/4  h-full flex relative items-center justify-center self-center'>
					<ListingStepper />
				</div>
			</div>
		</>
	);
}
