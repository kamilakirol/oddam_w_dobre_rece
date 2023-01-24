import React from 'react';

const Step2 = ({handleChange, formValues}) => {
    const bags = [1, 2, 3, 4, 5]

    return (
        <div className='givePageStepItem'>
            <p className='givePageStepItem_steps'>Krok 2/4</p>
            <h2 className='givePageStepItem_title'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
            <form className='givePageStepItem_form'>
                <div className='givePageStepItem_form_item'>
                    <label>
                        Liczba 60l worków:
                        <select className='givePageStepItem_form_item_select' name="bags" value={formValues.bags} onChange={handleChange}>
                            <option value="" disabled selected hidden>-- wybierz --</option>
                            {bags.map(bag => {
                                return (
                                    <option key={bag} value={bag}>{bag}</option>
                                    )
                            })}
                        </select>

                    </label>
                </div>
            </form>
        </div>
    );
};

export default Step2;