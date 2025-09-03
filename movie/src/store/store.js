import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import moviesReducer from './moviesSlice'
import authReducer from './authSlice'

export default configureStore({
  reducer: {
    movies: moviesReducer,
    auth: authReducer
  },
  middleware: (getDefault) => getDefault().concat(thunk)
})
