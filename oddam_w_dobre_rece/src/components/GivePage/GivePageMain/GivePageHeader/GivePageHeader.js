import React from 'react';

const GivePageHeader = ({step}) => {

    const WhichStep = () => {
        if (step === 1) {
            return `Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.`
        } else if (step === 2) {
            return `Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.`
        }
    }
    return (
        <section className='givePageHeader'>
            <div className='container'>
                <h3 className='givePageHeader_title'>Ważne!</h3>
                <p className='givePageHeader_text'>
                    <WhichStep/>
                </p>
            </div>
        </section>
    );
};

export default GivePageHeader;