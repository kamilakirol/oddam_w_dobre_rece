import React from 'react';
import {ReactComponent as DecorationImg} from '../../../assets/Decoration.svg'
import LoginForm from "./LoginForm";

const Login = () => {
    return (
        <section className='login'>
            <div className='container'>
                <h1 className='title'>Zaloguj się</h1>
                <DecorationImg />
                <LoginForm/>
            </div>
        </section>
    );
};

export default Login;