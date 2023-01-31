import React, {useContext} from 'react';
import BannerDecoration from '../../../../../assets/Decoration.svg'
import {Link} from "react-router-dom";
import {UserContext} from "../../../../../FirebaseAuth";

const HomeBanner = () => {
    const [user] = useContext(UserContext)
    return (
        <section id='banner' className='banner'>
            <div className='container banner_container'>
                <div className='banner_img'></div>
                <div className='banner_box'>
                    <h1 className='banner_box_title'>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={BannerDecoration} className='banner_box_decoration' alt='decoration line' />
                    <div className='banner_box_buttons'>
                        <button className=' btn banner_box_buttons_btn'>
                            <Link className='link banner_box_buttons_btn_link' to={user ? '/oddaj-rzeczy': 'logowanie' }>ODDAJ <br/> RZECZY</Link>
                        </button>
                        <button className='btn banner_box_buttons_btn'>
                            <Link className='link banner_box_buttons_btn_link' to={user ? '/oddaj-rzeczy': 'logowanie' }>ZORGANIZUJ <br/> ZBIÓRKĘ</Link>
                        </button>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default HomeBanner;