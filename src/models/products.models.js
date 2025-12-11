

import { doc, getDoc, collection, getDocs, setDoc, addDoc, updateDoc, deleteDoc, documentId, } from "firebase/firestore";
import { db } from "../db/firebase-db.config.js";

export const getAllProductsModel = async () => {
    try {
        const queryRes = await getDocs(collection(db, "products"));
        const products = queryRes.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        console.log(products)

        return products;
    } catch (error) {
        console.error("models", error);
        throw error;
    }
};

// Agregar un producto
export const addProductModel = (product) => {
    return (
        new Promise(async (res, rej) => {
            try {
                const docRef = await addDoc(collection(db, "products"), product);
                res({ ...product, id: docRef.id })
            } catch (error) {
                console.log(error)
                rej(error)
            }
        })
    )
};

// Obtener un producto por id
export const getProductModelById = (id) => {
    return new Promise(async (res, rej) => {
        try {
            const queryRes = doc(db, "products", id);
            const product = await getDoc(queryRes)
            // console.log(product.data())
            if (product.exists()) {

                console.log(product.id);
                console.log(product.data());
                const productRes = { [product.id]: product.data() };
                res(productRes)
            } else {
                res()
            }

        } catch (error) {
            console.log(error)
            rej(error)
        }
    })
};

// Editar producto por id
export function editProductModelById(id, product) {
    return (
        new Promise(async (res, rej) => {
            try {
                const productRef = doc(db, "products", id)

                await updateDoc(productRef, { ...product })

                res(getProductModelById(id))
            } catch (error) {
                console.log(error)
                rej(error)
            }
        })
    )
}


// Eliminar un producto por id
export function deleteProductModelById(id) {
    return (
        new Promise(async (res, rej) => {
            try {
                await deleteDoc(doc(db, "products", id));
                console.log("Producto eliminado, id:", id)
                res()
            } catch (error) {
                console.log(error)
                rej(error)
            }
        })
    )
}