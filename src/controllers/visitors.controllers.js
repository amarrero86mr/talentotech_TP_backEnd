import { addRegisterVisitorsService } from "../services/visitors.service";


// Agregar un producto
export const addRegisterVisitorControllers = async (req, res) => {
    try{
        const visitors = req.body;
        console.log(visitors)
        const newVisitors = await addRegisterVisitorsService(visitors)
        res.status(200).json(newVisitors);
    }catch(error){
        res.status(500).send("controllers", error)
    }
}