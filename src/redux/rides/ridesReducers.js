import {combineReducers, createReducer} from "@reduxjs/toolkit";
import {getRidesList, setRidesFilter, setRidesLoading} from "./ridesActions";
import {signOut} from "../auth/authActions";


const ridesListReducer = createReducer([], {
    [getRidesList]: (state, {payload}) => payload,
    [signOut]: () => []
});

const ridesErrorReducer = createReducer('', {
    [getRidesList]: (_, {payload}) => payload,
    [signOut]: () => ''
});

const ridesLoaderReducer = createReducer(false, {
    [setRidesLoading]: (state) => !state,
    [signOut]: () => false
});

const ridesFilterReducer = createReducer('', {
    [setRidesFilter]: (_, {payload}) => payload,
    [signOut]: () => ''
})

const ridesReducer = combineReducers({
    list: ridesListReducer,
    error: ridesErrorReducer,
    loader: ridesLoaderReducer,
    filter: ridesFilterReducer
})

export default ridesReducer