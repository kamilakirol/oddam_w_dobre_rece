import React from 'react';
import {Link as LinkScroll} from "react-scroll";

const HomeNavItem = ({to, text, offset, setIsMenuActive}) => {
    return (
        <li className='header_box_nav_menu_item'  >
            <LinkScroll className='header_box_nav_menu_item_link' activeClass="active" to={to} duration={300} offset={offset} onSetInactive={()=> setIsMenuActive(false)} smooth spy >
                {text}
            </LinkScroll>
        </li>
    );
};

export default HomeNavItem;