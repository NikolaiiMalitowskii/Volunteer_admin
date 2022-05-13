import React from 'react';
import {NavLink} from "react-router-dom";
import {NavigationStyled} from "./NavigationStyled";
import {useDispatch, useSelector} from "react-redux";
import {getIsAuth} from "../../redux/auth/authSelectors";
import {signOut} from '../../redux/auth/authActions'

const Navigation = ({isSideBarOpen, toggleSidebar}) => {
    const isAuth = useSelector(getIsAuth);
    const dispatch = useDispatch();
    const signOutUser = () => dispatch(signOut())

    const onHandleClose = () => {
        isSideBarOpen && toggleSidebar();
    }

    return (
        <NavigationStyled>
            <ul className='navigationList'>
                <li className='navigationListItem'>
                    <NavLink to='/' className={({isActive}) => isActive ? 'activeLink' : 'simpleLink'}
                             onClick={onHandleClose}>Home</NavLink>
                </li>
                {isAuth && <>
                    <li className='navigationListItem'>
                        <NavLink to='/rides'
                                 className={({isActive}) => isActive ? 'activeLink' : 'simpleLink'}
                                 onClick={onHandleClose}>Rides</NavLink>
                    </li>
                    {/*<li className='navigationListItem'>*/}
                    {/*    <NavLink to='/organizations'*/}
                    {/*             className={({isActive}) => isActive ? 'activeLink' : 'simpleLink'}*/}
                    {/*             onClick={onHandleClose}>Organizations</NavLink>*/}
                    {/*</li>*/}
                </>
                }
                {!isAuth && <>
                    <li className='navigationListItem'>
                        <NavLink to='/signup' className={({isActive}) => isActive ? 'activeLink' : 'simpleLink'}
                                 onClick={onHandleClose}>Sign
                            up</NavLink>
                    </li>
                    <li className='navigationListItem'>
                        <NavLink to='/signin' className={({isActive}) => isActive ? 'activeLink' : 'simpleLink'}
                                 onClick={onHandleClose}>Sign
                            in</NavLink>
                    </li>

                </>}
                {isAuth && <li className='navigationListItem' onClick={signOutUser}>
                    <span className='navigationListItemSignOut'>Sign out</span>
                </li>}

            </ul>
        </NavigationStyled>
    )
}
export default Navigation