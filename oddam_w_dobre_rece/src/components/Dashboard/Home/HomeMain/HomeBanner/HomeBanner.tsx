import React from 'react';
import BannerDecoration from '../../../../../assets/Decoration.svg'
import HomeBannerButton from "./HomeBannerButton/HomeBannerButton";

const HomeBanner = () => {

    return (
        <section id='banner' className='banner'>
            <div className='container banner_container'>
                <div className='banner_img'></div>
                <div className='banner_box'>
                    <h1 className='banner_box_title'>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={BannerDecoration} className='banner_box_decoration' alt='decoration line' />
                    <div className='banner_box_buttons'>
                        <HomeBannerButton text={'ODDAJ \n RZECZY'}/>
                        <HomeBannerButton text={'ZORGANIZUJ \n ZBIÓRKĘ'}/>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default HomeBanner;