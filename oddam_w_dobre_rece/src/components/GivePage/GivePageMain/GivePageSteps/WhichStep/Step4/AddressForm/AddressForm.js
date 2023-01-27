import React from 'react';
import listAddressDirectory from "../listAddressDirectory";

const AddressForm = ({handleChange, formValues, formErrors}) => {
    return (
        <div className='givePageStepItem_item step4'>
            <p className='step4_title'>Adres odbioru:</p>

            {listAddressDirectory.map(item => {
                return (
                        <div className='step4_box' key={item.name}>
                            <label htmlFor='street'>{item.label}</label>
                            <input
                                type='text'
                                id={item.name}
                                name={item.name}
                                value={formValues.name}
                                onChange={handleChange}
                            />
                        </div>
                )
            })}
            <p className='errors step4_err'> {formErrors.street} {formErrors.city} {formErrors.postCode} {formErrors.phone}</p>
        </div>
    );
};

export default AddressForm;