import React, {useState} from 'react';

const Form = () => {
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        message: '',
        errors: []
    });

    return (
        <form
            className='form'
            onSubmit={(e) => {
                e.preventDefault()
            }}
        >
            <div className='form_info'>
                <div className='form_info_item'>
                    <label htmlFor='fname'>Wpisz swoje imię</label>
                    <input
                        type='text'
                        id='fname'
                        name='fname'
                        value={formValue.name}
                        onChange={(e) => {
                            setFormValue({...formValue, name: e.target.value})
                        }}
                        placeholder='Krzysztof'/>
                </div>

                <div className='form_info_item'>
                    <label htmlFor='email'>Wpisz swój email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={formValue.email}
                        onChange={(e) => {
                            setFormValue({...formValue, email: e.target.value})
                        }}
                        placeholder='abc@xyz.pl'/>
                </div>
            </div>
            <div className='form_message'>
                <label htmlFor='message'>Wpisz swoją wiadomość</label>
                <textarea
                    id='message'
                    name='message'
                    rows='7'
                    value={formValue.message}
                    onChange={(e) => {
                        setFormValue({...formValue, message: e.target.value})
                    }}
                    placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
            </div>
            <input className='btn form_submit' type='submit' value='Wyślij'/>
        </form>
    );
};

export default Form;