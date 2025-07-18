import React from 'react'
import footer_logo from '../components/assets/logo_big.png'
import instagram_icon from '../components/assets/instagram_icon.png'
import pinterest_icon from '../components/assets/pinterest_icon.png'
import whatsapp_icon from '../components/assets/whatsapp_icon.png'

function Footer() {
  return (
    <div className='flex flex-col items-center justify-center gap-7 mt-6 '>
        <div className='footer-logo flex items-center gap-5 '>
            <img src={footer_logo} alt="" />
            <p className='text-[#383838] text-5xl font-bold '>SHOPPER</p>

        </div>
        <ul className='flex items-center justify-center gap-14 text-[#252525] text-lg '>
            <li className='cursor-pointer'>Company</li>
            <li className='cursor-pointer'>Products</li>
            <li className='cursor-pointer'>Office</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact</li>
        </ul>
        <div className="flex gap-5">
            <div className="p-2.5 pb-1.5 bg-[#fbfbfb] border-[1px] border-[#ebebeb] cursor-pointer">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="p-2.5 pb-1.5 bg-[#fbfbfb] border-[1px] border-[#ebebeb] cursor-pointer">
                <img src={pinterest_icon} alt="" />
            </div>
            <div className="p-2.5 pb-1.5 bg-[#fbfbfb] border-[1px] border-[#ebebeb] cursor-pointer">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="flex flex-col items-center gap-8 w-full mb-8 text-[#1a1a1a] text-lg">
            <hr className='w-[80%] border-none h-1 rounded-[20px] bg-[#c7c7c7]' />
            <p>Copyright @{new Date().getFullYear()} All Rights Reserved | Shopper</p>
        </div>
        
    </div>
  )
}

export default Footer