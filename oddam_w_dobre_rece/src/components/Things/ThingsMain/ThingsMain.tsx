import React, {useState} from 'react';
import ThingsMainInfo from './ThingsMainInfo/ThingsMainInfo'
import ThingsMainForm from "./ThingsMainForm/ThingsMainForm";

const ThingsMain = () => {
    const [step, setStep] = useState(1);

    return (
        <>
            {step <= 4 ? <ThingsMainInfo step={step}/> : <div></div>}
            <ThingsMainForm step={step} setStep={setStep}/>
        </>
    );
};

export default ThingsMain;