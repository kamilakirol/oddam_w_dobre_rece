import React from 'react';
import {FormValues} from "../../../../../../../types";

const InfoPickUpDate = ({formValues}: FormValues) => {
    const pickUpDateList = [
        {
            title: 'Data',
            value: new Date(Number(formValues.dateValue)).toLocaleDateString()
        },
        {
            title: 'Godzina',
            value: formValues.timeValue
        },
        {
            title: 'Uwagi dla kuriera',
            value: formValues.comments
        }

    ]

    return (
        <div className='step5_item'>
            <h3 className='step5_item_title'>Termin odbioru:</h3>
            {pickUpDateList.map(item => {
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

export default InfoPickUpDate;