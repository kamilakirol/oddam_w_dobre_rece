import React from 'react';

const GivePageHeader = ({step}) => {

    const WhichStep = () => {
        if (step === 1) {
            return `Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.`
        } else if (step === 2) {
            return `Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.`
        } else if (step === 3) {
            return `Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.`
        } else if (step === 4) {
            return `Podaj adres oraz termin odbioru rzeczy.`
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