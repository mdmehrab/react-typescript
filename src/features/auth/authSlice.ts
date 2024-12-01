import { createSlice, } from '@reduxjs/toolkit';

interface AuthState {
  access_token: string | null; 
}

const initialState: AuthState = {
  access_token: null, 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

   
  },
});

// Export actions
export const { } = authSlice.actions;

// Export the reducer to be used in the store
export default authSlice.reducer;
