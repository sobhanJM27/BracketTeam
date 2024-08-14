import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Service.css';
import image1 from '../Components/Assets/Images/cartoon-hand-hold-seo-logo.webp';
import arrow_left from '../Components/Assets/Images/icons8-arrow-30 (2).png';
import PageTitle from '../Components/PageTitle/PageTitle';
import ServicesContent from '../Components/ServicesContent/ServicesContent'
import Header from '../Components/Header/Header';

const Service = () => {
    return (
        <div className='service'>
            <PageTitle title='Bracket - خدمات' />
            <Header />
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
            <ServicesContent />
        </div>
    )
}

export default Service;
