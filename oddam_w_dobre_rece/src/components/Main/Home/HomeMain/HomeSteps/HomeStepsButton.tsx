import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {UserContext} from "../../../../../FirebaseAuth";

const HomeStepsButton = () => {
    const user = useContext(UserContext)

    return (
        <button className='btn homeSteps_button_btn'>
            <Link className='homeSteps_button_btn_link' to={user?.uid ? '/oddaj-rzeczy': 'logowanie' }>ODDAJ <br/> RZECZY</Link>
        </button>
    );
};

export default HomeStepsButton;