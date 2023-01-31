import React from 'react';
import HomeAboutUsBox from "./HomeAboutUsBox/HomeAboutUsBox";
import PeopleImg from "../../../../../assets/PeopleImg.jpg";

const HomeAboutUs = () => {
    return (
        <section id='aboutUs' className='aboutUs'>
            <div className=' container'>
                <div className="aboutUs_container">
                    <HomeAboutUsBox/>
                    <div className="aboutUs_img">
                        <img src={PeopleImg} alt='people' className='aboutUs_img_item'/>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomeAboutUs;