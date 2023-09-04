import React from 'react';
import HostCard from '../components/HostCard';
import BookCard from '../components/BookCard';

const HostBookCards = () => {
	return (
		<div className='flex lg:flex-row flex-col justify-center gap-4 w-full h-fit items-center translate-y-20'>
			<HostCard />
			<BookCard />
		</div>
	);
};

export default HostBookCards;
