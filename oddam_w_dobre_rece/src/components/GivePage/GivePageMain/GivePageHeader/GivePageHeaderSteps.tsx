import React from 'react';
import {GivePageHeaderProps} from "./GivePageHeader";

const GivePageHeaderSteps = ({step}: GivePageHeaderProps) => {
    if (step === 1) {
    return (
        <p>
            Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je
            przekazać.
        </p>
    )
    } else if (step === 2) {
        return (
            <p>
                Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.
            </p>
        )
    } else if (step === 3) {
        return (
            <p>
                Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.
            </p>
        )
    } else if (step === 4) {
        return (
            <p>
                Podaj adres oraz termin odbioru rzeczy.
            </p>
        )
    }
    return <div></div>
}


export default GivePageHeaderSteps;