import React, {useContext} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CSSTransition} from "react-transition-group";

import {SideBarContainer} from "./SideBarStyled";
import {signOut} from "../../../redux/auth/authActions";
import {getIsAuth} from "../../../redux/auth/authSelectors";

const Sidebar = ({children, isSideBarOpen, toggleSidebar}) => {
    const isAuth = useSelector(getIsAuth)
    const dispatch = useDispatch();

    const logoutUser = () => {
        dispatch(signOut());
        toggleSidebar();
    };

    return (
        <SideBarContainer>
            <CSSTransition
                in={isSideBarOpen}
                timeout={200}
                classNames='overlay'
                unmountOnExit>
                {(stage) => (
                    <div className='modalContainer'>
                        <CSSTransition
                            in={stage === "entered"}
                            timeout={200}
                            classNames='modal'
                            mountOnEnter
                            unmountOnExit>
                            <div className='modalSidebar'>
                                {children}
                                <div className='hrLine'></div>
                                {isAuth ? (
                                    <button
                                        onClick={logoutUser}
                                        className='modalButtonCanceling'>
                                        LOGOUT
                                    </button>
                                ) : (
                                    <button
                                        onClick={toggleSidebar}
                                        className='modalButtonCanceling'>
                                        CANCEL
                                    </button>
                                )}
                            </div>
                        </CSSTransition>
                    </div>
                )}
            </CSSTransition>
        </SideBarContainer>
    );
};

export default Sidebar;