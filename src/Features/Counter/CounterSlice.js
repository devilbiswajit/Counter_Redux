import { createSlice } from "@reduxjs/toolkit";
const initialState={
    value:0
}
export const CounterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increament:(state)=>{
             state.value+=1;
        },
        decreament:(state)=>{
             if(state.value>=1){
                state.value-=1;
             }
        },
        reset:(state)=>{
            state.value=0;
        }
    }
})

export const {increament,decreament,reset}=CounterSlice.actions;
export default CounterSlice.reducer;
