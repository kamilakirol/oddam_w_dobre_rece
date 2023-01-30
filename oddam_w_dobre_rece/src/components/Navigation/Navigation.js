import React, {useState} from 'react';
import Menu from "./components Navigation/Menu";
import Burger from "./components Navigation/Burger";
import MenuLogin from "./components Navigation/MenuLogin";

const Navigation = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);


    return (
        <header className='header'>
            <div className='container'>
                <div className='header_box'>
                   <MenuLogin/>
                    <nav className='header_box_nav'>
                        <Burger setIsMenuActive={setIsMenuActive} isMenuActive={isMenuActive}/>
                        <Menu setIsMenuActive={setIsMenuActive}/>
                    </nav>
                </div>
            </div>

        </header>
    );
};

export default Navigation;