import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import productsSice from "./reducers/productsSice";
import cartSlice from "./reducers/cartSlice";


export const store = configureStore({
  reducer : {
    users: userSlice,
    products : productsSice,
    carts : cartSlice
  }
})