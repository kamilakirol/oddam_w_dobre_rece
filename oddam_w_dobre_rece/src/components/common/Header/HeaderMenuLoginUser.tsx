import React, {useContext} from 'react';
import {UserContext} from "../../../FirebaseAuth";
import HeaderMenuLoginItem from "./HeaderMenuLoginItem";
import {auth} from '../../../firebase'

const HeaderMenuLoginUser = () => {
    const user = useContext(UserContext)
    const handleSignOut = () => auth.signOut();

    return (
        <>
            <p className='header_box_login_menu_hello'>Cześć {user?.email}</p>
            <HeaderMenuLoginItem to='/oddaj-rzeczy' text='Oddaj rzeczy'/>
            <HeaderMenuLoginItem to='/wylogowano' text='Wyloguj' handleClick={handleSignOut}/>
        </>
    );
};

export default HeaderMenuLoginUser;