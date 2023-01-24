import React from 'react';
import MenuItem from "./MenuItem";

const menu = [{to: 'banner', text: 'Start'},
    {to: 'steps', text: 'O co chodzi?', offset: -90},
    {to: 'aboutUs', text: 'O nas', offset: -90},
    {to: 'foundations', text: 'Fundacje i organizacje', offset: -90},
    {to: 'contact', text: 'Kontakt'}];

const Menu = ({setIsMenuActive}) => {
    return (
        <ul className='header_box_nav_menu'>
            {menu.map(item => {
                return <MenuItem key={item.text} to={item.to} text={item.text} offset={item.offset} setIsMenuActive={setIsMenuActive}/>
            })}
        </ul>
    );
};

export default Menu;