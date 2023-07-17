import {useState} from 'react';
import BgHomepage from '../src/assets/images/Rent-mo-hero-bg.png';
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="h-screen w-full bg-cover bg-center"
        style={{backgroundImage: `url(${BgHomepage})`}}
      >
        <nav className="h-20">
          <ul className=" px-[14%] pt-7">
            <li className="flex justify-between items-center">
              <img
                className=" w-48 inline justify-start"
                src="../src/assets/logo/RentMo-logo.svg"
              ></img>
              <div className="flex gap-10 text-white font-Messina-Sans text-base items-center">
                <a href="#" className="">
                  How it works
                </a>
                <a href="#" className="">
                  Support
                </a>
                <a
                  href="#"
                  className=" ring-1 ring-yellow rounded-full px-6 py-2 ring- text-yellow"
                >
                  Become a host
                </a>
                <span className=" w-[2px] h-10 bg-dark600"></span>
                <a href="#" className="">
                  Login
                </a>
                <a href="#" className="">
                  Sign up
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;
