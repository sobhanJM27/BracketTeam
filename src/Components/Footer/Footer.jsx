import React, { useRef } from 'react';
import './Footer.css';
import bracket from '../Assets/Images/b3-2.jpg';
import { Link } from 'react-router-dom';
import email_icon from '../Assets/Images/icons8-email-32.png';
import phone_icon from '../Assets/Images/icons8-phone-50.png';
import insta_icon from '../Assets/Images/icons8-instagram-50.png';
import arrow_up from '../Assets/Images/icons8-arrow-up-50.png';
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <div className="footer">
            <div className="footer-right">
                <h1>برای رسیدن به اهداف یک قدم بردارید</h1>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <img src={bracket} alt="" />
                </Link>
            </div>
            <div className="footer-middle">
                <p>تماس با ما</p>
                <div className='footer-middle-group1'>
                    <img className="footer-middle-img1" src={email_icon} alt="" />
                    <Link to="/contactUs" style={{ textDecoration: 'none' }} className="footer-middle-link1">info@bracketteam.net</Link>
                </div>
                <div className='footer-middle-group2'>
                    <img className="footer-middle-img2" src={phone_icon} alt="" />
                    <Link to="/contactUs" style={{ textDecoration: 'none' }} className="footer-middle-link2">09133243570</Link>
                </div>
            </div>
            <div className="footer-left">
                <p>با ما می توانید از طریق اینستاگرام هم در ارتباط باشید</p>
                <div className="footer-left-group">
                    <img src={insta_icon} alt="" />
                    <Link className="footer-left-link" to='/contactUs' style={{ textDecoration: 'none' }}>bracketteam_net</Link>
                </div>
            </div>
            {/* <div onClick={scrollToTop} className="footer-icon">
                <img src={arrow_up} alt="" />
            </div> */}
        </div>
    )
}

export default Footer;
