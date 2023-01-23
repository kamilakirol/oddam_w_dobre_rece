import React from 'react';
import LoginItem from "./LoginItem";

const Login = () => {
    return (
        <nav className='header_box_login'>
            <ul className='header_box_login_menu'>
                <LoginItem to='logowanie' text='Zaloguj'/>
                <LoginItem to='rejestracja' text='Załóż konto'/>
            </ul>
        </nav>
    );
};

export default Login;