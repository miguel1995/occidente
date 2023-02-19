import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    products: [],
    productsToBuy: [],

};

export const authSlice = createSlice({
    name: "auth",
    token: null,
    initialState,
    reducers:{
        setLogin: (state, action)=>{
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state)=>{
            state.user = null;
            state.token = null;
        },
        setProducts: (state, action)=>{
            if(state.products){
                state.company.products = action.payload.products;
            } else {
                console.error("products company non-existent :(")
            }
        },        
        setProductToBuy: (state, action) => {
         state.productsToBuy.push(action.payload.product);
        },
        setCleanProductsToBuy: (state) => {
            state.company.products = [];
           }
    }
});

export const {setLogin, setLogout, setProducts, setCompanies, setCompany } = authSlice.actions;
export default authSlice.reducer;