import { configureStore } from '@reduxjs/toolkit'

import { authapi } from './Services/Authapi'
import { addsapi } from './Services/UserTable'
import { AuthReducer } from './Reducers/Auth/authslice'

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    [authapi.reducerPath]: authapi.reducer,
    [addsapi.reducerPath]: addsapi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authapi.middleware)
      .concat(addsapi.middleware)
})