import React, {ChangeEvent, FormEvent, useState} from 'react';

type FormValues = {
    name: string,
    email:string,
    message: string
}

const FooterContactForm = () => {
    const initialState = {
        name: '',
        email: '',
        message: ''
    };
    const [formValues, setFormValues] = useState(initialState);
    const [formErrors, setFormErrors] = useState<Partial<FormValues>>({});
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> ) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errors = validate(formValues);
        const isValid = !Object.keys(errors).length;
        setFormErrors(errors);

        if(!isValid){
            return;
        }
        setIsSubmit(true);

        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            method:"POST",
            body: JSON.stringify(formValues),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then( response => {
                if (response.ok) {
                    console.log({response})
                    return response.json()
                } else {
                    console.log('error')
                    return response.json()
                }
            })
            .then(_ => {
                setFormValues(initialState)
            })
            .catch(error => {
                console.log(error);
                alert('Błąd sieci')
            })

    }

    const validate = (values: FormValues) => {
        const errors: Partial<FormValues> = {};
        const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const regexWord = /^[a-zA-Z]{2,}$/;

        if(!values.name) {
            errors.name = 'Podane imię jest nieprawidłowe'
        } else if (!regexWord.test(values.name)) {
            errors.name = "Podane imię powinno składać się z jednego wyrazu";
        }

        if(!values.email ) {
            errors.email = 'Podane email jest nieprawidłowy!'
        } else if (!regexEmail.test(values.email)) {
            errors.email = "Email nie ma prawidłowego formatu";
        }

        if(!values.message && values.message.length <= 120) {
            errors.message = 'Wiadomość musi mieć conajmniej 120 znaków'
        }
        return errors;
    }

    return (
            <form
                className='footerContactForm'
                onSubmit={handleSubmit}
                method='post'
            >
                <div>
                    {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='sent'>Wiadomość została wysłana! <br/> Wkrótce się skontaktujemy.</div>) : (<div></div>)}
                </div>
                <div className='footerContactForm_info'>
                    <div className='footerContactForm_info_item'>
                        <label htmlFor='name'>Wpisz swoje imię</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={formValues.name}
                            onChange={handleChange}
                            placeholder='Krzysztof'
                        />
                        <p className='errors'>{formErrors.name}</p>
                    </div>

                    <div className='footerContactForm_info_item'>
                        <label htmlFor='email'>Wpisz swój email</label>
                        <input
                            id='email'
                            name='email'
                            value={formValues.email}
                            onChange={handleChange}
                            placeholder='abc@xyz.pl'
                        />
                        <p className='errors'>{formErrors.email}</p>
                    </div>

                </div>
                <div className='footerContactForm_message'>
                    <label htmlFor='message'>Wpisz swoją wiadomość</label>
                    <textarea
                        id='message'
                        name='message'
                        rows={7}
                        value={formValues.message}
                        onChange={handleChange}
                        placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    />
                    <p className='errors'>{formErrors.message}</p>
                </div>

                <input
                    className='btn footerContactForm_submit'
                    type='submit'
                    value='Wyślij'
                />
            </form>
    );
};

export default FooterContactForm;