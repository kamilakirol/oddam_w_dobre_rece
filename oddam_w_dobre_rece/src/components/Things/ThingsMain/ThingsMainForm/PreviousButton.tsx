import React, {MouseEventHandler} from 'react';

type PreviousButtonProps = {
    step:number,
    previousStep: MouseEventHandler<HTMLButtonElement>
}

const PreviousButton = ({step, previousStep}: PreviousButtonProps) => {
    if (step > 1 && step < 6) {
        return <button className='btn thingsMainForm_box_btn' onClick={previousStep}>Wstecz</button>
    }
    return <div></div>
};

export default PreviousButton;