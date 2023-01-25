import React from 'react';
import {Link as LinkScroll} from "react-scroll";

const MenuItem = ({to, text, offset, setIsMenuActive}) => {
    return (
        <li className='header_box_nav_menu_item' >
            <LinkScroll className='header_box_nav_menu_item_link link' activeClass="active" to={to} duration={300} offset={offset} smooth onClick={()=> setIsMenuActive(false)}>
                    {text}
            </LinkScroll>
        </li>
    );
};

export default MenuItem;