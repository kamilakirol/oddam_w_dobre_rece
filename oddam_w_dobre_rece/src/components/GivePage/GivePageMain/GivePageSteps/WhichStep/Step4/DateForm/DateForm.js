import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const DateForm = ({handleChange, formValues, formErrors}) => {

    const handleDateChange = (date) => {
        handleChange({target: {
                name:'dateValue',
                value: date.valueOf()
            }
        })
    }

    return (
        <div className='givePageStepItem_item step4'>
            <p className='step4_title'>Termin odbioru</p>
            <div className='step4_box'>
                <label htmlFor='dateValue'>Data</label>
                <DatePicker
                    id='dateValue'
                    name='dateValue'
                    selected={formValues.dateValue}
                    onChange={handleDateChange}
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