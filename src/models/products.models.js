

import { doc, getDoc, collection, getDocs, setDoc, addDoc, updateDoc, deleteDoc, } from "firebase/firestore";

export const getAllProductsModel = () => {
    return new Promise(async (res, req) => {
        try {
            const queryRes = await getDocs(collection(db, "products"));
            const products = []
            queryRes.forEach((product) => {
                console.log(product.id, " => ", product.data());
                products.push({ ...product.data(), id: product.id })
            });
            console.log(products)
            res(products)
        } catch (error) {
            console.log(error)
            req(error)
        }
    })
}