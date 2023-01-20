import React from 'react';
import DecorationImg from '../../assets/Decoration.svg'
import {Link} from "react-router-dom";

const LoginPage = () => {
    return (
        <section className='loginPage'>
            <h1 className='title'>Zaloguj się</h1>
            <img className='decoration' src={DecorationImg} alt='decoration line'/>
            <form className='loginPage_form'>

                <div className='loginPage_form_box'>
                    <div className='loginPage_form_box_item'>
                        <label>Email</label>
                        <input
                            name='email'
                        />
                    </div>

                    <div className='loginPage_form_box_item'>
                        <label>Hasło</label>
                        <input
                            name='password'
                        />
                    </div>
                </div>

                <div className='loginPage_form_buttons'>
                    <button className='btn loginPage_form_buttons_btn'><Link className='link' to='/rejestracja'>Załóż konto</Link></button>
                    <button className='btn loginPage_form_buttons_btn'>Prześlij</button>
                </div>

            </form>
        </section>
    );
};

export default LoginPage;