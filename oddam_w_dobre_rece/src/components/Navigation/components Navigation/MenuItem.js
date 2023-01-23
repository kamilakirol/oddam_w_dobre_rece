import React from 'react';
import {Link as LinkScroll} from "react-scroll";
import {Link} from "react-router-dom";

const MenuItem = ({to, text, offset, setIsMenuActive}) => {
    return (
        <li className='header_box_nav_menu_item' >
            <LinkScroll className='header_box_nav_menu_item_link' activeClass="active" to={to} duration={300} offset={offset} smooth onClick={()=> setIsMenuActive(false)}>
                <Link className='link' to='/'>
                    {text}
                </Link>
            </LinkScroll>
        </li>
    );
};

export default MenuItem;