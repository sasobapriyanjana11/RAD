import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    count: 0,
    show :true

};

export const countSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        toolbar: (state) => {
            state.show = !state.show;
        }

    }
})

export const {increment,decrement,toolbar} = countSlice.actions;
export default countSlice.reducer;
