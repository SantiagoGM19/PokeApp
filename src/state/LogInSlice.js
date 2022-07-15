import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}


const loggedInSlice = createSlice(
    {
        name: 'loggedIn',
        initialState,
        reducers:{
            logIn(state, action){
                const stateLoggedIn = {...state, user: action.payload}
                return stateLoggedIn
            },
            logOut(){
                return {user:null}
            }
        }
    }
)


export default loggedInSlice.reducer

export const {
    logIn,
    logOut
} = loggedInSlice.actions