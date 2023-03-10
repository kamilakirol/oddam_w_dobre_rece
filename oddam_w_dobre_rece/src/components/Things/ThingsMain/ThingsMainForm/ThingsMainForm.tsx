import React, {useState, useContext, Dispatch, SetStateAction, ChangeEvent, MouseEvent} from 'react';
import ThingsMainFormSteps from "./ThingsMainFormSteps/ThingsMainFormSteps";
import PreviousButton from "./PreviousButton";
import {db} from "../../../../firebase";
import {addDoc, collection} from 'firebase/firestore'
import {UserContext} from "../../../../FirebaseAuth";
import {GivePageFormValues} from "../../../../types";

type ThingsMainFormProps = {
    step: number,
    setStep: Dispatch<SetStateAction<number>>
}

const ThingsMainForm = ({step, setStep}: ThingsMainFormProps) => {
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
        dateValue:'',
        timeValue:'',
        comments:''
    }

    const user = useContext(UserContext)
    const [formValues, setFormValues] = useState<GivePageFormValues>(initialState);
    const [formErrors, setFormErrors] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
        setFormErrors({})
    }

    const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
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


    const handleSubmit = async (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "forms"), {
                donatedThings: formValues.donatedThings,
                bags: formValues.bags,
                localization: formValues.localization,
                helpGroups:formValues.helpGroups,
                localizationSpecific:formValues.localizationSpecific,
                street:formValues.street,
                city:formValues.city,
                postCode:formValues.postCode,
                phone:formValues.phone,
                dateValue:formValues.dateValue,
                timeValue:formValues.timeValue,
                comments:formValues.comments,
                userId: user?.uid
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        onNextClick()
        setFormValues(initialState)
    }

    const validateStep1 = () => {
        if (!formValues.donatedThings) {
            setFormErrors({donatedThings:'Musi by?? wybrane jedno pole'})
            return false;
        }
        return true;
    }

    const validationStep2 = () =>  {
        if (!formValues.bags) {
            setFormErrors({bags:'Musi by?? wybrane jedno pole'})
            return false;
        } return true
    }

    const validationsStep3 = () => {
        if (!formValues.helpGroups.length) {
            setFormErrors({helpGroups: 'Musisz wybra?? przynajmniej jedn?? grupe kt??rej chcesz pom??c'})
            return false;
        } else if (!formValues.localization && !formValues.localizationSpecific) {
            setFormErrors({localization: 'Musisz wybra?? lub wpisa?? lokalizacje'})
            return false;
        } return true
    }

    const validationsStep4 = () => {
        const regexPostCode = /^[0-9]{2}-[0-9]{3}/
        const regexPhone = /^[0-9]{9}/

        if (!formValues.street.length) {
            setFormErrors({street: 'Pole ulica musi si?? sk??ada?? z minimum 2 znak??w'})
            return false;
        } else if (formValues.city.length < 2 ){
            setFormErrors({city: 'Pole miasto musi si?? sk??ada?? z minimum 2 znak??w'})
            return false;
        } else if (!regexPostCode.test(formValues.postCode)) {
            setFormErrors({postCode: 'Podany kod pocztowy jest nieprawid??owy' })
            return false;
        } else if (!regexPhone.test(formValues.phone)) {
            setFormErrors({phone: 'Podany telefon musi miec format xxx-xxx-xxx'})
            return false;
        } else if (!formValues.dateValue) {
            setFormErrors({dateValue: 'Musisz poda?? date'})
            return false;
        } else if (!formValues.timeValue) {
            setFormErrors({timeValue: 'Musisz poda?? godzin??'})
            return false;
        }
        return true
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
        } else if (step === 4) {
            isValid = validationsStep4()
        } else if (step === 5) {
            nextStep()
        }
        if (isValid) {
            nextStep()
        }
    }

    const nextStep = () => {
        setStep(prevStep => {
            if(prevStep <= 5 ) {
                return prevStep + 1
            }
            return prevStep
        })
    }

    const previousStep = () => {
        setStep(prevStep => {
            if (prevStep <= 5 || prevStep > 2) {
                return prevStep - 1
            }
            return prevStep
        })
    }

    return (
        <section className='thingsMainForm'>
            <div className='container'>
                <div className='thingsMainForm_box'>
                        <ThingsMainFormSteps
                            step={step}
                            formValues={formValues}
                            handleChange={handleChange}
                            handleChangeCheckbox={handleChangeCheckbox}
                            formErrors={formErrors}
                        />
                        <PreviousButton
                            previousStep={previousStep}
                            step={step}
                        />

                        {step <= 4 && <button className='btn thingsMainForm_box_btn' onClick={onNextClick}>Dalej</button>}
                        {step === 5 && <button className='btn thingsMainForm_box_btn' onClick={handleSubmit} >Potwierdzam</button>}

                    </div>

            </div>
        </section>
    );
};

export default ThingsMainForm;