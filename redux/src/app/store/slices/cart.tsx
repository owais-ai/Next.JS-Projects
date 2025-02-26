import { createSlice } from "@reduxjs/toolkit";

interface CartState {
    name: string,
    Category: string,
    quanity: number
}

const initialState:CartState[] = [{name: "shirt", Category: "Levis", quanity: 6}]
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addcart(state, action){},
        removecart(state, action){}
    }
})

// console.log(cartSlice);

export const {addcart, removecart} = cartSlice.actions ;
export default cartSlice.reducer