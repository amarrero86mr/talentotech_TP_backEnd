import { getAllProductsModel } from "../models/products.models";


export const getAllProductsService = async () => {
  return(
    new Promise(async (res,rej)=> {
      console.log("Test dentro de services: get all products models -> services")
      try{
        const productos = await getAllProductsModel()
        res(productos);
      }catch(error){
        rej()
      }
    })
  )
};