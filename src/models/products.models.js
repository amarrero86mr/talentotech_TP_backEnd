

import { doc, getDoc, collection, getDocs, setDoc, addDoc, updateDoc, deleteDoc, } from "firebase/firestore";
import { db } from "../db/firebase-db.config.js";

// Obtener todos los productos
// export const getAllProductsModel = () => {
//     return new Promise(async (res, rej) => {
//         try {
//             const queryRes = await getDocs(collection(db, "products"));
//             console.log(queryRes)
//             const products = []
//             queryRes.forEach((product) => {
//                 products.push({ ...product.data(), id: product.id })
//             });
//             console.log(products)
//             res(products)
//         } catch (error) {
//             console.log(error)
//             rej(error)
//         }
//     })
// };
export const getAllProductsModel = async () => {
    try {
        const queryRes = await getDocs(collection(db, "products"));
        console.log(queryRes.size)
        const products = queryRes.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return products;
    } catch (error) {
        console.error("models", error);
        throw error;
    }
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

// Obtener un producto por id
export const getProductModelById = (id) => {
    return new Promise(async (res, req) => {
        try {
            const queryRes = await getDoc(collection(db, "products", id));
            const product = queryRes.data()
            console.log(product)
            res(product)
        } catch (error) {
            console.log(error)
            req(error)
        }
    })
};