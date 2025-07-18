import React, { useEffect } from "react";
// import new_collections from '../components/assets/new_collections'
import { useState } from "react";
import Item from "./Item";

function NewCollections() {
  const [new_collections, setnew_collections] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/newcollections`)
      .then((response) => response.json())
      .then((data) => setnew_collections(data));
  }, []);
  return (
    <div className="new-collections mx-auto w-[85%] flex flex-col items-center gap-3 h-fit p-5 pb-10 mb-30">
      <h1 className="text-[#171717] text-5xl font-semibold ">
        New Collections
      </h1>
      <hr className="w-110 h-1 rounded-sm p-[2px] bg-[#252525]" />
      <div className="collections mt-10 grid grid-cols-4 gap-10">
        {new_collections.map((item, index) => {
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

export default NewCollections;
