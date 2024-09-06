import React from 'react';
import './HomeServices.css';
import { Link } from 'react-router-dom';
import middle_img from '../Assets/Images/img-55.png';
import coub from '../Assets/Images/coub-img-2.png';
import ServicesBox from '../ServicesBox/ServicesBox';
import ServicesContent from '../ServicesContent/ServicesContent';
import { servicesContent2left, servicesContent2right } from '../../Constants/servicesContent';
import { useInView } from 'react-intersection-observer';
import { withTranslation } from 'react-i18next';

const HomeServices = ({ t }) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    return (
        <div className="services">
            <ServicesBox />
            <div
                className="services-section2"
                ref={ref}
            >
                <h2 className="services-section2-title">{t('services.title5')}</h2>
                <div className="services-section2-content">
                    <div className={`section2-content fade-up2 ${inView ? 'show' : ''}`}>
                        {
                            servicesContent2right.map((item, id) => {
                                return (
                                    <Link
                                        key={id}
                                        to="/services"
                                    >
                                        <div className={id === 1 ? 'content-mid1' : 'content'}>
                                            <div className='content-top'>
                                                <img
                                                    src={item.image}
                                                    alt="icon"
                                                />
                                                <h2>{t(item.title)}</h2>
                                            </div>
                                            <p>{t(item.text)}</p>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className="section2-content-middle">
                        <img
                            className="section2-content-img1"
                            src={middle_img}
                            alt="middleImage"
                        />
                        <img
                            className="section2-content-img2"
                            src={coub}
                            alt="coub"
                        />
                    </div>
                    <div className={`section2-content fade-up ${inView ? 'show' : ''}`}>
                        {
                            servicesContent2left.map((item, id) => {
                                return (
                                    <Link
                                        key={id}
                                        to="/services"
                                        className={`section2-content fade-up ${inView ? 'show' : ''}`}
                                    >
                                        <div className={id === 1 ? 'content-mid2' : 'content'}>
                                            <div className='content-top'>
                                                <img
                                                    src={item.image}
                                                    alt="icon"
                                                />
                                                <h2>{t(item.title)}</h2>
                                            </div>
                                            <p>{t(item.text)}</p>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <ServicesContent />
        </div>
    )
}

export default withTranslation()(HomeServices);
