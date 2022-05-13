import {HeaderStyled, Title} from "./HeaderStyled";
import Navigation from "../navigation/Navigation";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import useDeviceSizes from "../../hooks/useDeviceSizes";
import Burger from "./burger/Burger";
import Sidebar from "./sidebar/SideBar";

const Header = () => {
    const {isMobileDevice} = useDeviceSizes();
    const [isSideBarOpen, setSideBarOpen] = useState(false);

    const toggleSidebar = () => {
        setSideBarOpen((prev) => !prev);
    };

    useEffect(() => {
        const body = document.querySelector("body");
        body.style.overflow = isSideBarOpen ? "hidden" : "auto";
    }, [isSideBarOpen]);

    return (
        <HeaderStyled>
            <Link to='/' className='titleLink'>
                <Title in={true} appear timeout={1000}>
                    <span className='titleFirst'>AD</span>
                    <span className='titleSecond'>min</span>
                </Title>
            </Link>
            {!isMobileDevice && <Navigation/>}
            {isMobileDevice && (
                <div>
                    <Burger
                        isSideBarOpen={isSideBarOpen}
                        setSideBarOpen={setSideBarOpen}
                    />
                    <Sidebar isSideBarOpen={isSideBarOpen} toggleSidebar={toggleSidebar}>
                        <Navigation isSideBarOpen={isSideBarOpen} toggleSidebar={toggleSidebar}/>
                    </Sidebar>
                </div>
            )}
        </HeaderStyled>

    )
}
export default Header;