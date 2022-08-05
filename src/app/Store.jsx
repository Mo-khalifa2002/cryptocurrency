import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { cryptoApi } from "../services/CryptoApi";
import { cryptoNewsApi } from "../services/CryptoNewsApi";

export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddiware) =>
    getDefaultMiddiware().concat(cryptoApi.middleware),
});

setupListeners(store.dispatch)
