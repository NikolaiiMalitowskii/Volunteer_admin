import {combineReducers} from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist'
import authReducer from "./auth/authReducers";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['tokens']
}
const rootReducer = combineReducers({
    auth: persistReducer(persistConfig, authReducer),
})

export default rootReducer