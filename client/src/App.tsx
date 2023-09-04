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
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;
