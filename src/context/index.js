import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import cartSlice from "./slice/cartSlice";
import wishlistSlice from "./slice/wishlistSlice";
import authSlice from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    wishlist: wishlistSlice,
    cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
