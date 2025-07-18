import React, { useContext } from 'react'
import { ShopContext } from '../context/Context'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/Item';

function ShopCategory(props) {

  const {all_product} = useContext(ShopContext);

  return (
    <div className='shop-cat'>
      <img className='block my-7 mx-auto w-[85%]' src={props.banner} alt="" />
      <div className='flex mx-30 justify-between items-center'>
        <p>
          <span className='font-semibold '>Showing 1-12</span> out of 36 products
        </p>
        <div className='py-2.5 px-5 rounded-4xl border-[1px] bg-[#fbfbfb]  border-[#888] cursor-pointer'>
          Sort by <img src={dropdown_icon} alt="" />

        </div>

      </div>
      <div className='my-5 mx-30 grid grid-cols-4 gap-10'>
        {all_product.map((item, index)=>{
          if(item.category === props.category){
             return <Item key={index} new_price={item.new_price} old_price={item.old_price} image={item.image} name={item.name} id={item.id}/>            
          }
          else
          {
            return null;
          }
        })}
      </div>
      <div className='flex items-center justify-center my-36 mx-auto w-40 h-16 rounded-4xl bg-[#ededed] text-[#787878]'>
        Explore more

      </div>



    </div>
  )
}

export default ShopCategory