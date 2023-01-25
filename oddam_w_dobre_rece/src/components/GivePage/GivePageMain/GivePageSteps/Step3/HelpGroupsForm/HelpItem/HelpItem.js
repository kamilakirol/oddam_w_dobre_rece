import React from 'react';

const HelpItem = ({handleChangeCheckbox, formValues, helpItem}) => {
    return (
        <div className='item_step3_box_item' >
            <input
                type='checkbox'
                id={helpItem}
                name='helpGroups'
                value={helpItem}
                checked={formValues.helpGroups.includes(helpItem)}
                onChange={handleChangeCheckbox}
            />
            <label
                htmlFor={helpItem}>
                {helpItem}
            </label>
        </div>
    );
};

export default HelpItem;