import React from 'react';
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";
import Step5 from "./Step5/Step5";
import Step6 from "./Step6/Step6";
import {HandleCheckbox, StepBasicValue} from "../../../../../types";

type WhichStepProps = StepBasicValue & HandleCheckbox & {
    step: number
}

const WhichStep = ({step, formValues, handleChange,  handleChangeCheckbox, formErrors} : WhichStepProps) => {
    if (step === 1) {
        return (
            <Step1
                handleChange={handleChange}
                formValues = {formValues}
                formErrors = {formErrors}
            />
        )
    } else if (step === 2) {
        return (
            <Step2
                handleChange={handleChange}
                formValues={formValues}
                formErrors = {formErrors}
            />
        )
    } else if (step === 3) {
        return <Step3
            handleChange={handleChange}
            handleChangeCheckbox={handleChangeCheckbox}
            formValues={formValues}
            formErrors={formErrors}
        />
    } else if (step === 4) {
        return <Step4
            handleChange={handleChange}
            formValues={formValues}
            formErrors={formErrors}
        />
    } else if (step === 5) {
        return <Step5
            formValues={formValues}
        />
    } else if (step === 6) {
        return <Step6
        />
    }
    return <div></div>
}

export default WhichStep;