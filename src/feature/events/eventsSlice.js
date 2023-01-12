import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
    {id:'1', title:"Ligonier", host:"RC Sproul"}
    {id:'2', title:"Grace to you", host:"John Macarthur"}
    {id:'3', title:"Heartcry", host:"Paul Washer"}
]

const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        
    }
})

export default eventSlice.reducer;