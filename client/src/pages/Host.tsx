import React from 'react'
import Navbar from '../components/Navbar'
import HostBG from '../assets/images/Rent-mo-hero-bg.png'

const Host = () => {
  return (
    <>
        <div className='flex flex-col w-full h-screen bg-dark900 shadow-searchbox bg-cover bg-no-repeat font-Messina-Sans' style={{ backgroundImage: `url(${HostBG})`}}>
            <img></img>
            <Navbar/>
            <div className='flex w-3/5 h-4/6 mt-16 pl-20 relative text-white font-bold text-5xl bg-white self-center rounded-2xl shadow-searchbox'>
                
            </div>
        </div>
        </>
   
  )
}

export default Host