import { useState } from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import MainPage from "./pages/MainPage.tsx"
import Registration from "./pages/Registration.tsx"
import Login from "./pages/Login.tsx"
import Profile from "./pages/Profile.tsx"
import Host from "./pages/Host.tsx"
import Listing from "./pages/Listing.tsx"
import Protected from "./components/Protected.tsx"

function App() {
	const [count, setCount] = useState(0)

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
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
