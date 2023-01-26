import React from 'react';

const DateForm = ({handleChange, formValues}) => {
    return (
        <div className='givePageStepItem_item step4'>
            <p className='step4_title'>Termin odbioru</p>
            <div className='step4_box'>
                <label htmlFor='street'>Data</label>
                <input
                    type='text'
                    id='data'
                    name='data'
                    value={formValues.date}
                    onChange={handleChange}
                />
            </div>

            <div className='step4_box'>
                <label htmlFor='street'>Godzina</label>
                <input
                    type='text'
                    id='time'
                    name='time'
                    value={formValues.time}
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

        </div>
    );
};

export default DateForm;