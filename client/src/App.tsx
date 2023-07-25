import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import Registration from "./pages/Registration.tsx";
import Login from "./pages/Login.tsx";
import Profile from "./pages/Profile.tsx";
import Host from "./pages/Host.tsx";
import Listing from "./pages/Listing.tsx";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainPage />}></Route>
					<Route path='/landing' element={<MainPage />}></Route>
					<Route path='/register' element={<Registration />}></Route>
					<Route path='/login' element={<Login />}></Route>
					<Route path='/profile' element={<Profile />}></Route>
					<Route path='/host' element={<Host />}></Route>
					<Route path='/listing' element={<Listing />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
