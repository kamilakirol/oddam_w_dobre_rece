import React from 'react';
import DecorationImg from '../../../../assets/Decoration.svg';
import FooterContactForm from "./FooterContactForm/FooterContactForm";

const FooterContact = () => {
    return (
        <section id='contact' className='footerContact'>
            <div className='footerContact_box'>
                <h2 className='title '>Skontaktuj się z nami</h2>
                <img className='decoration' src={DecorationImg} alt='Decoration line' />
            </div>
            <FooterContactForm/>
        </section>
    );
};

export default FooterContact;