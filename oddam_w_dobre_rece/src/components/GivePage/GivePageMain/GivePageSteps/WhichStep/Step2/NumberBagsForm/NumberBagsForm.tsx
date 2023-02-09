import React from 'react';
import numBagsDictionary from "../numBagsDictionary";
import {StepFormValue} from "../../../../../../../types";

const NumberBagsForm = ({formValues, handleChange}: StepFormValue) => {
    return (
        <div className='givePageStepItem_item'>
            <label>
                Liczba 60l worków:
                <select
                    className='step2_select'
                    name="bags"
                    value={formValues.bags}
                    onChange={handleChange}
                >
                    <option value="" hidden>-- wybierz --</option>
                    {numBagsDictionary.map(bag => {
                        return (
                            <option key={bag} value={bag}>{bag}</option>
                        )
                    })}
                </select>

            </label>
        </div>
    );
};

export default NumberBagsForm;