import React, {useState} from 'react';
import GivePageHeader from './GivePageHeader/GivePageHeader'
import GivePageSteps from "./GivePageSteps/GivePageSteps";

const GivePageMain = () => {
    const [step, setStep] = useState(4);

    return (
        <>
            {step <= 4 ? <GivePageHeader step={step}/> : <div></div>}
            <GivePageSteps step={step} setStep={setStep}/>
        </>
    );
};

export default GivePageMain;