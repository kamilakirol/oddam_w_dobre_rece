import React, {useState} from 'react';
import WhichStep from "./WhichStep/WhichStep";

const GivePageSteps = ({step, setStep}) => {
    const initialState = {
        donatedThings: '',
        bags: '',
        localization:'',
        helpGroups:[],
        localizationSpecific:'',
        street:'',
        city:'',
        postCode:'',
        phone:'',
        date:'',
        time:'',
        comments:''
    }

    const [formValues, setFormValues] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
        setFormErrors({})
    }

    const handleChangeCheckbox = (e) => {
        const {value, checked} = e.target;
        let data = formValues.helpGroups;

        if (checked) {
            data.push(value);
             setFormValues({...formValues, helpGroups: data})
        } else {
            let newData = data.filter(element => {
                return element !== value
            })
            setFormValues({...formValues, helpGroups: newData})
        }
        setFormErrors({})
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }

    const validateStep1 = () => {
        if (!formValues.donatedThings) {
            setFormErrors({donatedThings:'Musi być wybrane jedno pole'})
            return false;
        }
        return true;
    }

    const validationStep2 = () =>  {
        if (!formValues.bags) {
            setFormErrors({bags:'Musi być wybrane jedno pole'})
            return false;
        } return true
    }

    const validationsStep3 = () => {
        console.log({formValues})
        if (!formValues.helpGroups.length) {
            setFormErrors({helpGroups: 'Musisz wybrać przynajmniej jedną grupe której chcesz pomóc'})
            return false;
        } else if (!formValues.localization && !formValues.localizationSpecific) {
            setFormErrors({localization: 'Musisz wybrać lub wpisać lokalizacje'})
            return false;
        } return true
    }


    const onNextClick = () => {
        // validation
        let isValid = true;
        if (step === 1) {
            isValid = validateStep1()
        } else if (step === 2) {
            isValid = validationStep2()
        } else if (step === 3) {
            isValid = validationsStep3()
        }
        if (isValid) {
            nextStep()
        }
    }

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
                    handleChangeCheckbox={handleChangeCheckbox}
                    formErrors={formErrors}
                />
                {step === 1 ? '' : <button className='btn givePageSteps_btn' onClick={previousStep}>Wstecz</button> }
                <button className='btn givePageSteps_btn' onClick={onNextClick}>Dalej</button>
            </div>
        </section>
    );
};

export default GivePageSteps;