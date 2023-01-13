import React from 'react';
import HomeLoginItem from "./HomeLoginItem";

const HomeLogin = () => {
    return (
        <nav className='header_box_login'>
            <ul className='header_box_login_menu'>
                <HomeLoginItem to='logowanie' text='Zaloguj'/>
                <HomeLoginItem to='rejestracja' text='Załóż konto'/>
            </ul>
        </nav>
    );
};

export default HomeLogin;