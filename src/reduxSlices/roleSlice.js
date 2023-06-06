import { createSlice } from '@reduxjs/toolkit'

export const roleSlice = createSlice({
  name: 'roleInput',
  initialState: {
    roles: {
        tenantAdmin: "Admin",
        logs: "User",
        metrics: "User",
        dashboards: "User",
        traces: "User",
        billing: "User",
    }
  },
  reducers: {
    save: (state, action) => {
        const group = action.payload.group;
        const role = action.payload.role;

        state.roles[group] = role;
    }
  },
})

export const { save } = roleSlice.actions

export default roleSlice.reducer