import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Service.css';
import image1 from '../Components/Assets/Images/cartoon-hand-hold-seo-logo.webp';
import arrow_left from '../Components/Assets/Images/icons8-arrow-30 (2).png';
import PageTitle from '../Components/PageTitle/PageTitle';

const Service = () => {
    return (
        <div className='service'>
            <PageTitle title='Bracket - خدمات' />
            <div className="service-header">
                <div className="service-header-top">
                    <h1>خدمات</h1>
                    <div className="service-header-bottom">
                        <Link to="/">صفحه اصلی</Link>
                        <p className="service-header-bottom-direction">{'>'}</p>
                        <p>خدمات</p>
                    </div>
                </div>
            </div>
            <div className="service-container">
                <div className="service-container-right">
                    <img src={image1} alt="" />
                </div>
                <div className="service-container-left">
                    <div className="service-container-left-hdr">
                        <h1>راه حل های مناسب برای کسب و کار شما</h1>
                    </div>
                    <div className="service-container-left-contents">
                        <div className="service-container-left-content">
                            <div className="service-container-left-content-right">
                                <p>01</p>
                            </div>
                            <div className="service-container-left-content-left">
                                <p className="content1">ابزار شخصی</p>
                                <p className="content2">استفاده از ابزارهای شخصی برای طراحی سایت باعث بهبود و کارایی بالاتر میشود</p>
                            </div>
                        </div>
                        <div className="service-container-left-content">
                            <div className="service-container-left-content-right">
                                <p>02</p>
                            </div>
                            <div className="service-container-left-content-left">
                                <p className="content1">ابزار کسب و کار</p>
                                <p className="content2">راهکارهای بهبود کسب و کار با استفاده از ابزار مناسب برای مدیریت و توسعه است</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-section1">
                <div className="service-section1-top">
                    <div className="top-right">
                        <h1 className="top-right-text1">خدمات</h1>
                        <h1 className="top-right-text2">وب سایت ایده ال داشته باشید</h1>
                    </div>
                    <Link to='/service' className="top-left-link">همه خدمات</Link>
                </div>
                <div className="service-section1-bottom">
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
            </div>
        </div>
    )
}

export default Service;
