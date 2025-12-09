import { doc, getDoc, collection, getDocs, setDoc, addDoc, updateDoc, deleteDoc, documentId, } from "firebase/firestore";
import { db } from "../db/firebase-db.config.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const addRegisterVisitorsModel = (visitor) => {
    return (
        new Promise(async (res, rej) => {
            try {
                console.log(visitor)
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

export const getloginModelByEmail = (logindata) => {
    return new Promise(async (res, rej) => {
        try {
            const email = logindata.email
            const password = logindata.password
            const queryRes = doc(db, "visitors", email);
            const visitor = await getDoc(queryRes)
            // console.log(product.data())
            if (visitor.exists()) {

                const validPassword = await bcrypt.compare(password, visitor.data().passhash);
                if (!validPassword) return error401("Invalid password");

                const token = jwt.sign(
                    { id: visitor.data().id_visitor, email: visitor.data().email },
                    process.env.JWT_SECRET || "default_secret",
                    { expiresIn: "1h" }
                );

                // return { token };
                res(token)
            } else {
                res()
            }

        } catch (error) {
            console.log(error)
            rej(error)
        }
    })
};