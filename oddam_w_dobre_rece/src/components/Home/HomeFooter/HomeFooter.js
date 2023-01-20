import React from 'react';
import Contact from "./Contact/Contact";
import FooterCopyright from "./FooterCopyright/FooterCopyright";

const HomeFooter = () => {
    return (
        <footer className='footer'>
            <div className='footer_overlay'>
                <div className='footer_overlay_container container'>
                    <Contact/>
                    <FooterCopyright/>
                </div>
            </div>
        </footer>
    );
};

export default HomeFooter;