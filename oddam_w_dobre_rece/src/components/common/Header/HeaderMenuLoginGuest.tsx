import React from 'react';
import HeaderMenuLoginItem from "./HeaderMenuLoginItem";

const HeaderMenuLoginGuest = () => {
    return (
        <>
            <HeaderMenuLoginItem to='/logowanie' text='Zaloguj'/>
            <HeaderMenuLoginItem to='/rejestracja' text='Załóż konto'/>
        </>
    );
};

export default HeaderMenuLoginGuest;