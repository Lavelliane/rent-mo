import React, { useEffect } from 'react';
import HeroPage from './HeroPage.tsx';
import ListingPage from './ListingPage.tsx';
import HowItWorks from './HowItWorks.tsx';
import HostBookCards from './HostBookCards.tsx';

const MainPage = () => {
	return (
		<div>
			<HeroPage />
			<HowItWorks />
			<ListingPage />
			<div className='w-full min-h-screen bg-slate-400'></div>
			<HostBookCards />
		</div>
	);
};

export default MainPage;
