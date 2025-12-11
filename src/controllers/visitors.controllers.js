import { addRegisterVisitorsService, getLoginVisitorsService } from "../services/visitors.service.js";


export const addRegisterVisitorControllers = async (req, res) => {
    try{
        const visitors = req.body;
        const newVisitors = await addRegisterVisitorsService(visitors)
        res.status(200).json(newVisitors);
    }catch(error){
        res.status(500).send("controllers", error)
    }
}

// export const getLoginController = async (req, res) => {
//     try{
//         const visitors = req.body;
//         console.log(visitors)
//         const loginVisitors = await getLoginVisitorsService(visitors)
//         res.status(200).json(loginVisitors);
//     }catch(error){
//         res.status(500).send("controllers", error)
//     }
// }
export const getLoginController = async (credentials) => {
  try {
    console.log("controller:", credentials);
    const loginVisitors = await getLoginVisitorsService(credentials);

    return loginVisitors;
  } catch (error) {
    return {
      status: 500,
      msg: "Error en controller",
      error,
    };
  }
};