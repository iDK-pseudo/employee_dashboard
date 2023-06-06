import { createSlice } from '@reduxjs/toolkit'
import { COUNTRIES } from "baseui/phone-input";

export const companySlice = createSlice({
  name: 'companyInput',
  initialState: {
    companyDetails : {
      compName: "",
      website: "",
      phoneNumber: "",
      phoneCountry: COUNTRIES.IN,
      compSize: "",
      industry: ""
    }
  },
  reducers: {
    save: (state, action) => {
      let fieldName = action.payload.fieldName;
      let value = action.payload.value;

      state.companyDetails[fieldName] = value;
    }
  },
})

export const { save } = companySlice.actions

export default companySlice.reducer