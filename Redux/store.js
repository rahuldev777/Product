import { configureStore } from "@reduxjs/toolkit";
import WhishListSlice from "./Slice/WhishListSlice";
import Cartslice from "./Slice/Cartslice";



const store=configureStore({
    reducer:{
        whishlistReducer:WhishListSlice,
        CartReducer:Cartslice

    }
})

export default store