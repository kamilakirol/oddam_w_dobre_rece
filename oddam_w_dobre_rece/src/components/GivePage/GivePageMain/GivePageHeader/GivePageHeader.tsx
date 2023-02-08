import React from 'react';
import GivePageHeaderSteps from "./GivePageHeaderSteps";

export type GivePageHeaderProps = {
    step: number
}

const GivePageHeader = ({step}: GivePageHeaderProps) => {
    return (
        <section className='givePageHeader'>
            <div className='container'>
                <div className='givePageHeader_box'>
                    <h3 className='givePageHeader_box_title'>Ważne!</h3>
                    <p className='givePageHeader_box_text'>
                        <GivePageHeaderSteps step={step}/>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default GivePageHeader;