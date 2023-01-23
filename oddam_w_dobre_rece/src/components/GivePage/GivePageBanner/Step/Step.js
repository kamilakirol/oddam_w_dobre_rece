import React from 'react';

const Step = ({num, text}) => {
    return (
        <div className='step'>
            <p className='step_number'>{num}</p>
            <p className='step_text'>{text}</p>
        </div>
    );
};

export default Step;