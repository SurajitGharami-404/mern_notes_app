import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const notesApi = createApi({
    reducerPath: "notes",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3300/api/notes" }),
    tagTypes:["notes"],
    endpoints: (builder) => ({
        getAllNotes: builder.query({
            query: () => "/get-notes",
           providesTags:["notes"]
        }),
        createNote: builder.mutation({
            query: (note) => ({
                    url: "/add-note",
                    method: "POST",
                    body: note
            }),
            invalidatesTags:["notes"]
        }),
        updateNote: builder.mutation({
            query: ({id,note}) => ({
                    url: `/update-note/${id}`,
                    method: "PUT",
                    body: {note}
            }),
            invalidatesTags:["notes"]
        }),
        deleteNote: builder.mutation({
            query:(id)=>({
                url:`/delete-note/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["notes"]
        })
    })
});

export const {
    useGetAllNotesQuery,
    useGetSingleNoteQuery,
    useCreateNoteMutation,
    useUpdateNoteMutation,
    useDeleteNoteMutation
} = notesApi