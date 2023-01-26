import React from 'react';
import LocalizationForm from "./LocalizationForm/LocalizationForm";
import HelpGroupsForm from "./HelpGroupsForm/HelpGroupsForm";
import SpecificLocalizationForm from "./SpecificLocalizationForm/SpecificLocalizationForm";

const Step3 = ({handleChange, formValues,  handleChangeCheckbox, formErrors}) => {

    return (
        <div className='givePageStepItem'>
            <p className='givePageStepItem_steps'>Krok 3/4</p>
            <h2 className='givePageStepItem_title titleStep3'>Lokalizacja:</h2>
            <form>
                <LocalizationForm
                    handleChange={handleChange}
                    formValues={formValues}
                />

                <HelpGroupsForm
                    handleChangeCheckbox={handleChangeCheckbox}
                    formValues={formValues}
                />

                <SpecificLocalizationForm
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