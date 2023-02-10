import React from 'react';
import {GivePageFormValues, HandleCheckbox} from "../../../../../../../types";

type SocietyFormProps = HandleCheckbox & {
    helpItem: string,
    formValues: GivePageFormValues
}

const SocietyForm = ({handleChangeCheckbox, formValues, helpItem}: SocietyFormProps) => {
    return (
        <div className='step3_box_item' >
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

export default SocietyForm;