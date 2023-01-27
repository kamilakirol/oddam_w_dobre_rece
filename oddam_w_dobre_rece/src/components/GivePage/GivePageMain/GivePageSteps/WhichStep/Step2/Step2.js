import React from 'react';
import NumberBagsForm from "./NumberBagsForm/NumberBagsForm";

const Step2 = ({handleChange, formValues, formErrors}) => {

    return (
        <div className='givePageStepItem'>
            <p className='givePageStepItem_steps'>Krok 2/4</p>
            <h2 className='givePageStepItem_title'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
            <form>
                <NumberBagsForm
                    handleChange={handleChange}
                    formValues={formValues}
                />
                <p className='errors'>{formErrors.bags}</p>
            </form>
        </div>
    );
};

export default Step2;