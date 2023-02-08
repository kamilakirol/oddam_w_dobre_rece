import React from 'react';
import {Link} from "react-router-dom";

type PageButtonProps = {
    to: string,
    textLink: string,
    textSubmit: string
}

const PageButton = ({to,textLink, textSubmit }: PageButtonProps) => {

    return (
        <div className='logPage_form_buttons'>
            <button className='btn logPage_form_buttons_btn'><Link className='link' to={to}>{textLink}</Link></button>
            <button className='btn logPage_form_buttons_btn' type='submit'>{textSubmit}</button>
        </div>
    );
};

export default PageButton;