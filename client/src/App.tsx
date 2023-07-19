import { useState } from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import MainPage from './pages/MainPage.tsx'
import Registration from "./pages/Registration.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/register' element={<Registration/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
