import React from 'react';

const InfoPickUpDate = ({formValues}) => {
    const pickUpDateList = [
        {
            title: 'Data',
            value:formValues.dateValue
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
                console.log(typeof(formValues.dateValue))
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