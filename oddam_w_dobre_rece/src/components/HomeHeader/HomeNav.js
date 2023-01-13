import React from 'react';
import HomeNavItem from "./HomeNavItem";

const menu = [{to: 'banner', text: 'Start'},
    {to: 'steps', text: 'O co chodzi?', offset: -90},
    {to: 'aboutUs', text: 'O nas', offset: -90},
    {to: 'fundations', text: 'Fundacje i organizacje'},
    {to: 'contact', text: 'Kontakt'}];

const HomeNav = ({setIsMenuActive}) => {
    return (
        <ul className='header_box_nav_menu'>
            {menu.map(item => {
                return <HomeNavItem key={item.text} to={item.to} text={item.text} offset={item.offset} setIsMenuActive={setIsMenuActive}/>
            })}
        </ul>
    );
};

export default HomeNav;