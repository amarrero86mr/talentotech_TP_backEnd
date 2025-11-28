import { addProductService, getAllProductsService, getProductServiceById } from "../services/products.service";


// Obtener todos los productos
export const getAllProductsControllers = async (req, res) => {
    try {
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

// Obtener un producto por id
export const getProductControllersById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await getProductServiceById(id)
        console.log(product)
        res.status(200).json(product);
    } catch (error) {
        res.status(500).send()
    }
};