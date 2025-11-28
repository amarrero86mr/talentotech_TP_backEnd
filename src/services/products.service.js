import { addProductModel, getAllProductsModel } from "../models/products.models";

// Obtener todos los productos
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

// Agregar un producto
export const addProductService = async (product) => {
  return(
    new Promise(async (res, req) => {
      try{
        const newProduct = await addProductModel(product)
        res(newProduct)
      }catch(error){
        req(error)
      }
    })
  )

}