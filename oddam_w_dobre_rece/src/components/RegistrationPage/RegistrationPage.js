import React from 'react';
import DecorationImg from "../../assets/Decoration.svg";
import RegistrationPageForm from "./RegistrationPageForm/RegistrationPageForm";

const RegistrationPage = () => {
    return (
        <section className='logPage'>
            <h1 className='title'>Załóż konto</h1>
            <img className='decoration' src={DecorationImg} alt='decoration line'/>

            <RegistrationPageForm/>
        </section>
    );
};

export default RegistrationPage;