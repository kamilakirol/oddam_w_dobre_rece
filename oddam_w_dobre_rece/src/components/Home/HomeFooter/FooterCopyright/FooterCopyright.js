import React from 'react';
import FacebookImg from '../../../../assets/Facebook.svg';
import InstagramImg from '../../../../assets/Instagram.svg';

const FooterCopyright = () => {
    return (
        <div className='footercopy'>
            <div></div>
            <p className='footercopy_text'>Copyright by Coders Lab</p>
            <div className='footercopy_icons'>
                <a href="https://facebook.com" target="_blank" rel='noreferrer'> <img className='footercopy_icons_img' src={FacebookImg} alt='facebook icon'/></a>
                <a href="https://instagram.com"> <img className='footercopy_icons_img' src={InstagramImg} alt='instagram icon'/></a>
            </div>
        </div>
    );
};

export default FooterCopyright;