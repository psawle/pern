import { configureStore } from '@reduxjs/toolkit'
import {loadUser} from './reducers/userSlice'

export const store = configureStore({
    reducer: {
      user : loadUser
    },
  })