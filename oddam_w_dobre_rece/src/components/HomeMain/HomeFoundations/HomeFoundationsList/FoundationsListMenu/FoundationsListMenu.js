import React from 'react';

const FoundationsListMenu = ({setActiveIndex, foundationsList, setOffset}) => {

    return (
        <div className='foundationsListMenu'>
            {foundationsList.map((item, index)=> {
                return (
                <button key={index} className='foundationsListMenu_button' onClick={() => {
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