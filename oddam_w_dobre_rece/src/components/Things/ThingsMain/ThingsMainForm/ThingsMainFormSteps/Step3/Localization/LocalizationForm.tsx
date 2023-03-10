import React from 'react';
import {listLocalization} from "../directoryStep3";
import {StepFormValue} from "../../../../../../../types";

const LocalizationForm = ({handleChange, formValues}: StepFormValue) => {
    return (
        <div className='thingsMainFormStepsItem_item step3'>
            <select
                className='thingsMainFormStepsItem_item_select'
                name='localization'
                value={formValues.localization}
                onChange={handleChange}
            >
                <option value="" hidden>-- wybierz --</option>
                {listLocalization.map(item => {
                    return (
                        <option key={item} value={item}>{item}</option>
                    )
                })}
            </select>
        </div>
    );
};

export default LocalizationForm;