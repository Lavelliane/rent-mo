import { useState } from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import MainPage from "./pages/MainPage.tsx"
import Registration from "./pages/Registration.tsx";
import Login from "./pages/Login.tsx";
import Profile from "./pages/Profile.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/landing' element={<MainPage/>}></Route>
        <Route path='/register' element={<Registration/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
