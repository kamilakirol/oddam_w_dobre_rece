import React, {useState} from 'react';
import GivePageHeader from "./GivePageHeader/GivePageHeader";
import GivePageSteps from "./GivePageSteps/GivePageSteps";

const GivePageMain = () => {
    const [step, setStep] = useState(1);

    return (
        <>
            <GivePageHeader step={step}/>
            <GivePageSteps step={step} setStep={setStep}/>
        </>
    );
};

export default GivePageMain;