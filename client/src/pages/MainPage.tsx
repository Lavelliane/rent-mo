import React from 'react';
import HeroPage from './HeroPage.tsx';
import ListingPage from './ListingPage.tsx';

const MainPage = () => {
	return (
		<div>
			<HeroPage />
			<ListingPage />
			<div className='w-full min-h-screen bg-slate-400'></div>
		</div>
	);
};

export default MainPage;
