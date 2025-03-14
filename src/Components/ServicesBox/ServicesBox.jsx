import React from 'react';
import './ServicesBox.css';
import { servicesContent } from '../../Constants/servicesContent';
import { Link, useParams } from 'react-router-dom';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { withTranslation } from 'react-i18next';

const ServicesBox = ({ t }) => {
  const navigate = useNavigate();
  const { lang } = useParams();

  return (
    <div className="services-section1">
      <Button
        intent="secondary"
        size="large"
        label={t('services.button')}
        onClick={() => navigate(`/${lang}/services`)}
      />
      <div className="services-section1-bottom">
        {servicesContent.map((item, id) => {
          return (
            <div key={id} className="services-section1-bottom-box">
              <Link to={`/${lang}/services`}>
                <span className="box-number">{t(item.number)}</span>
                <span className="box-title">{t(item.title)}</span>
                <p className="box-text">{t(item.text)}</p>
                <div className="box-div">
                  <span>{t('services.learnMore')}</span>
                  <KeyboardBackspaceIcon className="arrow-left" />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withTranslation()(ServicesBox);
