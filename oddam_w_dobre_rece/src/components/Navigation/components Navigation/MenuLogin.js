import React, {useContext} from 'react';
import MenuLoginUser from "./MenuLoginUser";
import {UserContext} from "../../../FirebaseAuth";
import MenuLoginGuest from "./MenuLoginGuest";

const MenuLogin = () => {
    const [user] = useContext(UserContext)

    return (
        <nav className='header_box_login'>
            <ul className='header_box_login_menu'>
                {user.uid ?  <MenuLoginUser/> : <MenuLoginGuest/> }
            </ul>
        </nav>
    );
};

export default MenuLogin;