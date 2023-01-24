import React from 'react';
import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";

const WhichStep = ({step, formValues, handleChange }) => {
    if (step === 1) {
        return (
            <Step1
                handleChange={handleChange}
                formValues = {formValues}
            />
        )
    } else if (step === 2) {
        return (
            <Step2
                handleChange={handleChange}
                formValues={formValues}
            />
        )
    }
}

export default WhichStep;