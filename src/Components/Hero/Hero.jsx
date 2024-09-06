import React from 'react';
import './Hero.css';
import image1 from '../Assets/Images/coub-img-2.png';
import image2 from '../Assets/Images/3d-handhold-phone-mobile.png';
import { Link, useNavigate } from 'react-router-dom';
import image3 from '../Assets/Images/12.png';
import tik_icon from '../Assets/Images/icons8-tiktok-verified-account-64.png';
import image4 from '../Assets/Images/17.png';
import Button from '../Button/Button';
import { heroItems } from '../../Constants/heroItems';
import { useInView } from 'react-intersection-observer';
import InstagramIcon from '@mui/icons-material/Instagram';
import { withTranslation } from 'react-i18next';

const Hero = ({ t }) => {

    const navigate = useNavigate();

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: true,
        threshold: .1,
    });

    const { ref: ref3, inView: inView3 } = useInView({
        triggerOnce: true,
        threshold: .1,
    });

    return (
        <div className='hero'>
            <div
                className="hero-section1"
                ref={ref}
            >
                <div className={`hero-section1-right fade-up2 ${inView ? 'show' : ''}`}>
                    <div className='hero-section1-right-top'>
                        <div className='hero-section1-right-top-title'>
                            <h2 className={`staggered-entry1 ${inView ? 'show3' : ''}`}>{t('hero.title1')}</h2>
                            <h2 className={`staggered-entry2 ${inView ? 'show3' : ''}`}>{t('hero.title2')}</h2>
                            <h2 className={`title3 staggered-entry3 ${inView ? 'show3' : ''}`}>{t('hero.title3')}</h2>
                        </div>
                        <p>{t('hero.text')}</p>
                    </div>
                    <div className="hero-section1-right-bottom">
                        <Button
                            intent='primary'
                            size='large'
                            label={t('hero.button')}
                            onClick={() => navigate('/contactUs')}
                        />
                        <div className="hero-section1-right-bottom-instagram">
                            <InstagramIcon className='instagram' />
                            <Link to="/">{t('hero.instagram')}</Link>
                        </div>
                    </div>
                </div>
                <div className={`hero-section1-left fade-up ${inView ? 'show' : ''}`}>
                    <img
                        className='hero-section1-left-image1'
                        src={image1} alt="coub"
                    />
                    <img
                        className='hero-section1-left-image2'
                        src={image2}
                        alt="contactUsCircle"
                    />
                </div>
            </div>
            <div className="hero-section2" ref={ref2}>
                <div className={`hero-section2-right fade-up2 ${inView2 ? 'show' : ''}`}>
                    <img
                        className='hero-section2-right-image1'
                        src={image3}
                        alt="contactUs"
                    />
                </div>
                <div className={`hero-section2-left fade-up ${inView2 ? 'show' : ''}`}>
                    <h2>{t('hero.title4')}</h2>
                    <p>{t('hero.text2')}</p>
                    <div className="hero-section2-left-items">
                        {
                            heroItems.map((item, id) => {
                                return (
                                    <div
                                        key={id}
                                        className="hero-section2-left-items-item"
                                    >
                                        <img
                                            src={tik_icon}
                                            alt={item.text}
                                        />
                                        <p>{t(item.text)}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="hero-section3" ref={ref3}>
                <div className={`hero-section3-right fade-up2 ${inView3 ? 'show' : ''}`}>
                    <h2>{t('hero.title5')}</h2>
                    <p>{t('hero.text7')}</p>
                    <Button
                        intent='secondary'
                        size='large'
                        label={t('navbar.aboutUs')}
                        onClick={() => navigate('/aboutUs')}
                    />
                </div>
                <div className={`hero-section3-left fade-up ${inView3 ? 'show' : ''}`}>
                    <img
                        src={image4}
                        alt="aboutUs"
                    />
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(Hero);
