import React, {Dispatch, SetStateAction} from 'react';
import {HashLink} from "react-router-hash-link";

type MenuItemProps = {
    to:string,
    text: string,
    offset:number,
    setIsMenuActive: Dispatch<SetStateAction<boolean>>
}

const MenuNav = ({to, text, offset, setIsMenuActive} :MenuItemProps) => {
    const scrollWithOffset = (el: HTMLElement) => {
        const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
        const scrollY = offset;
        window.scrollTo({ top: yCoordinate + scrollY, behavior: 'smooth' });
    }

    return (
        <li className='header_box_nav_menu_item' >
            <HashLink className='header_box_nav_menu_item_link link' to={to} scroll={scrollWithOffset} smooth onClick={()=> setIsMenuActive(false)}>
                    {text}
            </HashLink>
        </li>
    );
};

export default MenuNav;