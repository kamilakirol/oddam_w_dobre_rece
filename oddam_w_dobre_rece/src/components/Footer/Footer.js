import React from 'react';
import Contact from "./Contact/Contact";
import FooterCopyright from "./FooterCopyright/FooterCopyright";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='overlay'>
                <div className='footer_container container'>
                    <Contact/>
                    <FooterCopyright/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;