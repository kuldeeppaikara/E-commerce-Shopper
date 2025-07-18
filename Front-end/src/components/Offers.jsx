import React from 'react'
import exclusive_image from '../components/assets/exclusive_image.png'

function Offers() {
  return (
    <div className="offers w-[85%] h-[60vh] flex m-auto  px-24 mb-36 bg-linear-to-tr from-pink-100 to-pink-300 ">
      <div className="left flex-1 flex flex-col justify-center">
        <h1 className="text-[#171717] text-7xl font-semibold ">Exclusive</h1>
        <h1 className="text-[#171717] text-7xl font-semibold ">
          Offers For You
        </h1>
        <p className='text-[#171717] text-2xl font-semibold mt-4'>ONLY ON BEST SELLERS PRODUCT</p>
        <div className="button">
          <button className='w-72 h-20 rounded-4xl bg-[#ff4141] text-white text-2xl font-medium cursor-pointer mt-8'>Shop Now</button>
        </div>
      </div>
      <div className="right flex-1 flex items-center justify-end">
        <img className="h-full" src={exclusive_image} alt="" />
      </div>
    </div>
  );
}

export default Offers