import React, {useState} from 'react';
import HomeNav from "./HomeNav";
import HomeBurger from "./HomeBurger";
import HomeLogin from "./HomeLogin";

const HomeHeader = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);


    return (
        <header className='header'>
            <div className='container'>
                <div className='header_box'>
                   <HomeLogin/>
                    <nav className='header_box_nav'>
                        <HomeBurger setIsMenuActive={setIsMenuActive} isMenuActive={isMenuActive}/>
                        <HomeNav setIsMenuActive={setIsMenuActive}/>
                    </nav>
                </div>
            </div>

        </header>
    );
};

export default HomeHeader;