import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice= createSlice({
    name:"currentUser",
    initialState:{},
    reducers:{
        addCurrentUser(state, action){
            return {
                ...state, 
                new: action.payload,
            };
        },
        removeCurrentUser(state,action){
            return state={};
        }
    },
});

export {currentUserSlice};
export const {addCurrentUser, removeCurrentUser}=currentUserSlice.actions;