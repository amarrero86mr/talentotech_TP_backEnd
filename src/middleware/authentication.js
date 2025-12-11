import jwt from 'jsonwebtoken';
import 'dotenv/config';


export const requireAuth = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader?.split(" ")[1]; // formato "Bearer <token>"

    if (!token) {
        return res.status(403).json("Access denied. Token missing.");
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.visitor = decoded; // guarda los datos del visitor autenticado
        next();
    } catch (err) {
        return res.status(err.status).json("Invalid or expired token.", err);
    }
};