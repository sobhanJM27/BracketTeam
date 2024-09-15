import React from 'react';
import './Footer.css';
import bracket from '../Assets/Images/b3-2.jpg';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = ({ t }) => {

    const navigate = useNavigate();
    const {lang} = useParams();

    return (
        <div className="footer">
            <div className="footer-right">
                <h1>{t('footer.text1')}</h1>
                <img
                    onClick={() => navigate(`/${lang}`)}
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
                        <AlternateEmailIcon className="footer-middle-img1" />
                        <PhoneIcon className="footer-middle-img1" />
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
                    <InstagramIcon className='footer-middle-img1' />
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
