import React from 'react';
import Step2Form from "./Step2Form";
import {StepBasicValue} from "../../../../../../types";


const Step2 = ({handleChange, formValues, formErrors}: StepBasicValue) => {

    return (
        <div className='thingsMainFormStepsItem'>
            <p className='thingsMainFormStepsItem_steps'>Krok 2/4</p>
            <h2 className='thingsMainFormStepsItem_title'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
            <form>
                <Step2Form
                    handleChange={handleChange}
                    formValues={formValues}
                />
                <p className='errors'>{formErrors.bags}</p>
            </form>
        </div>
    );
};

export default Step2;