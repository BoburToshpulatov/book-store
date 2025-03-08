import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/CartSlice.js";
import booksApi from "./features/books/books.Api.js";
import ordersApi from "./features/orders/ordersApi.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware),
  devTools: true, // ✅ Explicitly enable Redux DevTools
});
