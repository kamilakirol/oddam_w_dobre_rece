import React from 'react';
import {Link} from "react-router-dom";

const LoginPageFormButtons = () => {
    return (
        <div className='logPage_form_buttons'>
            <button className='btn logPage_form_buttons_btn'><Link className='link' to='/rejestracja'>Załóż konto</Link></button>
            <button className='btn logPage_form_buttons_btn'>Prześlij</button>
        </div>
    );
};

export default LoginPageFormButtons;