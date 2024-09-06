import React from 'react';
import './Footer.css';
import bracket from '../Assets/Images/b3-2.jpg';
import { Link } from 'react-router-dom';
import email_icon from '../Assets/Images/icons8-email-32.png';
import phone_icon from '../Assets/Images/icons8-phone-50.png';
import insta_icon from '../Assets/Images/icons8-instagram-50.png';
import { useNavigate } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

const Footer = ({t}) => {

    const navigate = useNavigate();

    return (
        <div className="footer">
            <div className="footer-right">
                <h1>{t('footer.text1')}</h1>
                <img
                    onClick={() => navigate('/')}
                    src={bracket}
                    alt="bracket"
                />
            </div>
            <div className="footer-middle">
                <div className='footer-middle-header'>
                    <p>{t('navbar.contactUs')}</p>
                </div>
                <div className='footer-middle-group'>
                    <div className='footer-middle-group1'>
                        <img
                            className="footer-middle-img1"
                            src={email_icon}
                            alt="email"
                        />
                        <img
                            className="footer-middle-img2"
                            src={phone_icon}
                            alt="phone"
                        />
                    </div>
                    <div className='footer-middle-group2'>
                        <Link className="footer-middle-link1">info@bracketteam.net</Link>
                        <Link className="footer-middle-link2">{t('footer.phoneNumber')}</Link>
                    </div>
                </div>
            </div>
            <div className="footer-left">
                <p>{t('footer.text2')}</p>
                <div className="footer-left-group">
                    <img
                        src={insta_icon}
                        alt="insta"
                    />
                    <Link
                        className="footer-left-link"
                        to='https://www.instagram.com/bracketteam_net?igsh=MzRIODBiNWFIZA=='
                    >
                        bracketteam_net
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(Footer);
