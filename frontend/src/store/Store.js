import { configureStore } from '@reduxjs/toolkit'
import userSlice, {loadUser} from './reducers/userSlice'

export const store = configureStore({
    reducer: {
      user : userSlice
    },
  })