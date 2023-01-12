import React, {useState} from 'react';
import HomeNavItem from "./HomeNavItem";
import HomeLoginItem from "./HomeLoginItem";

const HomeHeader = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const menu = [{to: 'banner', text: 'Start'},
        {to: 'steps', text: 'O co chodzi?', offset: -90},
        {to: 'aboutUs', text: 'O nas'},
        {to: 'fundations', text: 'Fundacje i organizacje'},
        {to: 'contact', text: 'Kontakt'}];

    return (
        <header className='header'>
            <div className='container'>
                <div className='header_box'>
                    <nav className='header_box_login'>
                        <ul className='header_box_login_menu'>
                            <HomeLoginItem to='logowanie' text='Zaloguj'/>
                            <HomeLoginItem to='rejestracja' text='Załóż konto'/>
                        </ul>
                    </nav>
                    <nav className='header_box_nav'>
                        <input type='checkbox' className={`menu_btn ${isMenuActive ? 'active': ''} `} id='menu_btn' onClick={()=> setIsMenuActive(!isMenuActive)}/>
                        <div className='hamburger'>
                            <label htmlFor='menu_btn' className='menu_toggle'>
                                <span className='bar'></span>
                                <span className='bar'></span>
                                <span className='bar'></span>
                            </label>
                        </div>
                        <ul className='header_box_nav_menu'>
                            {menu.map(item => {
                                return <HomeNavItem key={item.text} to={item.to} text={item.text} offset={item.offset} setIsMenuActive={setIsMenuActive}/>
                            })}
                        </ul>
                    </nav>
                </div>
            </div>

        </header>
    );
};

export default HomeHeader;