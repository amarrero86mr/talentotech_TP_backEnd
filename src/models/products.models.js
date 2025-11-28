

import { doc, getDoc, collection, getDocs, setDoc, addDoc, updateDoc, deleteDoc, } from "firebase/firestore";

// Obtener todos los productos
export const getAllProductsModel = () => {
    return new Promise(async (res, req) => {
        try {
            const queryRes = await getDocs(collection(db, "products"));
            const products = []
            queryRes.forEach((product) => {
                products.push({ ...product.data(), id: product.id })
            });
            console.log(products)
            res(products)
        } catch (error) {
            console.log(error)
            req(error)
        }
    })
};

// Agregar un producto
export const addProductModel = (product) => {
    return (
        new Promise(async (res, req) => {
            try {
                const docRef = await addDoc(collection(db, "products"), product);
                res({ ...product, id: docRef.id })
            } catch (error) {
                console.log(error)
                req(error)
            }
        })
    )
};