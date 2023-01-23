import React, {useState} from 'react';
import LoginPageFormButtons from "../../LoginPage/LoginPageForm/LoginPageFormButtons/LoginPageFormButtons";

const RegistrationPageForm = () => {
    const initialState = {
        email:'',
        password: '',
        password2: '',
    };

    const [registrationValues, setRegistrationValues] = useState(initialState);
    const [registrationErrors, setRegistrationErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setRegistrationValues({...registrationValues, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(registrationValues);
        const isValid = !Object.keys(errors).length;
        setRegistrationErrors(errors);

        if(!isValid){
            return;
        }
        setIsSubmit(true);

    }

    const validate = (values) => {
        const errors = {};
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

            <LoginPageFormButtons/>

        </form>
    );
};

export default RegistrationPageForm;