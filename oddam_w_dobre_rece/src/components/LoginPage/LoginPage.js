import React from 'react';
import DecorationImg from '../../assets/Decoration.svg'
import LoginPageForm from "./LoginPageForm/LoginPageForm";

const LoginPage = () => {
    return (
        <section className='logPage'>
            <h1 className='title'>Zaloguj się</h1>
            <img className='decoration' src={DecorationImg} alt='decoration line'/>
            <LoginPageForm/>
        </section>
    );
};

export default LoginPage;