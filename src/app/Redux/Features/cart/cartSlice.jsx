'use client'
import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        // cartItems: JSON.parse(localStorage.getItem('cart')) || [],
        cartItems: [],
        isVisible: false
    },
    reducers: {
        //reducers to handle item add and remove from cart
        addToCart: (state, action) => {
            state.cartItems.push(action.payload)
            // let cartData = JSON.stringify(current(state.cartItems))
            // localStorage.setItem('cart', cartData)

        },
        removeFromCart: (state, action) => {
            const newState = state.cartItems.filter((item) => item._id !== action.payload)
            // let cartData = JSON.stringify(newState)
            // localStorage.setItem('cart', cartData)
            return { ...state, cartItems: newState };
        },

        // actions to handle show and hide Cart navigation
        showCart: (state, payload) => {
            state.isVisible = true
        },
        hideCart: (state, payload) => {
            state.isVisible = false
        }

    }
})

export const { addToCart, removeFromCart, showCart, hideCart } = cartSlice.actions;
export default cartSlice.reducer;