import React from 'react';
import {ReactComponent as DecorationImg} from '../../../assets/Decoration.svg'
import LoginPageForm from "./LoginPageForm/LoginPageForm";

const LoginPage = () => {
    return (
        <section className='logPage'>
            <div className='container'>
                <h1 className='title'>Zaloguj się</h1>
                <DecorationImg />
                <LoginPageForm/>
            </div>
        </section>
    );
};

export default LoginPage;