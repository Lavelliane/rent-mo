import React from 'react'
import ProfileBG from '../assets/images/profile-bg.jpg'
import Navbar from '../components/Navbar.tsx'
// style={{ minHeight: 600, backgroundImage: `url(${ProfileBG})`}}
const Profile = () => {
    return (
        <>
        <div className='flex flex-col w-full h-96 bg-dark900 shadow-searchbox bg-cover bg-no-repeat font-Messina-Sans'>
            <img></img>
            <Navbar/>
            <div className='flex mt-20 pl-20 relative text-white font-bold text-5xl'>
                <h1>Hello</h1><h1 className='text-yellow ml-2'>{"Vincent"}!</h1>
            </div>
        </div>
        </>
    )
}

export default Profile