import React from 'react'

function NewsLetter() {
  return (
    <div className="newsletter w-[85%] h-[40vh] flex flex-col items-center justify-center gap-4 m-auto bg-linear-to-bl from-pink-200 via-pink-300 to-pink-200">
      <h1 className="text-[#454545] text-5xl font-semibold">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-[#454545] text-2xl">
        Subscribe to our newsletter and stay undated
      </p>
      <div className="flex items-center justify-between w-3xl px-5 py-2 rounded-2xl border-2 border[#e3e3e3] gap-4 mt-5">
        <input
          className='w-lg  border-none outline-none text-[#616161] font-["Poppins"] text-lg '
          type="email"
          placeholder="Your Enail id"
        />
        <button className="w-40 h-12 rounded-2xl bg-[#131313] text-white text-lg font-semibold cursor-pointer hover:bg-linear-to-bl from-pink-200 via-pink-300 to-pink-200 hover:border-[1px]  hover:text-black hover:duration-500 duration-500">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsLetter