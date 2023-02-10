import React, {useContext} from 'react';
import HeaderMenuLoginUser from "./HeaderMenuLoginUser";
import {UserContext} from "../../../FirebaseAuth";
import HeaderMenuLoginGuest from "./HeaderMenuLoginGuest";

const HeaderMenuLogin = () => {
    const user = useContext(UserContext)

    return (
        <nav className='header_box_login'>
            <ul className='header_box_login_menu'>
                {user?.uid ?  <HeaderMenuLoginUser/> : <HeaderMenuLoginGuest/> }
            </ul>
        </nav>
    );
};

export default HeaderMenuLogin;