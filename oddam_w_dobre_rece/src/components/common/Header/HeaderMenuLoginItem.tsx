import React, {MouseEventHandler} from 'react';
import {Link} from "react-router-dom";

type MenuLoginItemProps = {
    to: string,
    text: string,
    handleClick?: MouseEventHandler<HTMLAnchorElement> | undefined
}

const HeaderMenuLoginItem = ({to, text, handleClick} : MenuLoginItemProps) => {
    return (
        <li>
            <Link className='header_box_login_menu_item' to={to} onClick={handleClick}>{text} </Link>
        </li>
    );
};

export default HeaderMenuLoginItem;