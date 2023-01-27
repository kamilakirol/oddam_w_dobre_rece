import React from 'react';
import {listHelpGroups} from "../directoryStep3";
import HelpItem from "./HelpItem/HelpItem";

const HelpGroupsForm = ({handleChangeCheckbox, formValues}) => {
    return (
        <div className='givePageStepItem_item item_step3'>
            <p className='item_step3_title'>Komu chcesz pomóc?</p>
            <div className='item_step3_box'>
                {listHelpGroups.map(helpItem => {
                    return (
                       <HelpItem
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

export default HelpGroupsForm;