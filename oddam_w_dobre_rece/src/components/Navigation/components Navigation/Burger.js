import React from 'react';

const Burger = ({isMenuActive, setIsMenuActive}) => {
    return (
        <>
            <input type='checkbox' className={`menu_btn ${isMenuActive ? 'active': ''} `} id='menu_btn' onClick={()=> setIsMenuActive(!isMenuActive)}/>
            <div className='hamburger'>
                <label htmlFor='menu_btn' className='menu_toggle'>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </label>
            </div>
        </>
    );
};

export default Burger;