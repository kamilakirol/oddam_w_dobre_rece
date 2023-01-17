import React from 'react';
import HomeContact from "./HomeContact/HomeContact";
import HomeFooterBox from "./HomeFooterCopyright/HomeFooterBox";

const HomeFooter = () => {
    return (
        <footer id='contact' className='footer'>
            <div className='container'>
                <HomeContact/>
                <HomeFooterBox/>
            </div>
        </footer>
    );
};

export default HomeFooter;