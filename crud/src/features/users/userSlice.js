import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {
    id:1,
    name:"jaseela",
    email:"jaseela@gmail.com"
    },
    {
    id:2,
    name:"jaseena",
    email:"jaseena@gmail.com"
    }
    ]
    const userSlice=createSlice(
        {name:"users",
    initialState}
    )
    export default userSlice.reducer