import React from 'react';
import AddressForm from "./AddressForm";
import DateForm from "./DateForm";
import {StepBasicValue} from "../../../../../../types";

const Step4 = ({handleChange, formValues, formErrors}: StepBasicValue) => {
    return (
        <div className='thingsMainFormStepsItem'>
            <p className='thingsMainFormStepsItem_steps'>Krok 4/4</p>
            <h2 className='thingsMainFormStepsItem_title step4Title'>Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
            <form className='step4'>
                <AddressForm
                    handleChange={handleChange}
                    formValues={formValues}
                    formErrors={formErrors}
                />

                <DateForm
                handleChange={handleChange}
                formValues={formValues}
                formErrors={formErrors}
                />
            </form>
        </div>
    );
};

export default Step4;