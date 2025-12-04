import { addProductModel, deleteProductModelById, editProductModelById, getAllProductsModel, getProductModelById } from "../models/products.models.js";

// Obtener todos los productos
export const getAllProductsService = async () => {
  return(
    new Promise(async (res,rej)=> {
      console.log("Test dentro de services: get all products services")
      try{
        const productos = await getAllProductsModel()
        res(productos);
      }catch(error){
        rej("services error: ", error)
      }
    })
  )
};

// Agregar un producto
export const addProductService = async (product) => {
  return(
    new Promise(async (res, rej) => {
      console.log("Test dentro de services: add product services")
      try{
        const newProduct = await addProductModel(product)
        res(newProduct)
      }catch(error){
        rej("services error: ", error)
      }
    })
  )
}

// Obtener todos los productos
export const getProductServiceById = async (id) => {
  return(
    new Promise(async (res,rej)=> {
      console.log("Test dentro de services: get product models by id services")
      try{
        const producto = await getProductModelById(id)
        res(producto);
      }catch(error){
        rej("services error: ", error)
      }
    })
  )
};

// Editar Producto por id
export const editProductServiceById = async (id, product) => {
  return(
    new Promise(async (res, rej) => {
      console.log("Test dentro de services: edit product services")
      try{
        const editedProduct = await editProductModelById(id, product);
        res(editedProduct)
      }catch(error){
        rej("services error: ", error)
      }
    })
  )
}

// Eliminar producto por id
export const deleteProductServiceById = async (id) => {
  return(
    new Promise(async (res, rej) => {
      console.log("Test dentro de services: deleted product models -> services")
      try{
        const deleteProduct = await deleteProductModelById(id)
        res(deleteProduct)
      }catch(error){
        rej("services error: ", error)
      }
    })
  )
}
