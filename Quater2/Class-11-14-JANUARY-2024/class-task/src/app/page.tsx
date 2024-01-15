"use client"
import axios from 'axios';
import Image from 'next/image'
import { useState, useEffect } from 'react';
import Card from './components/card/card';

export default function Home() {

  const [products, setProduct] = useState([]);
  const [loader, setLoader] = useState(true);
  const [reLoad, setReLoad] = useState(false);


  const getAllProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      console.log(response.data);
      setProduct(response.data)
      setLoader(false);
    } catch (error) {
      console.error(error);
    }
    finally {
      setLoader(false);
    }
  }

  const reloadProducts = () => {
    setReLoad(true);
  }

  useEffect(() => {
    getAllProducts()
  },[reLoad])

  return (
    <>
      <button onClick={reloadProducts} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Show Products
      </button>
      {loader && "Loading...."}
      <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-3 px-2 md:px-16 lg:px-8">
        {products.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
    </>
  )
}
