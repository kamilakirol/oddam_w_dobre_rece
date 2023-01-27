import React from 'react';

const DateForm = ({handleChange, formValues, formErrors}) => {
    return (
        <div className='givePageStepItem_item step4'>
            <p className='step4_title'>Termin odbioru</p>
            <div className='step4_box'>
                <label htmlFor='dateValue'>Data</label>
                <input
                type='date'
                id='dateValue'
                name='dateValue'
                value={formValues.dateValue}
                onChange={handleChange}
                />
            </div>

            <div className='step4_box'>
                <label htmlFor='timeValue'>Godzina</label>
                <input
                    type='time'
                    id='timeValue'
                    name='timeValue'
                    value={formValues.timeValue}
                    onChange={handleChange}
                />

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