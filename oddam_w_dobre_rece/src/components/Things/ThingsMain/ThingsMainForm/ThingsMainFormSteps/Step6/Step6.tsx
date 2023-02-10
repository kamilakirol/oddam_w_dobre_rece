import React from 'react';
import DecorationImg from '../../../../../../assets/Decoration.svg'

const Step6 = () => {
    return (
        <div className='thingsMainFormStepsItem step6'>
            <h2 className='step6_title'>Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie informacje o odbiorze.</h2>
            <img src={DecorationImg} alt='decoration line'/>
        </div>
    );
};

export default Step6;