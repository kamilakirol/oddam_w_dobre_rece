import React, {ChangeEvent} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import subDays from "date-fns/subDays";
import {StepBasicValue} from "../../../../../../types";

const DateForm = ({handleChange, formValues, formErrors}: StepBasicValue) => {

    const handleDateChange = (date: Date) => {
        handleChange({target: {
                name:'dateValue',
                value: String(date.valueOf())
            }
        } as ChangeEvent<HTMLInputElement>)
    }

    return (
        <div className='thingsMainFormStepsItem_item step4Item'>
            <p className='step4Item_title'>Termin odbioru</p>
            <div className='step4Item_box'>
                <label htmlFor='dateValue'>Data</label>
                <DatePicker
                    id='dateValue'
                    name='dateValue'
                    //@ts-ignore
                    selected={Number(formValues.dateValue) as Date}
                    onChange={handleDateChange}
                    minDate={subDays(new Date(), -1)}
                    filterDate={(date: Date) => date.getDay() !== 6 && date.getDay() !== 0}
                    dateFormat='dd/MM/yyyy'
                />
            </div>

            <div className='step4Item_box'>
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

            <div className='step4Item_box'>
                <label htmlFor='street'>Uwagi dla kuriera</label>
                <textarea
                    id='comments'
                    name='comments'
                    value={formValues.comments}
                    onChange={handleChange}
                />
            </div>
            <p className='errors step4Item_err'>{formErrors.dateValue} {formErrors.timeValue}</p>
        </div>
    );
};

export default DateForm;