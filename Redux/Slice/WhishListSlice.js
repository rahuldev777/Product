import { createSlice } from "@reduxjs/toolkit";


const wishListSlice=createSlice({
    name:"whislist",
    initialState:[],
    reducers:{
        addToWhishlist:(state,action)=>{
            state.push(action.payload)
        },
        removeFromWishlist:(state,action)=>{
             return state.filter((item)=>item.id!=action.payload)
        
        }
    }
})

export const {addToWhishlist,removeFromWishlist} =wishListSlice.actions
export default wishListSlice.reducer