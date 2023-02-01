import React from 'react';

const DateForm = ({handleChange, formValues, formErrors}) => {

    const date = new Date();
    let currentDate = date.toJSON().slice(0,10)

    return (
        <div className='givePageStepItem_item step4'>
            <p className='step4_title'>Termin odbioru</p>
            <div className='step4_box'>
                <label htmlFor='dateValue'>Data</label>
                <input
                type='date'
                id='dateValue'
                name='dateValue'
                min={currentDate}
                value={formValues.dateValue}
                onChange={handleChange}
                />
            </div>

            <div className='step4_box'>
                <label htmlFor='timeValue'>Godzina</label>

                <select
                    name='timeValue'
                    value={formValues.timeValue}
                    onChange={handleChange}
                >
                    <option value="" hidden>-- wybierz --</option>
                    <option value='9:00-12:00'>9:00-12:00</option>
                    <option value='12:00-16:00'>12:00-16:00</option>
                    <option value='16:00-20:00'>16:00-20:00</option>
                </select>

            </div>

            <div className='step4_box'>
                <label htmlFor='street'>Uwagi dla kuriera</label>
                <textarea
                    id='comments'
                    name='comments'
                    value={formValues.comments}
                    onChange={handleChange}
                />
            </div>
            <p className='errors step4_err'>{formErrors.dateValue} {formErrors.timeValue}</p>
        </div>
    );
};

export default DateForm;