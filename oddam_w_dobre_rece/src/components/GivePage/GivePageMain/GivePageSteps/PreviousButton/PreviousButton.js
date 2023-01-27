import React from 'react';

const PreviousButton = ({step, previousStep}) => {
    if (step > 1 && step < 6) {
        return <button className='btn givePageSteps_box_btn' onClick={previousStep}>Wstecz</button>
    } else {
        return ''
    }
};

export default PreviousButton;