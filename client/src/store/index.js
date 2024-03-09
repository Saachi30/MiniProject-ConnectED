import {configureStore} from "@reduxjs/toolkit"
import { currentUserSlice } from "./slices/UserSlice";

const store=configureStore({
    reducer:{
        currentUser:currentUserSlice.reducer,
    }
});

export default store;