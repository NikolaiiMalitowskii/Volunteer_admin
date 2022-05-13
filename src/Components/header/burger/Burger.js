import React from "react";
import { BurgerContainer } from "./BurgerStyled";

const Burger = ({ isSideBarOpen, setSideBarOpen }) => {
    const setSideBar = () => {
        setSideBarOpen((prev) => !prev);
    };

    return (
        <BurgerContainer open={isSideBarOpen} onClick={setSideBar}>
            <div className='burgerContent'>
                <div className='line' />
                <div className='line' />
                <div className='line' />
            </div>
        </BurgerContainer>
    );
};

export default Burger;
