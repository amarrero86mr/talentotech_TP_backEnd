import { doc, getDoc, collection, getDocs, setDoc, addDoc, updateDoc, deleteDoc, documentId, } from "firebase/firestore";
import { db } from "../db/firebase-db.config.js";

export const addRegisterVisitorsModel = (visitor) => {
    return (
        new Promise(async (res, rej) => {
            try {
                const passhash = await bcrypt.hash(visitor.password, 10);
                const email = visitor.email;
                const newVisitor = { email: email, passhash: passhash }

                const docRef = await addDoc(collection(db, "visitors"), newVisitor);
                res({ ...newVisitor, id: docRef.id })
            } catch (error) {
                console.log(error)
                rej(error)
            }
        })
    )
};