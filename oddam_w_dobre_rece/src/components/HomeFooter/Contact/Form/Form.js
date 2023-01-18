import React from 'react';

const Form = () => {
    return (
        <form className='form'>
            <div className='form_info'>
                <div className='form_info_item'>
                    <label htmlFor='fname'>Wpisz swoje imię</label>
                    <input type='text' id='fname' name='fname' placeholder='Krzysztof'/>
                </div>

                <div className='form_info_item'>
                    <label htmlFor='email'>Wpisz swój email</label>
                    <input type='email' id='email' name='email' placeholder='abc@xyz.pl'/>
                </div>
            </div>
            <div className='form_message'>
                <label htmlFor='message'>Wpisz swoją wiadomość</label>
                <textarea id='message' name='message' rows='7' placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
            </div>
            <input className='form_submit' type='submit' value='Wyślij'/>
        </form>
    );
};

export default Form;