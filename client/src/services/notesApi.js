import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const notesApi = createApi({
    reducerPath: "notes",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3300/api/notes" }),
    endpoints: (builder) => ({
        getAllNotes: builder.query({
            query: () => "/get-notes"
        }),
        createNote: builder.mutation({
            query: (note) => ({
                    url: "/add-note",
                    method: "POST",
                    body: note
            })
        }),
        updateNote: builder.mutation({
            query: (note,id) => ({
                    url: `/update-note/${id}`,
                    method: "PUT",
                    body: note
            })
        }),
    })
});

export const {
    useGetAllNotesQuery,
    useCreateNoteMutation,
    useUpdateNoteMutation
} = notesApi