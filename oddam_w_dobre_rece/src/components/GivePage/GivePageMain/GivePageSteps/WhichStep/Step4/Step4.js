import React from 'react';
import AddressForm from "./AddressForm/AddressForm";
import DateForm from "./DateForm/DateForm";

const Step4 = ({handleChange, formValues, setFormValues, formErrors}) => {
    return (
        <div className='givePageStepItem'>
            <p className='givePageStepItem_steps'>Krok 4/4</p>
            <h2 className='givePageStepItem_title step4Title'>Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
            <form className='step4Form'>
                <AddressForm
                    handleChange={handleChange}
                    formValues={formValues}
                    formErrors={formErrors}
                />

                <DateForm
                handleChange={handleChange}
                formValues={formValues}
                setFormValues={setFormValues}
                formErrors={formErrors}
                />
            </form>
        </div>
    );
};

export default Step4;