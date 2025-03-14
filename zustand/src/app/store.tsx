import {create} from "zustand";

export const countStore = create((set) => ({
    count: 0,
    increment: () => set((state: any) => ({ count: state.count + 1 })),  
    decrement: () => set((state: any) => ({ count: state.count - 1 })),
    reset:()=>set((state:any)=>({count:state.count=0}))
  }));