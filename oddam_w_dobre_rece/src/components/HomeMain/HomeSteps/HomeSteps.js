import React from 'react';
import DecorationImg from "../../../assets/Decoration.svg";
import ShirtIcon from "../../../assets/ShirtIcon.svg";
import BagIcon from "../../../assets/BagIcon.svg";
import MagnifierIcon from "../../../assets/MagnifierIcon.svg";
import RecyclingIcon from "../../../assets/RecyclingIcon.svg";
import {Link} from "react-router-dom";
import HomeStepsItem from "./HomeStepsItem";

const HomeSteps = () => {
    return (
        <section id='steps' className='steps'>
            <div className='container steps_container'>
                <h2 className='steps_title'>Wystarczą 4 proste kroki</h2>
                <img src={DecorationImg} className='steps_decoration' alt='decoration line'/>
                    <div className='steps_box container'>
                        <HomeStepsItem image={ShirtIcon} title='Wybierz rzeczy' text=' ubrania , zabawki, sprzęt i inne'/>
                        <HomeStepsItem image={BagIcon} title='Spakuj je' text='skorzystaj z worków na śmieci'/>
                        <HomeStepsItem image={MagnifierIcon} title='Zdecyduj komu chcesz pomóc' text='wybierz zaufane> miejsce'/>
                        <HomeStepsItem image={RecyclingIcon} title='Zamów kuriera' text='kurier przyjedzie w  dogodnym terminie' />
                    </div>

                <div className='steps_button'>
                    <button className='steps_button_btn'>
                        <Link className='steps_button_btn_link' to='logowanie'>ODDAJ <br/> RZECZY</Link>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HomeSteps;