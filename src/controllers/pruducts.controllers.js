import { addProductService, getAllProductsService } from "../services/products.service";


// Obtener todos los productos
export const getAllProductsControllers = async (req, res) => {
    try {
        console.log("paso1")
        const products = await getAllProductsService()
        console.log(products)
        res.status(200).json(products);
    } catch (error) {
        res.status(500).send()
    }
};

// Agregar un producto
export const addProductControllers = async (req, res) => {
    try{
        const product = req.body;
        const newProduct = await addProductService(product)
        res.status(200).json(newProduct);
    }catch(error){
        res.status(500).send()
    }
}