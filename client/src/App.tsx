import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage.tsx';
import Registration from './pages/Registration.tsx';
import Login from './pages/Login.tsx';
import Profile from './pages/Profile.tsx';
import Host from './pages/Host.tsx';
import Listing from './pages/Listing.tsx';
import Protected from './components/Protected.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import HelpPage from './pages/HelpPage.tsx';
import GettingStarted from './pages/help_center/GettingStarted.tsx';
import SettingUp from './pages/help_center/SettingUp.tsx';
import ManageAccount from './pages/help_center/ManageAccount.tsx';
import ReservingHelp from './pages/help_center/ReservingHelp.tsx';
import TwoVerification from './pages/help_center/TwoVerification.tsx';
import TermsOfService from './pages/TermsOfService.tsx';
import ContactUs from './pages/ContactUs.tsx';
import AboutUs from './pages/AboutUs.tsx';
import HowItWorks from './pages/HowItWorks.tsx';
import LoadingPage from './pages/LoadingPage.tsx';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={
							<Protected>
								<MainPage />
							</Protected>
						}
					/>
					<Route path='/landing' element={<MainPage />} />
					<Route path='/register' element={<Registration />} />
					<Route path='/login' element={<Login />} />
					<Route
						path='/profile'
						element={
							<Protected>
								<Profile />
							</Protected>
						}
					/>
					<Route path='/host' element={<Host />} />
					<Route path='/listing' element={<Listing />} />
					<Route path='/error' element={<ErrorPage />} />
					<Route path='/support' element={<HelpPage />} />
					<Route path='/getting-started' element={<GettingStarted />} />
					<Route path='/setting-up' element={<SettingUp />} />
					<Route path='/manage-account' element={<ManageAccount />} />
					<Route path='/reserving-help' element={<ReservingHelp />} />
					<Route path='/two-verification' element={<TwoVerification />} />
					<Route path='/terms-of-services' element={<TermsOfService />} />
					<Route path='/contact-us' element={<ContactUs />} />
					<Route path='/about-us' element={<AboutUs />} />
					<Route path='/how-it-works' element={<HowItWorks />} />
					<Route path='/loading' element={<LoadingPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
