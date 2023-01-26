import React from 'react';
import Contact from "./Contact/Contact";
import FooterCopyright from "./FooterCopyright/FooterCopyright";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='overlay'>
                <div className='container'>
                    <div className='footer_box'>
                        <Contact/>
                        <FooterCopyright/>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;