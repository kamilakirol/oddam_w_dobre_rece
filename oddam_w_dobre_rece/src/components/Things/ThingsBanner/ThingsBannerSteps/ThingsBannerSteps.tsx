import React from 'react';

type ThingsBannerStepsProps = {
    num: number,
    text: string
}

const ThingsBannerSteps = ({num, text}: ThingsBannerStepsProps) => {
    return (
        <div className='thingsBannerSteps'>
            <p className='thingsBannerSteps_number'>{num}</p>
            <p className='thingsBannerSteps_text'>{text}</p>
        </div>
    );
};

export default ThingsBannerSteps;