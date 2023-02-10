import React, {useState} from 'react';
import Menu from "./HeaderMenu";
import HeaderBurger from "./HeaderBurger";
import HeaderMenuLogin from "./HeaderMenuLogin";

const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);


    return (
        <header className='header'>
            <div className='container'>
                <div className='header_box'>
                   <HeaderMenuLogin/>
                    <nav className='header_box_nav'>
                        <HeaderBurger setIsMenuActive={setIsMenuActive} isMenuActive={isMenuActive}/>
                        <Menu setIsMenuActive={setIsMenuActive}/>
                    </nav>
                </div>
            </div>

        </header>
    );
};

export default Header;