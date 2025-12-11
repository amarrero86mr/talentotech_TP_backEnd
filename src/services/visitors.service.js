import { addRegisterVisitorsModel, getLoginModel } from "../models/visitors.models.js"


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

export const getLoginVisitorsService = async (visitors) => {
  return(
    new Promise(async (res, rej) => {
      console.log("Test dentro de services: login visitors services")
      try{
        const loginVisitors = await getLoginModel(visitors)
        res(loginVisitors)
      }catch(error){
        rej({ msg: "services error", error });
      }
    })
  )
}