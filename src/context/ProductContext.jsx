import { createContext } from "react";
import { getProductsData } from "../services";

export const ProductContext = createContext();
const products = await getProductsData();
const currency='$';
const value={
    products,currency
}



 const ProductContextProvider = (props)=>{
    return (
    <ProductContext.Provider value={value}>
     {props.children}
    </ProductContext.Provider>)
}

export default ProductContextProvider