import React from 'react';
import {listLocalization} from "../directoryStep3";

const LocalizationForm = ({handleChange, formValues}) => {
    return (
        <div className='givePageStepItem_item item_step3'>
            <select
                className='givePageStepItem_item_select'
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