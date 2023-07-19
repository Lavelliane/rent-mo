import { useState } from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import HeroPage from "./pages/HeroPage.tsx"
import Registration from "./components/Registration.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/landing' element={<HeroPage/>}></Route>
        <Route path='/register' element={<Registration/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
