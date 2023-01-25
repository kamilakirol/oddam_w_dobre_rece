import React from 'react';

const FormItemStep1 = ({item, handleChange, formValues}) => {
    return (
        <div className='givePageStepItem_item step1'>
            <input
                type='radio'
                id={item.id}
                name='donatedThings'
                value={item.value}
                checked={formValues.donatedThings === item.value}
                onChange={handleChange}
            />
            <label htmlFor={item.id}> {item.value}</label>
        </div>
    );
};

export default FormItemStep1;