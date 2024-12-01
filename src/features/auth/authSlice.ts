import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {UserType} from '../../types/user'


interface AuthState {
  access_token?: string | null;
  user?: UserType | null; 
}

const initialState: AuthState = {
  access_token: null,
  user: null,  
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string>) {
      state.access_token = action.payload;
    },
    setUser(state, action: PayloadAction<UserType>) {
      state.user = action.payload;
    },
  },
});

export const { setAccessToken, setUser } = authSlice.actions;

export default authSlice.reducer;
