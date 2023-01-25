import React from 'react';
import numBagsDictionary from "../numBagsDictionary";

const NumberBagsForm = ({formValues, handleChange}) => {
    return (
        <div className='givePageStepItem_item'>
            <label>
                Liczba 60l worków:
                <select
                    className='givePageStepItem_item_select'
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