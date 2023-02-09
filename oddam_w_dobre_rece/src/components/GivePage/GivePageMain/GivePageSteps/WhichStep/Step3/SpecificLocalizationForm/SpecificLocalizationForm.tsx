import React from 'react';
import {StepFormValue} from "../../../../../../../types";

const SpecificLocalizationForm = ({handleChange, formValues}: StepFormValue) => {
    return (
        <div className='givePageStepItem_item item_step3'>
            <label>Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
            <input
                className='item_step3_input'
                type='text'
                name={'localizationSpecific'}
                value={formValues.localizationSpecific}
                onChange={handleChange}
            />
        </div>
    );
};

export default SpecificLocalizationForm;