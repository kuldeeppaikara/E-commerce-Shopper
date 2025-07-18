import React, { useEffect, useState } from 'react'
// import data_product from '../components/assets/data'
import Item from './Item';

function Popular() {
  const[data_product,setData_product]= useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/popularinwomen`).then((response)=>response.json()).then((data)=>setData_product(data));
  },[]);
  return (
    <div className="popular flex flex-col items-center gap-3 mx-auto w-[85%] h-[90vh] p-5">
      <h1 className='text-[#171717] text-5xl font-semibold '>POPULAR IN WOMEN</h1>
      <hr className='w-lg h-1 rounded-sm bg-[#252525] ' />

      <div className="popular- mt-2 flex items-center justify-around  flex-1 gap-10 ">
        {data_product.map((item,index) => (
          <Item key={index} new_price={item.new_price} old_price={item.old_price} image={item.image} name={item.name} id={item.id}/>
        ))}
      </div>
    </div>
  );
}

export default Popular