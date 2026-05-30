import instance from "../api/axiosConfig"
import { loadUser } from "./reducers/userSlice"


export const asyncGetUser = async () => {
    try {
       const res = await instance.get("/users")
       console.log("user data",res)
       loadUser
       return res;
    }
    catch (error){
    console.log("error",error)
    }

}