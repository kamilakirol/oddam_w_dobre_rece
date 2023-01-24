import React from 'react';

const StepsItem = ({num, text}) => {
    return (
        <div className='stepsItem'>
            <p className='stepsItem_number'>{num}</p>
            <p className='stepsItem_text'>{text}</p>
        </div>
    );
};

export default StepsItem;