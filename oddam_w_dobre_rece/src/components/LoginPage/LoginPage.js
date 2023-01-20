import React from 'react';
import DecorationImg from '../../assets/Decoration.svg'

const LoginPage = () => {
    return (
        <section className='loginPage'>
            <h1>Zaloguj się</h1>
            <img src={DecorationImg} alt='decoration line'/>
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

                <div>

                </div>

            </form>
        </section>
    );
};

export default LoginPage;