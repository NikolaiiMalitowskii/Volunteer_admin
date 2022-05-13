import React from 'react';
import {MainStyled} from "./MainStyled";
import {Outlet} from 'react-router-dom';

const Main = () => {
    return (
        <MainStyled>
            <Outlet/>
        </MainStyled>
    )
}
export default Main