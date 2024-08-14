import React from 'react';
import './Footer.css';
import bracket from '../Assets/Images/b3-2.jpg';
import { Link } from 'react-router-dom';
import email_icon from '../Assets/Images/icons8-email-32.png';
import phone_icon from '../Assets/Images/icons8-phone-50.png';
import insta_icon from '../Assets/Images/icons8-instagram-50.png';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();

    return (
        <div className="footer">
            <div className="footer-right">
                <h1>برای رسیدن به اهداف یک قدم بردارید</h1>
                <img onClick={() => navigate('/')} src={bracket} alt="bracket" />
            </div>
            <div className="footer-middle">
                <div className='footer-middle-header'>
                    <p>تماس با ما</p>
                </div>
                <div className='footer-middle-group'>
                    <div className='footer-middle-group1'>
                        <img className="footer-middle-img1" src={email_icon} alt="" />
                        <img className="footer-middle-img2" src={phone_icon} alt="" />
                    </div>
                    <div className='footer-middle-group2'>
                        <Link style={{ textDecoration: 'none' }} className="footer-middle-link1">info@bracketteam.net</Link>
                        <Link style={{ textDecoration: 'none' }} className="footer-middle-link2">09133243570</Link>
                    </div>
                </div>
            </div>
            <div className="footer-left">
                <p>با ما می توانید از طریق اینستاگرام هم در ارتباط باشید</p>
                <div className="footer-left-group">
                    <img src={insta_icon} alt="" />
                    <Link className="footer-left-link" to='https://www.instagram.com/bracketteam_net?igsh=MzRIODBiNWFIZA==' style={{ textDecoration: 'none' }}>bracketteam_net</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;
