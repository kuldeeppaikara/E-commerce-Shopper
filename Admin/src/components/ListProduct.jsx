import React, { useEffect, useState } from 'react'
import crossIcon from '../assets/cross_icon.png'
import toast from 'react-hot-toast';
function ListProduct() {
    const [allproducts,setAllProducts] = useState([]);
    const fetchProducts = async () => {
        await fetch(`${import.meta.env.VITE_API_URL}/allproducts`)
        .then((response) => response.json())
        .then((data) => {
            setAllProducts(data);
        });      
    }
    const removeProduct = async (id)=>{
        await fetch(`${import.meta.env.VITE_API_URL}/deleteproduct`,{
            method:"POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            body: JSON.stringify({id:id}),
        }).then((response) => response.json())
        .then((data) => {
            console.log(data);
            toast.success("Product removed successfully");
            fetchProducts();
        });
    }

    useEffect(() => {
        fetchProducts();
    },[])
  return (
    <div className="flex flex-col items-center lg:w-[97%] h-[80dvh] lg:overflow-auto  m-8 rounded-md bg-white ">
      <h1 className='text-2xl font-[Poppins]'>All Products List</h1>
      <div className="grid grid-cols-12 place-items-center w-full py-2.5 px-4 lg:px-12 my-8 mx-auto text-xs sm:text-sm md:text-lg  gap-1.5  rounded-md bg-[#D9D9D9]">
        <p className="">Products</p>
        <p className="col-span-3">Title</p>
        <p className="col-span-2 col-start-5">Old Price</p>
        <p className="col-span-2 col-start-7">New Price</p>
        <p className="col-span-2 col-start-9">Category</p>
        <p className="col-span-2 col-start-11">Remove</p>
      </div>
      <div className="list-product-all">
        {allproducts.map((item, index) => {
          return (
            <div key={index}>
              <div
                className="grid grid-cols-12 place-items-center w-full py-2.5 px-4 lg:px-12 my-8 mx-auto text-xs sm:text-lg gap-1.5  rounded-md bg-rose-50"
                key={index}
              >
                <img src={item.image} alt="" className="list-product0img" />
                <p className="col-span-3">{item.name}</p>
                <p className="col-span-2 col-start-5">${item.old_price}</p>
                <p className="col-span-2 col-start-7">${item.new_price}</p>
                <p className="col-span-2 col-start-9">{item.category}</p>
                <img
                  onClick={()=>removeProduct(item.id)}
                  className="col-span-2 col-start-11 cursor-pointer"
                  src={crossIcon}
                  alt=""
                />
              </div>
              <hr className="h-1 rounded-sm bg-[#e2e2e2] border-0 " />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListProduct