import React from 'react';
import MenuLoginItem from "./MenuLoginItem";

const MenuLoginGuest = () => {
    return (
        <>
            <MenuLoginItem to='/logowanie' text='Zaloguj'/>
            <MenuLoginItem to='/rejestracja' text='Załóż konto'/>
        </>
    );
};

export default MenuLoginGuest;