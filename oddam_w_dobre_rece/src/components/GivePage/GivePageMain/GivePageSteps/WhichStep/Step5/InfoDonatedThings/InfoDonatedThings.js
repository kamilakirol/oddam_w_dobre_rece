import React from 'react';
import ShirtImg from "../../../../../../../assets/ShirtIcon.svg";
import RecyclingImg from "../../../../../../../assets/RecyclingIcon.svg";

const InfoDonatedThings = ({formValues}) => {
    return (
        <div className='step5_item'>
            <h3 className='step5_item_title'>Oddajesz:</h3>
            <div className='step5_item_box'>
                <img src={ShirtImg} alt='shirt icon'/>
                <p className='step5_item_box_text'>{formValues.bags} worki, {formValues.donatedThings}, {formValues.helpGroups.join(' ,')}</p>
            </div>
            <div className='step5_item_box'>
                <img src={RecyclingImg} alt='shirt icon'/>
                <p className='step5_item_box_text'>dla lokalizacji: {formValues.localization || formValues.localizationSpecific}</p>
            </div>
        </div>
    );
};

export default InfoDonatedThings;