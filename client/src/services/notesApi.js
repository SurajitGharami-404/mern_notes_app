import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const notesApi = createApi({
    reducerPath:"notes",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3300/api/notes"}),
    endpoints:(builder)=>({
        getAllNotes: builder.query({
            query:()=>"/get-notes"
        }),
    })
});

export const {useGetAllNotesQuery} = notesApi