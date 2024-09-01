import React from 'react';
import '../CSS/Services.css';
import image1 from '../../Components/Assets/Images/cartoon-hand-hold-seo-logo.png';
import Header from '../../Components/Header/Header';
import ServicesBox from '../../Components/ServicesBox/ServicesBox';
import { Helmet } from 'react-helmet';

const Services = () => {
    return (
        <div className='services'>
            <Helmet>
                <title>خدمات</title>
            </Helmet>
            <Header title='خدمات' />
            <div className="services-container">
                <div className="services-container-right">
                    <img
                        src={image1}
                        alt="services" />
                </div>
                <div className="services-container-left">
                    <h2>راه حل های مناسب برای کسب و کار شما</h2>
                    <div className="services-container-left-contents">
                        <div className="services-container-left-content">
                            <span className="content-header">01</span>
                            <div className="services-container-left-content-left">
                                <span className="content1">ابزار شخصی</span>
                                <p className="content2">
                                    استفاده از ابزارهای شخصی برای طراحی سایت باعث بهبود و کارایی بالاتر میشود
                                </p>
                            </div>
                        </div>
                        <div className="services-container-left-content">
                            <span className="content-header">02</span>
                            <div className="services-container-left-content-left">
                                <span className="content1">ابزار کسب و کار</span>
                                <p className="content2">
                                    راهکارهای بهبود کسب و کار با استفاده از ابزار مناسب برای مدیریت و توسعه است
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ServicesBox />
        </div>
    )
}

export default Services;
