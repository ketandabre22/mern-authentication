import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlices";

const store = configureStore({
  reducer: { auth1: authReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
