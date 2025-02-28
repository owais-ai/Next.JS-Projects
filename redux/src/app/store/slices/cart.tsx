import { createSlice } from "@reduxjs/toolkit";

interface CartState {
    name: string,
    category: string,
    quantity: number
}

const initialState:CartState[] = []
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addcart(state, {payload}){
            const obj = state.find(val => val.name == payload.name)  //in real scenario filter using id or slug
            if (obj){
                ++obj.quantity;
                const newState = state.filter((val)=>val.name !== obj.name);
                state = [...newState, obj];
               
            }
            
            state.push(payload)         
        },
        removeCart(state, action){
            return state.filter ((val)=> val.name !== action.payload)
        }
    }
})

// console.log(cartSlice);

export const {addcart, removeCart} = cartSlice.actions ;
export default cartSlice.reducer