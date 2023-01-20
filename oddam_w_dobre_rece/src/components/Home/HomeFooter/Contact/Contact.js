import React from 'react';
import DecorationImg from '../../../../assets/Decoration.svg';
import Form from "./Form/Form";

const Contact = () => {
    return (
        <section id='contact' className='contact'>
            <div className='contact_box'>
                <h2 className='contact_box_title'>Skontaktuj się z nami</h2>
                <img className='contact_box_decoration' src={DecorationImg} alt='Decoration line' />
            </div>
            <Form/>
        </section>
    );
};

export default Contact;