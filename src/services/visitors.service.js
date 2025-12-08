import { addRegisterVisitorsModel } from "../models/visitors.models"


export const addRegisterVisitorsService = async (visitors) => {
  return(
    new Promise(async (res, rej) => {
      console.log("Test dentro de services: add visitors services")
      try{
        const newVisitors = await addRegisterVisitorsModel(visitors)
        res(newVisitors)
      }catch(error){
        rej("services error: ", error)
      }
    })
  )
}