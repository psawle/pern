import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData : []
}


const userSlice = createSlice({
    name : "users",
    initialState,
    redurcers : {
        loadusers : (state,action) => {
              state.userData = action.payload
        }
    }
})


export default userSlice.reducer;
export const {loadusers} = userSlice.actions;