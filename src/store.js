import { configureStore } from '@reduxjs/toolkit'
import companyReducer from './reduxSlices/companySlice'
import roleReducer from './reduxSlices/roleSlice.js'

export default configureStore({
  reducer: {
    companyInput: companyReducer,
    roleInput: roleReducer
  },
})