import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
type AuthenticationState = {
    accessToken: string
    email: string
    connected: boolean
}

// Define the initial state using that type
const initialState: AuthenticationState = {
  accessToken: '',
  email: '',
  connected: false,
}

export const authenticationSlice = createSlice({
  name: 'authentication',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ accessToken: string, email: string }>) => {
      state.connected = true
      state.accessToken = action.payload.accessToken
      state.email = action.payload.email
    },
  },
})

export const { login } = authenticationSlice.actions

export default authenticationSlice.reducer