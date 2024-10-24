import React, { useContext, useEffect, useState } from 'react'
import Product from '../components/Product'
import { ProductContext } from '../context/ProductContext';


const Home = () => {
    const {products}=useContext(ProductContext);
    const [firstProducts,setFirstProducts]=useState([]);

    useEffect(()=>{
        setFirstProducts(products.slice(0,10));
        
    },[])

    

  return (
 <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 gap-y-4 px-10'>
     
      {firstProducts.map((item)=>{
       
       return <Product key={item.id} img={item.image} title={item.title} price={item.price} rating={item.rating.rate}/>
        
    })}
    
  </div>
  )
}

export default Home
