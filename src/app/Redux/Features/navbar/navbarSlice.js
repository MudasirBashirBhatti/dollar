import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    position: '-100%'
}

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        showNav: (state) => {
            state.position = '0%'
        },
        hideNav: (state) => {
            state.position = '-100%'
        }
    }
})

export const { showNav, hideNav } = navbarSlice.actions;
export default navbarSlice.reducer;