import React from 'react';
import LocalizationForm from "./Localization/LocalizationForm";
import Society from "./Society/Society";
import OrganizationForm from "./Organization/OrganizationForm";
import {HandleCheckbox, StepBasicValue} from "../../../../../../types";

type Step3Props = StepBasicValue & HandleCheckbox

const Step3 = ({handleChange, formValues,  handleChangeCheckbox, formErrors}: Step3Props) => {

    return (
        <div className='thingsMainFormStepsItem'>
            <p className='thingsMainFormStepsItem_steps'>Krok 3/4</p>
            <h2 className='thingsMainFormStepsItem_title titleStep3'>Lokalizacja:</h2>
            <form>
                <LocalizationForm
                    handleChange={handleChange}
                    formValues={formValues}
                />

                <Society
                    handleChangeCheckbox={handleChangeCheckbox}
                    formValues={formValues}
                />

                <OrganizationForm
                    handleChange={handleChange}
                    formValues={formValues}
                />
                <p className='errors'>{formErrors.localization}</p>
                <p className='errors'>{formErrors.helpGroups}</p>
            </form>
        </div>
    );
};

export default Step3;