import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../auth/authSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default localStorage

// Persist configuration
const persistConfig = {
  key: 'root',
  storage, // You can use sessionStorage instead of localStorage if you prefer
};

// Persist the auth slice
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // Use the persisted reducer here
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
