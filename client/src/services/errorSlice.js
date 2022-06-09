import {createSlice} from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name:"error",
    initialState:{
        message:null,
        type:null,
    },
    reducers:{
        setError:(state,action)=>(
           {
                ...action.payload
            }
        )
    }
})

export const {
setError
} = errorSlice.actions;
export default errorSlice;