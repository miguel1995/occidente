import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    products: [],
    productsToBuy: [],

};

export const authSlice = createSlice({
    name: "auth",
    token: null,
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setProducts: (state, action) => {
            if (state.products) {
                state.products = action.payload.products;
            } else {
                console.error("products company non-existent :(")
            }
        },
        setProductToBuy: (state, action) => {
            state.productsToBuy.push(action.payload.product);
        },
        setCleanProductsToBuy: (state) => {
            state.productsToBuy = [];
        },
        removeProductToBuy: (state, action) => {
            const updateProductsToBuy = state.productsToBuy.filter((value) => value.id != action.payload.product.id);
            state.productsToBuy = updateProductsToBuy;
        },
    }
});

export const { setLogin, setLogout, setProducts, setProductToBuy, setCleanProductsToBuy, removeProductToBuy } = authSlice.actions;
export default authSlice.reducer;