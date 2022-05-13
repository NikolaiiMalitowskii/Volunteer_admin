import React from 'react'
import {Provider} from "react-redux";
import store from '../redux/store';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import DefaultPage from "../pages/DefaultPage";
import GlobalStyle from "../styles/globalStyles";


const App = () => {
    return (
        <Provider store={store}>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path='signup' element={<AuthPage/>}/>
                        <Route path='signin' element={<AuthPage/>}/>
                        <Route path='*' element={<DefaultPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}
export default App