import React from 'react';

type StepsItemProps = {
    num: number,
    text: string
}

const StepsItem = ({num, text}: StepsItemProps) => {
    return (
        <div className='stepsItem'>
            <p className='stepsItem_number'>{num}</p>
            <p className='stepsItem_text'>{text}</p>
        </div>
    );
};

export default StepsItem;