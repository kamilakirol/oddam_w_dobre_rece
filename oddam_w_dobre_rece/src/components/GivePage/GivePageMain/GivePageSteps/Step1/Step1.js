import React from 'react';

const Step1 = ({handleChange, formValues}) => {
    const thingsToGive = [
        {
            id:'goodClothes',
            value: 'ubrania, które nadają się do ponownego użycia',
        },
        {
            id: 'badClothes',
            value: 'ubrania, do wyrzucenia',
        },
        {
            id: 'toys',
            value: 'zabawki',
        },
        {
            id: 'books',
            value: 'książki',
        },
        {
            id: 'other',
            value: 'Inne',
        },
    ];

    return (
        <div className='givePageStepItem'>
            <p className='givePageStepItem_steps'>Krok 1/4</p>
            <h2 className='givePageStepItem_title'>Zaznacz co chcesz oddać:</h2>
            <form className='givePageStepItem_form'>
                {thingsToGive.map(item => {
                    return (
                        <div className='givePageStepItem_form_item' key={item.id}>
                            <input
                                style={{backgroundColor: item.value === formValues.donatedThings ? "#FAD648" : "transparent"}}
                                type='radio'
                                id={item.id}
                                name='donatedThings'
                                value={item.value}
                                onChange={handleChange}
                            />
                            <label htmlFor={item.id}> {item.value}</label>
                        </div>
                )})}
            </form>
        </div>
    );
};

export default Step1;