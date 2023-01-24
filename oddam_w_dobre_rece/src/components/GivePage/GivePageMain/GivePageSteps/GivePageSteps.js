import React, {useState} from 'react';
import WhichStep from "./WhichStep/WhichStep";

const GivePageSteps = ({step, setStep}) => {
    const initialState = {
        donatedThings: '',
        bags: ''
    }
    const [formValues, setFormValues] = useState(initialState);
    // const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }

    const nextStep = () => {
        setStep(prevStep => {
            if(prevStep < 5 ) {
                return prevStep + 1
            }
            return prevStep
        })
    }

    const previousStep = () => {
        setStep(prevStep => prevStep - 1)
    }

    return (
        <section className='givePageSteps'>
            <div className='container'>
                <WhichStep
                    step={step}
                    formValues={formValues}
                    handleChange={handleChange}
                />
                {step === 1 ? '' : <button className='btn givePageSteps_btn' onClick={previousStep}>Wstecz</button> }
                <button className='btn givePageSteps_btn' onClick={nextStep}>Dalej</button>
            </div>
        </section>
    );
};

export default GivePageSteps;