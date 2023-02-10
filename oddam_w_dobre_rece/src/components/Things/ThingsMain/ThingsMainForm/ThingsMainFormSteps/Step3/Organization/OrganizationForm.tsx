import React from 'react';
import {StepFormValue} from "../../../../../../../types";

const OrganizationForm = ({handleChange, formValues}: StepFormValue) => {
    return (
        <div className='thingsMainFormStepsItem_item step3'>
            <label>Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
            <input
                className='step3_input'
                type='text'
                name={'localizationSpecific'}
                value={formValues.localizationSpecific}
                onChange={handleChange}
            />
        </div>
    );
};

export default OrganizationForm;