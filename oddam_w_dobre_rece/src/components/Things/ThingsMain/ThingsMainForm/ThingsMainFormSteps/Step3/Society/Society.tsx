import React from 'react';
import {listHelpGroups} from "../directoryStep3";
import SocietyForm from "./SocietyForm";
import {GivePageFormValues, HandleCheckbox} from "../../../../../../../types";

type SocietyProps = HandleCheckbox & {
    formValues: GivePageFormValues
}

const Society = ({handleChangeCheckbox, formValues}: SocietyProps ) => {
    return (
        <div className='thingsMainFormStepsItem_item step3'>
            <p className='step3_title'>Komu chcesz pomóc?</p>
            <div className='step3_box'>
                {listHelpGroups.map(helpItem => {
                    return (
                       <SocietyForm
                           key={helpItem}
                           helpItem={helpItem}
                           handleChangeCheckbox={handleChangeCheckbox}
                           formValues={formValues}
                       />
                    )
                })}
            </div>
        </div>

    );
};

export default Society;