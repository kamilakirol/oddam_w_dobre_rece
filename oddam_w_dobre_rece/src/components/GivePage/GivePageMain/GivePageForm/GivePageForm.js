import React from 'react';

const GivePageForm = () => {
    return (
        <section className='givePageForm'>
            <div className='container'>
                <div className='givePageForm_form'>
                    <p>Krok 1/4</p>
                    <h2>Zaznacz co chcesz oddać:</h2>
                    <div>
                        <input
                        type='radio'
                        id='goodClothes'
                        name='things'
                        value='ubrania, które nadają się do ponownego użycia'
                        checked
                        />
                        <label for='goodClothes'>ubrania, które nadają się do ponownego użycia</label>
                    </div>

                    <input type='submit'/>
                </div>
            </div>
        </section>
    );
};

export default GivePageForm;