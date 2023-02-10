import React from 'react';
import thingsDictionary from "./thingsDictionary";
import Step1Form from "./Step1Form";
import {StepBasicValue} from "../../../../../../types";

const Step1 = ({handleChange, formValues, formErrors}: StepBasicValue) => {
    return (
        <div className='thingsMainFormStepsItem'>
            <p className='thingsMainFormStepsItem_steps'>Krok 1/4</p>
            <h2 className='thingsMainFormStepsItem_title'>Zaznacz co chcesz oddać:</h2>
            <form>
                {thingsDictionary.map(item => {
                    return (
                        <Step1Form
                            key={item.id}
                            item={item}
                            handleChange={handleChange}
                            formValues={formValues}
                        />
                )})}
                <p className='errors'>{formErrors.donatedThings}</p>
            </form>
        </div>
    );
};

export default Step1;