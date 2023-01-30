import React, {useContext} from 'react';
import {UserContext} from "../../../FirebaseAuth";
import MenuLoginItem from "./MenuLoginItem";

const MenuLoginUser = () => {
    const [user] = useContext(UserContext)
    return (
        <>
            <p className='header_box_login_menu_hello'>Cześć {user.email}</p>
            <MenuLoginItem to='oddaj-rzeczy' text='Oddaj rzeczy'/>
            <MenuLoginItem to='wylogowano' text='Wyloguj'/>
        </>
    );
};

export default MenuLoginUser;