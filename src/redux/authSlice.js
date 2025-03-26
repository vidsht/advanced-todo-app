import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: { isAuthenticated: false, username: "" },
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.username = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.username = "";
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
