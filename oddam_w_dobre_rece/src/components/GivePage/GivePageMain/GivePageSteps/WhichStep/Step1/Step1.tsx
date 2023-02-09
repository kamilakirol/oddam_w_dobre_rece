import React from 'react';
import thingsDictionary from "./thingsDictionary";
import FormItemStep1 from "./FormItemStep1/FormItemStep1";
import {StepBasicValue} from "../../../../../../types";

const Step1 = ({handleChange, formValues, formErrors}: StepBasicValue) => {
    return (
        <div className='givePageStepItem'>
            <p className='givePageStepItem_steps'>Krok 1/4</p>
            <h2 className='givePageStepItem_title'>Zaznacz co chcesz oddać:</h2>
            <form>
                {thingsDictionary.map(item => {
                    return (
                        <FormItemStep1
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