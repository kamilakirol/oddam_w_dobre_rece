import React from 'react';
import DecorationImg from "../../../../../assets/Decoration.svg";
import SignatureImg from "../../../../../assets/SignatureImg.svg";

const HomeAboutUsBox = () => {
    return (
        <div className='aboutUs_box'>
            <h2 className='title'>O nas</h2>
            <img src={DecorationImg} alt='decoration line'/>
            <p className='aboutUs_box_text'>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
            <img src={SignatureImg} alt='signature' className='aboutUs_box_img' />
        </div>
    );
};

export default HomeAboutUsBox;