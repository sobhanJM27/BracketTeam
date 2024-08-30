import React from 'react';
import './Hero.css';
import image1 from '../Assets/Images/coub-img-2.png';
import image2 from '../Assets/Images/3d-handhold-phone-mobile.png';
import { Link, useNavigate } from 'react-router-dom';
import image3 from '../Assets/Images/12.png';
import tik_icon from '../Assets/Images/icons8-tiktok-verified-account-64.png';
import image4 from '../Assets/Images/17.png';
import image5 from '../Assets/Images/icons8-instagram-32.png';
import Button from '../Button/Button';
import { heroItems } from '../../Constants/heroItems';
import { useInView } from 'react-intersection-observer';

const Hero = () => {

    const navigate = useNavigate();

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className='hero'>
            <div
                className="hero-section1"
                ref={ref}
            >
                <div className={`hero-section1-right fade-up2 ${inView ? 'show2' : ''}`}>
                    <div className='hero-section1-right-top'>
                        <div className='hero-section1-right-top-title'>
                            <h2 className={`staggered-entry1 ${inView ? 'show3' : ''}`}>ایجاد سایت و</h2>
                            <h2 className={`staggered-entry2 ${inView ? 'show3' : ''}`}>طراحی در سایه</h2>
                            <h2 className={`title3 staggered-entry3 ${inView ? 'show3' : ''}`}>برنامه نویسی</h2>
                        </div>
                        <p>تیم براکت اینجاست تا به کسب و کار و برند شما کمک کند</p>
                    </div>
                    <div className="hero-section1-right-bottom">
                        <Button
                            intent='primary'
                            size='large'
                            label='مشاهده بیشتر'
                            onClick={() => navigate('/contactUs')}
                        />
                        <div className="hero-section1-right-bottom-instagram">
                            <img
                                src={image5}
                                alt="instagram"
                            />
                            <Link to="/">در اینستاگرام به ما بپیوندید</Link>
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
            <div className="hero-section2">
                <div className="hero-section2-right">
                    <img
                        className='hero-section2-right-image1'
                        src={image3}
                        alt="contactUs"
                    />
                </div>
                <div className='hero-section2-left'>
                    <h2>ما به رشد کسب و کار شما کمک خواهیم کرد</h2>
                    <p>
                        با ساخت و طراحی سایت حرفه‌ای، ما به شما کمک می‌کنیم تا کسب و کارتان رشد کند. با توجه به نیازها و هدف‌های شما، سایتی ایجاد خواهیم کرد که باعث افزایش دسترسی مشتریان، افزایش فروش و بهبود ارتباط با مخاطبان شما خواهد شد.
                    </p>
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
                                        <p>{item.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="hero-section3">
                <div className="hero-section3-right">
                    <h2>جدیدترین تکنولوژی ها بهترین کارایی</h2>
                    <p>
                        برای ساخت و طراحی سایت با بهترین کارایی، از جدیدترین تکنولوژی‌ها استفاده می‌شود. این شامل استفاده از کدنویسی فرانت‌اند با استفاده از Next و React، بک‌اند با استفاده از Node.js و طراحی UI/UX اختصاصی است. همچنین، امکان ساخت سایت با وردپرس نیز در نظر گرفته شده است.
                    </p>
                    <Button
                        intent='secondary'
                        size='large'
                        label='درباره ما'
                        onClick={() => navigate('/aboutUs')}
                    />
                </div>
                <div className="hero-section3-left">
                    <img
                        src={image4}
                        alt="aboutUs"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero;
