import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'


const Product = ({img,title,price,rating}) => {
    const {currency}=useContext(ProductContext);
  return (
    <div className='flex flex-col  justify-center w-[75%] gap-3  '>
        <img className='cursor-pointer hover:scale-110   transition-all ease-in-out' src={img} alt="" width={150} height={150}/>
        <p className='font-bold text-md mt-10'>{title}</p>
        <p ><span>{currency} </span>{price}</p>
        <p>{rating}</p>
      </div>
     
    
  )
}

export default Product
