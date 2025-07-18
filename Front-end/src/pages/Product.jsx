import React, { use, useContext } from 'react'
import { ShopContext } from '../context/Context'
import Breadcrums from '../components/Breadcrums';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts';

function Product() {
  const {all_product} = useContext(ShopContext);
  const {id} =useParams();
  const pid = parseInt(id);

  const product = all_product.find(item => item.id == pid);
  
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product