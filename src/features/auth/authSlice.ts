import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {

}

const initialState: AuthState = {

};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction) => {
     
    },
    logout: (state) => {
   
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
