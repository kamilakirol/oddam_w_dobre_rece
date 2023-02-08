import React, {Dispatch, SetStateAction} from 'react';
import MenuNav from "./MenuNav";

const menu = [{to: '/#banner', text: 'Start', offset: 0},
    {to: '/#steps', text: 'O co chodzi?', offset: -90},
    {to: '/#aboutUs', text: 'O nas', offset: -90},
    {to: '/#foundations', text: 'Fundacje i organizacje', offset: -90},
    {to: '/#contact', text: 'Kontakt', offset: -90}];

type PropsMenu= {
    setIsMenuActive: Dispatch<SetStateAction<boolean>>
}

const Menu = ({setIsMenuActive}: PropsMenu) => {
    return (
        <ul className='header_box_nav_menu'>
            {menu.map(item => {
                return <MenuNav key={item.text} to={item.to} text={item.text} offset={item.offset} setIsMenuActive={setIsMenuActive}/>
            })}
        </ul>
    );
};

export default Menu;