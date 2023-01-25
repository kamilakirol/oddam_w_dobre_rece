import React from 'react';

const Step4 = ({handleChange, formValues}) => {
    const listDateAddress = [
        {
            name:'street',
            label:"Ulica"
        },
        {
            name:'city',
            label:'Miasto'
        },
        {
            name:'postCode',
            label:'Kod pocztowy'
        },
        {
            name:'phone',
            label:'Numer telefonu'
        }
    ];


    return (
        <div className='givePageStepItem'>
            <p className='givePageStepItem_steps'>Krok 4/4</p>
            <h2 className='givePageStepItem_title'>Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
            <form className='givePageStepItem_form'>
                <div className='givePageStepItem_form_item'>
                    <p>Adres odbioru:</p>

                    {listDateAddress.map(item => {
                        return (
                            <div>
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

                </div>

                <div className='givePageStepItem_form_item'>
                    <p>Termin odbioru</p>

                    {listDateAddress.map(item => {
                        return (
                            <div>
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

                </div>
            </form>
        </div>
    );
};

export default Step4;