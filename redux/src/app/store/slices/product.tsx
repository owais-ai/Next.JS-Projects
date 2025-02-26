import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
    name: string,
    Category: string,
    quanity: number
}

const initialState:ProductState[]  = [{name: "Shoes", Category: "Bata", quanity:2 },{name: "Shoes", Category: "Service", quanity:5 }]
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{
        addProduct(state, action){},
        removeProduct(state, action){}
    }
})

// console.log(productSlice);

export const {addProduct, removeProduct} = productSlice.actions 

export default productSlice.reducer