import React from 'react';
import './Hero.css';
import image1 from '../Assets/Images/3d-handhold-phone-mobile.png';
import image2 from '../Assets/Images/coub-img-2.png';
import { Link } from 'react-router-dom';
import image3 from '../Assets/Images/12.png';
import tik_icon from '../Assets/Images/icons8-tiktok-verified-account-64.png';
import image4 from '../Assets/Images/17.png';
import image5 from '../Assets/Images/icons8-instagram-32.png';



const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-section1">
                <div className="section1-right">
                    <div className='section1-right-content'>
                        <h2>ایجاد سایت و طراحی در سایه برنامه نویسی</h2>
                        <div>
                            <p>تیم براکت اینجاست تا به کسب و کار و برند شما کمک کند</p>
                            <div class="hr"></div>
                        </div>
                    </div>
                    <div className="section1-right-ia">
                        <Link to="/contactUs" className='section1-link'>مشاهده بیشتر</Link>
                        <div className="section1-right-icon">
                            <img src={image5} alt="" />
                            <Link to="/">در اینستاگرام به ما بپیوندید</Link>
                        </div>
                    </div>
                </div>
                <div className="section1-left">
                    <img className='section1-left-image2' src={image2} alt="" />
                    <img className='section1-left-image1' src={image1} alt="" />
                </div>
            </div>
           <div className="hero-section2">
                <div className="section2-right">
                    <img className='section2-right-image3' src={image3} alt="" />
                </div>
                <div className="section2-left">
                    <div className="section2-left-1">
                        <h1 className='section2-left-text2'>ما به رشد کسب و کار شما کمک خواهیم کرد</h1>
                        <div className='section2-left-point'></div>
                        <p>با ساخت و طراحی سایت حرفه‌ای، ما به شما کمک می‌کنیم تا کسب و کارتان رشد کند. با توجه به نیازها و هدف‌های شما، سایتی ایجاد خواهیم کرد که باعث افزایش دسترسی مشتریان، افزایش فروش و بهبود ارتباط با مخاطبان شما خواهد شد.</p>
                    </div>
                    <div className="section2-left-2">
                        <div className="section2-item">
                            <img src={tik_icon} alt="" />
                            <p>تیم ما با ساخت و طراحی سایت حرفه‌ای، به رشد کسب و کار شما کمک خواهد کرد</p>
                        </div>
                        <div className="section2-item">
                            <img src={tik_icon} alt="" />
                            <p>استفاده از راهکارهای مدرن و هدفمند، بهبود دسترسی را تضمین می‌کنیم</p>
                        </div>
                        <div className="section2-item">
                            <img src={tik_icon} alt="" />
                            <p>توانایی سازگاری سایت با تمامی دستگاه‌ها و نمایشگرها، دسترسی را برای همه کاربران بهبود می‌بخشد</p>
                        </div>
                        <div className="section2-item">
                            <img src={tik_icon} alt="" />
                            <p>ما با بهینه سازی رابط کاربری و تجربه کاربری، مشتریان را به خرید وفادار میکنیم</p>
                        </div>
                    </div>
                </div>
            </div>
             <div className="hero-section3">
                <div className="hero-section3-right">
                    <h1 className="section3-text2">جدیدترین تکنولوژی ها بهترین کارایی</h1>
                    <p className="section3-text3">برای ساخت و طراحی سایت با بهترین کارایی، از جدیدترین تکنولوژی‌ها استفاده می‌شود. این شامل استفاده از کدنویسی فرانت‌اند با استفاده از Next و React، بک‌اند با استفاده از Node.js و طراحی UI/UX اختصاصی است. همچنین، امکان ساخت سایت با وردپرس نیز در نظر گرفته شده است.</p>
                    <Link to='/aboutUs' className='section3-link'>درباره ما</Link>
                </div>
                <div className="hero-section3-left">
                    <img src={image4} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
