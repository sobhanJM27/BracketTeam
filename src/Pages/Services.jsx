import React from 'react';
import './CSS/Services.css';
import image1 from '../Components/Assets/Images/cartoon-hand-hold-seo-logo.webp';
import PageTitle from '../Components/PageTitle/PageTitle';
import ServicesContent from '../Components/ServicesContent/ServicesContent'
import Header from '../Components/Header/Header';

const Services = () => {
    return (
        <div className='service'>
            <PageTitle title='Bracket - خدمات' />
            <Header title='خدمات' />
            <div className="service-container">
                <div className="service-container-right">
                    <img src={image1} alt="" />
                </div>
                <div className="service-container-left">
                    <div className="service-container-left-hdr">
                        <h2>راه حل های مناسب برای کسب و کار شما</h2>
                    </div>
                    <div className="service-container-left-contents">
                        <div className="service-container-left-content">
                            <div className="service-container-left-content-right">
                                <span>01</span>
                            </div>
                            <div className="service-container-left-content-left">
                                <span className="content1">ابزار شخصی</span>
                                <p className="content2">استفاده از ابزارهای شخصی برای طراحی سایت باعث بهبود و کارایی بالاتر میشود</p>
                            </div>
                        </div>
                        <div className="service-container-left-content">
                            <div className="service-container-left-content-right">
                                <span>02</span>
                            </div>
                            <div className="service-container-left-content-left">
                                <span className="content1">ابزار کسب و کار</span>
                                <p className="content2">راهکارهای بهبود کسب و کار با استفاده از ابزار مناسب برای مدیریت و توسعه است</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ServicesContent />
        </div>
    )
}

export default Services;
