import React from 'react';
import InfoAddress from "./InfoAddress";
import InfoDonations from "./InfoDonations";
import InfoDate from "./InfoDate";
import {FormValues} from "../../../../../../types";


const Step5 = ({formValues}: FormValues) => {

    return (
        <div className='thingsMainFormStepsItem step5'>
            <h2 className='thingsMainFormStepsItem_title step5_title'>Podsumowanie Twojej Darowizny</h2>
            <InfoDonations
                formValues={formValues}
            />

            <div >
                <InfoAddress
                    formValues={formValues}
                />
                <InfoDate
                    formValues={formValues}
                />
            </div>

        </div>
    );
};

export default Step5;