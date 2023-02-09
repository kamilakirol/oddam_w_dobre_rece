import React from 'react';
import InfoPickUpAddress from "./InfoPickUpAddress/InfoPickUpAddress";
import InfoDonatedThings from "./InfoDonatedThings/InfoDonatedThings";
import InfoPickUpDate from "./InfoPickUpDate/InfoPickUpDate";
import {FormValues} from "../../../../../../types";


const Step5 = ({formValues}: FormValues) => {

    return (
        <div className='givePageStepItem step5'>
            <h2 className='givePageStepItem_title step5_title'>Podsumowanie Twojej Darowizny</h2>
            <InfoDonatedThings
                formValues={formValues}
            />

            <div >
                <InfoPickUpAddress
                    formValues={formValues}
                />
                <InfoPickUpDate
                    formValues={formValues}
                />
            </div>

        </div>
    );
};

export default Step5;