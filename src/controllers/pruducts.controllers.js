import { getAllProductsService } from "../services/products.service";


export const getAllProducts = async (req, res) => {
    try {
        console.log("paso1")
        const products = await getAllProductsService()
        console.log(products)
        res.status(200).json(products);
    } catch (error) {
        res.status(500).send()
    }
};