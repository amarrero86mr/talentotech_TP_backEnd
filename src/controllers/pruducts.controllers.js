import { addProductService, deleteProductServiceById, editProductServiceById, getAllProductsService, getProductServiceById } from "../services/products.service.js";


// Obtener todos los productos
export const getAllProductsControllers = async (req, res) => {
    try {
        const products = await getAllProductsService()
        res.status(200).json(products);
    } catch (error) {
        res.status(500).send(error)
    }
};

// Agregar un producto
export const addProductControllers = async (req, res) => {
    try{
        const product = req.body;
        const newProduct = await addProductService(product)
        res.status(200).json(newProduct);
    }catch(error){
        res.status(500).send("controllers", error)
    }
}

// Obtener un producto por id
export const getProductControllersById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await getProductServiceById(id)
        res.status(200).json(product);
    } catch (error) {
        res.status(500).send(error)
    }
};

// Editar un producto por id
export const editProductControllersById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = req.body;
        const productRes = await editProductServiceById(id, product)
        res.status(200).json(productRes);
    } catch (error) {
        res.status(500).send(error)
    }
};

// eliminar un producto por Id
export const deleteProductControllersById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await deleteProductServiceById(id)
        res.status(200).json(product);
    } catch (error) {
        res.status(500).send(error)
    }
};