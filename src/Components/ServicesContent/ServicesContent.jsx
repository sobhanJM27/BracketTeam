import React from 'react';
import image1 from '../Assets/Images/vector-img-90.webp';
import './ServicesContent.css';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

const ServicesContent = ({t}) => {

    const navigate = useNavigate();

    return (
        <div className="services-content">
            <div className="services-content-right">
                <h2>{t('services.title12')}</h2>
                <p>{t('services.text11')}</p>
                <Button
                    intent='teriaty'
                    size='small'
                    label={t('services.learnMore')}
                    onClick={() => navigate('/services')}
                />
            </div>
            <div className="services-content-left">
                <img
                    src={image1}
                    alt="servicesContent"
                />
            </div>
        </div>
    )
}

export default withTranslation()(ServicesContent);