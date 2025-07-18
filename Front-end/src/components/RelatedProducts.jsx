import React from 'react'
import data_product from './assets/data'
import Item from './Item'
function RelatedProducts() {
  return (
    <div className="flex flex-col items-center gap-2.5 mb-20">
      <h1 className="text-[#171717] text-5xl font-semibold">
        Related Products
      </h1>
      <hr className="w-110 h-1 rounded-sm bg-[#252525] " />
      <div className="popular- mt-10 flex items-center justify-around  flex-1 gap-10">
        {data_product.map((item, index) => {
          return (
            <Item
              key={index}
              new_price={item.new_price}
              old_price={item.old_price}
              image={item.image}
              name={item.name}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RelatedProducts