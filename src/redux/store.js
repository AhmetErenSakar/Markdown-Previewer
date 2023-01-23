import { configureStore } from "@reduxjs/toolkit";
import preSlice from "./preSlice";

export const store = configureStore({
    reducer: {
        pre: preSlice,
    }

})