
import instance from "../../service/axios";

export const asyncUserRegister = (user) => async (dispatch, getState) => {
   try {
      const res = await instance.post("/users",user);
      console.log("response : ",res)
   } catch (error) {
    console.log("error",error)
   }
}