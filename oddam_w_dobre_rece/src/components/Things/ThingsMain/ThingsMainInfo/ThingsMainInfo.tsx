import React from 'react';
import ThingsMainInfoSteps from "./ThingsMainInfoSteps";

export type ThingsMainInfoProps = {
    step: number
}

const ThingsMainInfo = ({step}: ThingsMainInfoProps) => {
    return (
        <section className='thingsMainInfo'>
            <div className='container'>
                <div className='thingsMainInfo_box'>
                    <h3 className='thingsMainInfo_box_title'>Ważne!</h3>
                    <p className='thingsMainInfo_box_text'>
                        <ThingsMainInfoSteps step={step}/>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ThingsMainInfo;