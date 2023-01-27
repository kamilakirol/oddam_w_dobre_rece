import React from 'react';
import LoginItem from "./LoginItem";

const Login = () => {
    return (
        <nav className='header_box_login'>
            <ul className='header_box_login_menu'>
                {/*<p className='header_box_login_menu_hello'>Cześć kamilakirol@wp.pl</p>*/}
                <LoginItem to='logowanie' text='Zaloguj'/>
                {/*<LoginItem to='oddaj-rzeczy' text='Oddaj rzeczy/>*/}
                <LoginItem to='rejestracja' text='Załóż konto'/>
                {/*<LoginItem to='wylogowano' text='Wyloguj'/>*/}
            </ul>
        </nav>
    );
};

export default Login;