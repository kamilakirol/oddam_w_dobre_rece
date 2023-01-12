import React from 'react';
import {Link} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll"

const HomeHeader = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header_box'>
                    <nav className='header_box_login'>
                        <ul className='header_box_login_menu'>
                            <li>
                                <Link className='header_box_login_menu_item' to='logowanie'>Zaloguj</Link>
                            </li>
                            <li>
                                <Link className='header_box_login_menu_item' to='rejestracja'>Załóż konto</Link>
                            </li>
                        </ul>
                    </nav>
                    <nav className='header_box_nav'>
                        <input type='checkbox' className='menu_btn' id='menu_btn'/>
                        <div className='hamburger'>
                            <label htmlFor='menu_btn' className='menu_toggle'>
                                <span className='bar'></span>
                                <span className='bar'></span>
                                <span className='bar'></span>
                            </label>
                        </div>
                        <ul className='header_box_nav_menu'>
                            <li>
                                <LinkScroll className='header_box_nav_menu_link' activeClass="active" to='start' >
                                    Start
                                </LinkScroll>
                            </li>
                            <li>
                                <LinkScroll className='header_box_nav_menu_link' activeClass="active" to='info'>
                                    O co chodzi?
                                </LinkScroll>
                            </li>
                            <li>
                                <LinkScroll className='header_box_nav_menu_link' activeClass="active" to='aboutUs'>
                                    O nas
                                </LinkScroll>
                            </li>
                            <li>
                                <LinkScroll className='header_box_nav_menu_link' activeClass="active" to='fundations'>
                                    Fundacje i organizacje
                                </LinkScroll>
                            </li>
                            <li>
                                <LinkScroll className='header_box_nav_menu_link' activeClass="active" to='contact'>
                                    Kontakt
                                </LinkScroll>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </header>
    );
};

export default HomeHeader;