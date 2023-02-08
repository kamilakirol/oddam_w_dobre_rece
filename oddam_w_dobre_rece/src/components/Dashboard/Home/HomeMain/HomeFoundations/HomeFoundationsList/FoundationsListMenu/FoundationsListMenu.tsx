import React, {Dispatch, SetStateAction} from 'react';
import {FoundationsList} from "../../../../../../../types";

type FoundationsListMenuProps = {
    setActiveIndex: Dispatch<SetStateAction<number>>,
    foundationsList: FoundationsList,
    setOffset: Dispatch<SetStateAction<number>>
}

const FoundationsListMenu = ({setActiveIndex, foundationsList, setOffset}: FoundationsListMenuProps) => {

    return (
        <div className='foundationsListMenu'>
            {foundationsList.map((item, index)=> {
                return (
                <button key={index} className='btn foundationsListMenu_button' onClick={() => {
                    setActiveIndex(index)
                    setOffset(0)}}>
                    <p className='foundationsListMenu_button_text'>{item.name}</p>
                </button>
                )
            })}

        </div>
    );
};

export default FoundationsListMenu;