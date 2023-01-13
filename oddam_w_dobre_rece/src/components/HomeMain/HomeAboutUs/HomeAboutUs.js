import React from 'react';
import HomeAboutUsBox from "./HomeAboutUsBox/HomeAboutUsBox";
import PeopleImg from "../../../assets/PeopleImg.jpg";

const HomeAboutUs = () => {
    return (
        <section className='aboutUs'>
            <div className='aboutUs_container container'>
                <HomeAboutUsBox/>
                    <img src={PeopleImg} alt='people' className='aboutUs_img'/>
            </div>
        </section>
    );
};

export default HomeAboutUs;