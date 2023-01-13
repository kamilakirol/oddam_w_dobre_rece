import React from 'react';
import {Link} from "react-router-dom";

const HomeStepsButton = () => {
    return (
        <button className='steps_button_btn'>
            <Link className='steps_button_btn_link' to='logowanie'>ODDAJ <br/> RZECZY</Link>
        </button>
    );
};

export default HomeStepsButton;