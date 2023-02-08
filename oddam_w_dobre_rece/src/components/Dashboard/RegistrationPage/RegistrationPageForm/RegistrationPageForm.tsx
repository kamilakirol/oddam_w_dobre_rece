import React, {ChangeEvent, FormEvent, useState} from 'react';
import PageButton from "../../PageButton/PageButton";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../../../firebase"
import {useNavigate} from "react-router-dom";

type RegistrationForm = {
    email: string,
    password: string,
    password2: string
}

const RegistrationPageForm = () => {
    const initialState = {
        email:'',
        password: '',
        password2: '',
    };

    const navigate = useNavigate();
    const [registrationValues, setRegistrationValues] = useState(initialState);
    const [registrationErrors, setRegistrationErrors] = useState<Partial<RegistrationForm>>({});

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setRegistrationValues({...registrationValues, [name]: value});
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        const errors = validate(registrationValues);
        const isValid = !Object.keys(errors).length;
        setRegistrationErrors(errors);

        if(!isValid){
            return
        }

        createUserWithEmailAndPassword(auth, registrationValues.email, registrationValues.password)
            .then (() => {
                navigate('/')
            })
            .catch((error) => {
                alert(`Error: Email jest już zarejstrowany, zaloguj się albo użyj innego maila do rejestracji ${error}.`)
            });
        // setIsSubmit(true);

    }

    const validate = (values: RegistrationForm) => {
        const errors: Partial<RegistrationForm> = {};
        const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        if(!values.email || !regexEmail.test(values.email)) {
            errors.email = 'Podany email jest nieprawidłowy!'
        }

        if (!values.password || values.password.length <= 6) {
            errors.password = 'Podane hasło jest za krótkie!'
        } else if (values.password !== values.password2) {
            errors.password = 'Podane hasło nie są takie same'
        }

        if (!values.password2 || values.password2.length <= 6) {
            errors.password2 = 'Podane hasło jest za krótkie!'
        } else if (values.password2 !== values.password) {
            errors.password2 = 'Podane hasło nie są takie same'
        }

        return errors;
    }

    return (
        <form className='logPage_form'
              onSubmit={handleSubmit}>

            <div className='logPage_form_box'>
                <div className='logPage_form_box_item'>
                    <label htmlFor='email'>Email</label>
                    <input
                        id='email'
                        name='email'
                        value={registrationValues.email}
                        onChange={handleChange}
                    />
                    <p className='errors'>{registrationErrors.email}</p>
                </div>

                <div className='logPage_form_box_item'>
                    <label htmlFor='password'>Hasło</label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        value={registrationValues.password}
                        onChange={handleChange}
                    />
                    <p className='errors'>{registrationErrors.password}</p>
                </div>

                <div className='logPage_form_box_item'>
                    <label htmlFor='password'>Powtórz hasło</label>
                    <input
                        type='password'
                        name='password2'
                        id='password2'
                        value={registrationValues.password2}
                        onChange={handleChange}
                    />
                    <p className='errors'>{registrationErrors.password2}</p>
                </div>
            </div>


            <PageButton to='/logowanie' textLink='Zaloguj się' textSubmit='Załóż konto'/>

        </form>
    );
};

export default RegistrationPageForm;