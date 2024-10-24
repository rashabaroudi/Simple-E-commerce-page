
import { APIS } from "../apis"

export const  getProductsData = async() =>{
    const  response=await fetch(APIS.List);
      
    const jsonData= await response.json();
    return jsonData
      
    
}