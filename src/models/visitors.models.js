import { doc, getDoc, collection, getDocs, setDoc, addDoc, updateDoc, deleteDoc, documentId, query, where, } from "firebase/firestore";
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

export const getLoginModel = (loginData) => {
  return new Promise(async (res, rej) => {
    try {
      const email = loginData.email;
      const password = loginData.password;

      const q = query(
        collection(db, "visitors"),
        where("email", "==", email)
      );

      const queryRes = await getDocs(q);

      if (queryRes.empty) {
        return rej({ status: 404, msg: "User not found" });
      }

      let visitor;
      queryRes.forEach(docSnap => {
        visitor = { id: docSnap.id, ...docSnap.data() };
      });

      const validPassword = await bcrypt.compare(password, visitor.passhash);
      if (!validPassword) return rej({ status: 401, msg: "Invalid password" });

      const token = jwt.sign(
        { id: visitor.id_visitor, email: visitor.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res({ token });

    } catch (error) {
      rej(error);
    }
  });
};