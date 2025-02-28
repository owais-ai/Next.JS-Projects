import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
    name: string,
    category: string,
    quantity: number
}

const initialState:ProductState[]  = [{name: "Shoes", category: "Bata", quantity:1 }
    ,{name: "Shirts", category: "Levis", quantity:1 }]
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{
        addProduct(state, action){
           state.push(action.payload)
            
            
        },
        removeProduct(state, action){}
    }
})

// console.log(productSlice);

export const {addProduct, removeProduct} = productSlice.actions 

export default productSlice.reducer