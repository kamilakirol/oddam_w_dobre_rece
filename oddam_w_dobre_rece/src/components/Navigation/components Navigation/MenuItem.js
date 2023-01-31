import React from 'react';
import {HashLink} from "react-router-hash-link";

const MenuItem = ({to, text, offset, setIsMenuActive}) => {
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = offset;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    return (
        <li className='header_box_nav_menu_item' >
            <HashLink className='header_box_nav_menu_item_link link' to={to} scroll={el => scrollWithOffset(el)} smooth onClick={()=> setIsMenuActive(false)}>
                    {text}
            </HashLink>
        </li>
    );
};

export default MenuItem;