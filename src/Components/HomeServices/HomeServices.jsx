import React from 'react';
import './HomeServices.css';
import { Link } from 'react-router-dom';
import arrow_left from '../Assets/Images/icons8-arrow-30 (2).png';
import middle_img from '../Assets/Images/img-55.webp';
import coub from '../Assets/Images/coub-img-2.png';
import icon1 from '../Assets/Images/ib-icon-1.png';
import icon2 from '../Assets/Images/ib-icon-6.png';
import icon3 from '../Assets/Images/ib-icon-4.png';
import icon4 from '../Assets/Images/ib-icon-5.png';
import icon5 from '../Assets/Images/ib-icon-7.png';
import icon6 from '../Assets/Images/vector-img-6.png';
import image1 from '../Assets/Images/vector-img-90.webp';

const HomeServices = () => {
    return (
        <div className="services">
            {/* <div className="services-section1">
                <div className="services-section1-top">
                    <div className="top-right">
                        <h1 className="top-right-text1">خدمات</h1>
                        <h1 className="top-right-text2">وب سایت ایده ال داشته باشید</h1>
                        <div className="top-right-point"></div>
                    </div>
                    <Link to='/services' className="top-left-link">همه خدمات</Link>
                </div>
                <div className="services-section1-bottom">
                    <div className="section1-bottom-box">
                        <Link className='section1-box-link' to='/aboutUs'>
                            <p className='box-link-number'>01</p>
                            <p className='box-link-text1'>توسعه محصولات</p>
                            <p className='box-link-text2'>طریق ایده پردازی و طراحی، سایتی قدرتمند و جذاب ساخته خواهد شد.</p>
                            <button className="box-link-button" style={{ marginTop: '72px' }}>بیشتر بدانید</button>
                            <img class src={arrow_left} alt="" />
                        </Link>
                    </div>
                    <div className="section1-bottom-box">
                        <Link className='section1-box-link' to='/aboutUs'>
                            <p className='box-link-number'>02</p>
                            <p className='box-link-text1'>استراتژی</p>
                            <p className='box-link-text2'>استفاده از استراتژی های موثر در طراحی و ساخت سایت ها، برای خلق تجربه کاربری بی نظیر و موفقیت بیشتر.</p>
                            <button className="box-link-button">بیشتر بدانید</button>
                            <img src={arrow_left} alt="" />
                        </Link>
                    </div>
                    <div className="section1-bottom-box">
                        <Link className='section1-box-link' to='/aboutUs'>
                            <p className='box-link-number'>03</p>
                            <p className='box-link-text1'>توسعه برند</p>
                            <p className='box-link-text2'>طراحی و ساخت سایت، برای ایجاد هویت قوی و دستاورد های بزرگتر.</p>
                            <button className="box-link-button" style={{ marginTop: '72px' }}>بیشتر بدانید</button>
                            <img src={arrow_left} alt="" />
                        </Link>
                    </div>
                    <div className="section1-bottom-box">
                        <Link className='section1-box-link' to='/aboutUs'>
                            <p className='box-link-number'>04</p>
                            <p className='box-link-text1'>مدیریت محتوا</p>
                            <p className='box-link-text2'>در این پیشنهاد ویژه، به مدت یک ماه مدیریت محتوا را به صورت رایگان در اختیارتان قرار می دهیم.</p>
                            <button className="box-link-button">بیشتر بدانید</button>
                            <img src={arrow_left} alt="" />
                        </Link>
                    </div>
                </div>
            </div> */}
            <div className="services-section2">
                <div className="services-section2-header">
                    <h1>استراتژی</h1>
                    <h2>یک تجربه دیجیتال با کیفیت</h2>
                </div>
                <div className="services-section2-content">
                    <div className="section2-content-right">
                        <div className="content-right">
                            <Link style={{ textDecoration: 'none' }} to="/services">
                                <img src={icon1} alt="" />
                                <h1>هدف گذاری سفارشی</h1>
                                <p>با تعیین هدف ها و استفاده از استراتژی متناسب، موفقیت وبسایت شما را تضمین می کند.</p>
                            </Link>
                        </div>
                        <div style={{ marginRight: '-150px' }} className="content-right">
                            <Link style={{ textDecoration: 'none' }} to="/services">
                                <img src={icon2} style={{ marginTop: '-8px' }} alt="" />
                                <h1>سئو سفارشی</h1>
                                <p>بااستراتژی های بهینه و تنظیمات وب، رتبه و بازدید وبسایت را ارتقا می دهد.</p>
                            </Link>
                        </div>
                        <div className="content-right">
                            <Link style={{ textDecoration: 'none' }} to="/services">
                                <img style={{ marginTop: '-8px' }} src={icon3} alt="" />
                                <h1>استراتژی پروژه</h1>
                                <p>با هدف بهبود کارایی و پیشبرد پروژه، ابزاری موثر است.</p>
                            </Link>
                        </div>
                    </div>
                    <div className="section2-content-middle">
                        <img className="section2-content-img1" src={coub} alt="" />
                        <img className="section2-content-img2" src={middle_img} alt="" />
                    </div>
                    <div className="section2-content-left">
                        <div style={{ marginLeft: '100px' }} className="content-left">
                            <Link style={{ textDecoration: 'none' }} to="/services">
                                <img src={icon6} alt="" />
                                <h1>ابزار و کسب و کار</h1>
                                <p>با هدف ارتقا و بهبود عملکرد شرکت ها، استراتژی های موثری را ارائه می دهند.</p>
                            </Link>
                        </div>
                        <div style={{ marginRight: '50px' }} className="content-left">
                            <Link style={{ textDecoration: 'none' }} to="/services">
                                <img src={icon4} alt="" />
                                <h1>پیشرفت ها</h1>
                                <p>با ارائه ابزار های کارامد و استراتژی های مناسب، عملکرد و بهبود سایت را تضمین می کنند.</p>
                            </Link>
                        </div>
                        <div style={{ marginLeft: '100px' }} className="content-left">
                            <Link style={{ textDecoration: 'none' }} to="/services">
                                <img src={icon5} alt="" />
                                <h1>پشتیبانی انلاین</h1>
                                <p>به وسیله ارائه ابزار ها و راهکارهای تخصصی، به ساخت و بهبود سایت شما کمک می کند.</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services-section3">
                <div className="section3-right">
                    <h1>کیفیت</h1>
                    <h2>ارائه خدمات متناسب با حرفه شما</h2>
                    <p>ما خدمات سایت را به شیوه‌ای منحصر به فرد و متناسب با حرفه شما ارائه می‌دهیم، تا بتوانید مشتریان خود را جذب کنید و نیازهای آن‌ها را به خوبی برطرف کنید. با توجه به تخصص و صنعت شما، در سایت شما بهبود و بالندگی را تضمین می‌کنیم.</p>
                    <Link to='/services' className='section3-right-link'>بیشتر بدانید</Link>
                </div>
                <div className="section3-left">
                    <img src={image1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomeServices;
