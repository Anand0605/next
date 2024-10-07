import React from 'react'

import product from './product';

const productlist= async()=>{
  let data = await fetch("https://dummyjson.com/products")
  data = await data.json();
  return data.products
}
const page = async() => {

  let products = await productlist();
  console.log(products)
  return (
    <div>
      itemlist
      <product/>
    </div>
  )
}

export default page
