import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [],
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        loadUser : (state , action) => {
            console.log("actions",action)
        },
    }
})

export const {loadUser} = userSlice.actions;