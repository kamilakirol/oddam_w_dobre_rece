import React from 'react';
import {Link} from "react-router-dom";

const LoginPageFormButtons = ({to,textLink, textSubmit }) => {

    return (
        <div className='logPage_form_buttons'>
            <button className='btn logPage_form_buttons_btn'><Link className='link' to={to}>{textLink}</Link></button>
            <button className='btn logPage_form_buttons_btn' type='submit'>{textSubmit}</button>
        </div>
    );
};

export default LoginPageFormButtons;