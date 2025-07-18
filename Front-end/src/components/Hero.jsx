import React from 'react'
import hand_icon from '../components/assets/hand_icon.png'
import arrow_icon from '../components/assets/arrow.png'
import hero_image from '../components/assets/hero_image.png'
function Hero() {
  return (
    <div className="lg:h-[100vh] w-full lg:flex bg-gradient-to-r from-pink-100 from-10% via-pink-50 via-30% to-pink-200 to-90%">
      <div className="hero-left flex flex-col flex-1 justify-center gap-8 pl-32 text-3xl/loose">
        <h2 className="text-[#090909] pl-2">NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-icon flex items-center gap-5">
            <p className="text-[#171717] text-8xl  ">New</p>
            <img className="w-28  " src={hand_icon} alt="" />
          </div>
          <p className="text-[#171717] text-8xl ">Collections</p>
          <p className="text-[#171717] text-8xl ">For everyone</p>
        </div>
        <div className="hero-latest-btn flex items-center justify-center gap-4 w-80 h-20 rounded-4xl mt-8 bg-[#ff4141] text-white text-2xl font-medium  ">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right h-full flex-1 flex items-center justify-center">
        <img className=" h-full" src={hero_image} alt="" />
      </div>
    </div>
  );
}

export default Hero