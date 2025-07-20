import React, { useContext } from 'react'
import star_icon from '../components/assets/star_icon.png'
import star_dull_icon from '../components/assets/star_dull_icon.png'
import { ShopContext } from '../context/Context'
function ProductDisplay(props) {
    const {product} = props
    const {addToCart} = useContext(ShopContext);
  return (
    <div className="flex my-0 mx-auto w-[85%] ">
      <div className="flex gap-5 w-1/2 ">
        <div className="flex flex-col gap-5">
          <img className="h-40 " src={product.image} alt="" />
          <img className="h-40 " src={product.image} alt="" />
          <img className="h-40 " src={product.image} alt="" />
          <img className="h-40 " src={product.image} alt="" />
        </div>
        <div className="">
          <img className="w-2xl h-[700px]" src={product.image} alt="" />
        </div>
      </div>
      <div className="my-5 px-20 flex flex-col justify-start w-1/2  ">
        <h1 className="text-[#3d3d3d] text-3xl  ">{product.name}</h1>
        <div className="flex gap-2 items-center mt-5 text-[#1c1c1c] text-lg ">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>4.5</p>
        </div>
        <div className="flex mx-0 my-10 text-2xl font-bold gap-10">
          <div className="text-[#818181] line-through  ">
            $ {product.old_price}
          </div>
          <div className="text-[#ff4141] ">$ {product.new_price}</div>
        </div>
        <div className="dispDesc">
          <p>{product.description}</p>
        </div>
        <div className="sizes">
          <h1 className="mt-14 text-[#656565] text-xl font-semibold   ">
            Select Size
          </h1>
          <div className="flex gap-5 my-7">
            <div className="px-6 py-4 bg-[#fbfbfb] border-[2px] rounded cursor-pointer border-[#ebebeb] ">
              S
            </div>
            <div className="px-6 py-4 bg-[#fbfbfb] border-[2px] rounded cursor-pointer border-[#ebebeb] ">
              M
            </div>
            <div className="px-6 py-4 bg-[#fbfbfb] border-[2px] rounded cursor-pointer border-[#ebebeb] ">
              L
            </div>
            <div className="px-6 py-4 bg-[#fbfbfb] border-[2px] rounded cursor-pointer border-[#ebebeb] ">
              XL
            </div>
            <div className="px-6 py-4 bg-[#fbfbfb] border-[2px] rounded cursor-pointer border-[#ebebeb] ">
              XXL
            </div>
          </div>
        </div>
        <button onClick={()=>addToCart(product.id)} className="px-10 py-5 w-52 font-semibold bg-[#ff4141] text-white rounded-2xl cursor-pointer hover:bg-[#ff1111] border-none mb-10 ">
          Add to Cart
        </button>
        <p className="text-[#1c1c1c] text-lg">
          <span className="font-semibold">Category :</span> Women, T-Shirt, Crop
          Top
        </p>
        <p className="text-[#1c1c1c] text-lg">
          <span className='font-semibold'>Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay