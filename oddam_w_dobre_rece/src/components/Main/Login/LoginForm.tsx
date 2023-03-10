import React, {ChangeEvent, FormEvent, useState} from 'react';
import LoginButtons from "./LoginButtons";
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from "../../../firebase"
import {useNavigate} from "react-router-dom";

type LoginFormProps = {
    email: string,
    password: string
}

const LoginForm = () => {
    const initialState = {
        email:'',
        password: ''
    };

    const navigate = useNavigate();
    const [loginValues, setLoginValues] = useState(initialState);
    const [loginErrors, setLoginErrors] = useState<Partial<LoginFormProps>>({});
    // const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setLoginValues({...loginValues, [name]: value});
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errors = validate(loginValues);
        const isValid = !Object.keys(errors).length;
        setLoginErrors(errors);

        if(!isValid){
            return
        }
        // setIsSubmit(true);
        signInWithEmailAndPassword(auth, loginValues.email, loginValues.password)
            .then(() => {
                navigate('/')
            })
            .catch((error) => {
                console.error(`Twój email lub hasło są niepoprawne, sprawdź swoje dane ${error}`)
            })
    }

    const validate = (values: LoginFormProps) => {
        const errors: Partial<LoginFormProps> = {};
        const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        if(!values.email && !regexEmail.test(values.email)) {
            errors.email = 'Podany email jest nieprawidłowy!'
        }

        if (!values.password && values.password.length <= 6) {
            errors.password = 'Podane hasło jest za krótkie!'
        }
        return errors;
    }

    return (
        <form className='login_form'
              onSubmit={handleSubmit}>

            <div className='login_form_box'>
                <div className='login_form_box_item'>
                    <label htmlFor='email'>Email</label>
                    <input
                        id='email'
                        name='email'
                        value={loginValues.email}
                        onChange={handleChange}
                    />
                    <p className='errors'>{loginErrors.email}</p>
                </div>

                <div className='login_form_box_item'>
                    <label htmlFor='password'>Hasło</label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        value={loginValues.password}
                        onChange={handleChange}
                    />
                    <p className='errors'>{loginErrors.password}</p>
                </div>
            </div>

            <LoginButtons to='/rejestracja' textLink='Załóż konto' textSubmit='Zaloguj się' />

        </form>
    );
};

export default LoginForm;