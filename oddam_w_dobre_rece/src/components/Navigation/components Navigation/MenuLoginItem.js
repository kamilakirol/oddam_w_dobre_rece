import React from 'react';
import {Link} from "react-router-dom";

const MenuLoginItem = ({to, text, handleClick}) => {
    return (
        <li>
            <Link className='header_box_login_menu_item' to={to} onClick={handleClick}>{text} </Link>
        </li>
    );
};

export default MenuLoginItem;