'use client'
import React, { useEffect, useState } from 'react';

const Page = () => {
  // Declare state outside of useEffect
  const [product, setProduct] = useState([]);

  // useEffect for fetching data
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();
        console.log(data);
        setProduct(data.products); // data.products, not data.product
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData(); // Call the async function to fetch data
  }, []); // Empty dependency array means this runs only on component mount

  return (
    <div>
      <h1>Product List</h1>
      {
        product.length > 0 ? (
          product.map((item) => (
            <h1 key={item.id}>{item.title},{item.price}</h1> // Ensure each item has a unique key
          ))
        ) : (
          <p>No products found</p>
        )
      }
    </div>
  );
};

export default Page;
