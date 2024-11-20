import React from 'react';
import '../CSS/Services.css';
import image1 from '../../Components/Assets/Images/cartoon-hand-hold-seo-logo.png';
import Header from '../../Components/Header/Header';
import ServicesBox from '../../Components/ServicesBox/ServicesBox';
import { Helmet } from 'react-helmet';
import { withTranslation } from 'react-i18next';
import ServicesSeoContent from '../../Components/ServicesSeoContent/ServicesSeoContent';
import PriceBox from '../../Components/PriceBox/PriceBox';

const Services = ({ t }) => {
    return (
        <>
            <Header title={t('navbar.services')} />
            <div className='services'>
                <Helmet>
                    <title>Bracket - {t('navbar.services')}</title>
                </Helmet>
                <div className="services-container">
                    <div className="services-container-right">
                        <img
                            src={image1}
                            alt="services" />
                    </div>
                    <div className="services-container-left">
                        <h2>{t('services.title13')}</h2>
                        <div className="services-container-left-contents">
                            <div className="services-container-left-content">
                                <span className="content-header">{t('services.number1')}</span>
                                <div className="services-container-left-content-left">
                                    <span className="content1">{t('services.title14')}</span>
                                    <p className="content2">{t('services.text12')}</p>
                                </div>
                            </div>
                            <div className="services-container-left-content">
                                <span className="content-header">{t('services.number2')}</span>
                                <div className="services-container-left-content-left">
                                    <span className="content1">{t('services.title15')}</span>
                                    <p className="content2">{t('services.text13')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PriceBox />
                <ServicesSeoContent />
                <ServicesBox />
            </div>
        </>
    )
}

export default withTranslation()(Services);
