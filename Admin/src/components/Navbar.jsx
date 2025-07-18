import React from 'react'
import nav_logo from '../assets/nav-logo.svg'
import nav_profile from '../assets/nav-profile.svg'
function Navbar() {
  return (
    <div className='flex items-center justify-between lg:px-15 md:px-10 px-5   py-4 shadow-2xl rounded-full bg-white'>
        <img className='w-52' src={nav_logo} alt="" />
        <img className='w-19' src={nav_profile} alt="" />
        
    </div>
  )
}

export default Navbar