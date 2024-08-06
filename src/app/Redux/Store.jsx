import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Redux/Features/counter/CounterSlice'
import navbarReducer from '../Redux/Features/navbar/navbarSlice'
import cartSlice from './Features/cart/cartSlice'

export const store = configureStore({
    reducer: {
        // we can give any name instead of "counter","navbar","cart" etc.
        counter: counterReducer,
        navbar: navbarReducer,
        cart: cartSlice
    },
})