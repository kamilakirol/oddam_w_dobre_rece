import React from 'react';
import {Link} from "react-router-dom";

const MenuLoginItem = ({to, text}) => {
    return (
        <li>
            <Link className='header_box_login_menu_item' to={to}>{text}</Link>
        </li>
    );
};

export default MenuLoginItem;