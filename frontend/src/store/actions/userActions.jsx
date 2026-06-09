
import instance from "../../service/axios";

export const asyncUserRegister = (user) => async (dispatch, getState) => {
   try {
      const res = await instance.post("/users",user);
      console.log("response : ",res)
      
   } catch (error) {
    console.log("error",error)
   }
}


export const loginUser = (user) => async (dispatch,getState) => {
   try {
      //  const res = await instance.get(`/users?email=${user?.email}&password=${user?.password}`)
      const res = await instance.get("/users", {
         params: {
           email: user.email.trim(),
           password: user.password.trim(),
         },
       });
       console.log("ressss",res)
   } catch (error) {
       
   }
}