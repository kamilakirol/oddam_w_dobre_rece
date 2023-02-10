import React from 'react';
import FooterContact from "./FooterContact/FooterContact";
import FooterCopyright from "./FooterCopyright/FooterCopyright";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='overlay'>
                <div className='container'>
                    <div className='footer_box'>
                        <FooterContact/>
                        <FooterCopyright/>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;