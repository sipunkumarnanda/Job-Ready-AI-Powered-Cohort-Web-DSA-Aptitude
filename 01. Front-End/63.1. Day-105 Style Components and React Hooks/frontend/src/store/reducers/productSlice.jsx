
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products : [] , 
}

const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {
        loadproduct : (state, action) =>{
            // Here we can't call api , its sync
            state.products = action.payload
        } , 
        loadlazyproduct : (state, action) =>{
            // Here we can't call api , its sync
            state.products = [...state.products, ...action.payload]
        } , 
    }
}
)

export default productSlice.reducer ;
export const {loadproduct, loadlazyproduct} =  productSlice.actions ;