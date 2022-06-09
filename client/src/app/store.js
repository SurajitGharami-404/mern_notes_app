import { configureStore } from "@reduxjs/toolkit";
import { notesApi } from "../services/notesApi";
import errorSlice from "../services/errorSlice";

export const store = configureStore({
    reducer:{
        [notesApi.reducerPath]:notesApi.reducer,
        error:errorSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(notesApi.middleware),
})