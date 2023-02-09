import React from 'react';
import {FormValues} from "../../../../../../../types";

const InfoPickUpAddress = ({formValues}: FormValues) => {
    const pickUpAddressList = [
        {
            title: 'Ulica',
            value:formValues.street
        },
        {
            title: 'Miasto',
            value:formValues.city
        },
        {
            title: 'Kod pocztowy',
            value: formValues.postCode
        },
        {
            title: 'Numer telefonu',
            value: formValues.phone
        }
    ]

    return (
        <div className='step5_item'>
            <h3 className='step5_item_title'>Adres odbioru:</h3>
            {pickUpAddressList.map(item => {
                return (
                    <div className='step5_item_box' key={item.title}>
                        <p className='step5_item_box_title'>{item.title}</p>
                        <p className='step5_item_box_text'>{item.value}</p>
                    </div>
                )
            })}

        </div>
    );
};

export default InfoPickUpAddress;