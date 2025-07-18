import React from 'react'
import arrow_icon from '../components/assets/arrow.png'
function Breadcrums(props) {
    const {product} = props;
    

  return (
    <div className='flex items-center gap-2 my-16 mx-auto text-lg font-semibold capitalize px-1 py-1 w-[85%] text-[#adabab] bg-[#333030] '>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}  
    </div>
  )
}

export default Breadcrums