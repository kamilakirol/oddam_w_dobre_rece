import React, {Dispatch, SetStateAction} from 'react';

type PropsBurger = {
    isMenuActive: boolean,
    setIsMenuActive: Dispatch<SetStateAction<boolean>>
}

const HeaderBurger = ({isMenuActive, setIsMenuActive}: PropsBurger) => {
    return (
        <>
            <input type='checkbox' className={`menu_btn ${isMenuActive ? 'active': ''} `} id='menu_btn' onClick={()=> setIsMenuActive(!isMenuActive)}/>
            <div className='burger'>
                <label htmlFor='menu_btn' className='menu_toggle'>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </label>
            </div>
        </>
    );
};

export default HeaderBurger;