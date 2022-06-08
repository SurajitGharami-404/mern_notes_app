import { configureStore } from "@reduxjs/toolkit";
import { notesApi } from "../services/notesApi";

export const store = configureStore({
    reducer:{
        [notesApi.reducerPath]:notesApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(notesApi.middleware),
})