import React from "react";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <div className="item w-64 hover:transform h-96 hover:scale-105 duration-600">
      <Link to={`/product/${props.id}`}><img className="w-full h-[75%] object-cover object-top" onClick={window.scrollTo(0, 0)} src={`${import.meta.env.VITE_API_URL}${props.image}`} alt="" /></Link>
      <p className="mt-6 mb-3 text-lg/tight font-medium">{props.name}</p>
      <div className="item-price  flex justify-between px-1 text-lg font-semibold ">
        <div className="new-price text-[#374151]">${props.new_price}</div>
        <div className="old-price text-[#8c8c8c] font-normal line-through ">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
}

export default Item;
