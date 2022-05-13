import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";

import {
    signIn,
    signOut,
    setAuthError,
    resetAuthError,
    setAuthLoading,
} from "./authActions";


const initialState = {
    user: {
        involvements: [],
        id: '',
        status: ''
    },
    tokens: {
        access: {
            token: '',
            expiresAt: ''
        },
        refresh: {
            token: '',
            expiresAt: ''
        }
    }
}

const userReducer = createReducer(
    {...initialState.user},
    {
        [signIn]: (_, {payload}) => payload.user,
        [signOut]: () => ({...initialState.user}),
    }
);
const tokenReducer = createReducer(initialState.tokens, {
    [signIn]: (_, {payload}) => payload.tokens,
    [signOut]: () => initialState.tokens,
});

const authError = createReducer("", {
    [setAuthError]: (_, {payload}) => payload,
    [resetAuthError]: () => "",
    [signOut]: () => "",
});

const authLoading = createReducer(false, {
    [setAuthLoading]: (state) => !state,
    [signOut]: () => false,
});

const authReducer = combineReducers({
    user: userReducer,
    tokens: tokenReducer,
    authError,
    authLoading,
});

export default authReducer;
