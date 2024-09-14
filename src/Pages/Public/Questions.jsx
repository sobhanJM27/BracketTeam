import React from 'react';
import '../CSS/Questions.css';
import icon1 from '../../Components/Assets/Images/phone-number-icon.png';
import icon2 from '../../Components/Assets/Images/call-center-icon.png';
import FaqPage from '../../Components/FaqPage/FaqPage';
import Header from '../../Components/Header/Header';
import Button from '../../Components/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { withTranslation } from 'react-i18next';

const Questions = ({ t }) => {

  const navigate = useNavigate();
  const { lang } = useParams();

  return (
    <div className='questions'>
      <Helmet>
        <title>Bracket - {t('navbar.questions')}</title>
      </Helmet>
      <Header title={t('navbar.questions')} />
      <div className="questions-container">
        <div className="questions-container-right">
          <h2>{t('faq.title1')}</h2>
          <div className="container-right-text">
            <p className="container-text">{t('faq.text1')}</p>
            <p className="container-text">{t('faq.text2')}</p>
            <p className="container-text">{t('faq.text3')}</p>
          </div>
          <div>
            <Button
              intent='primary'
              size='large'
              label={t('services.learnMore')}
              onClick={() => navigate(`/${lang}/services`)}
            />
          </div>
        </div>
        <div className="questions-container-left">
          <div className="questions-container-box">
            <img
              src={icon1}
              alt="phone"
            />
            <h3>{t('faq.text4')}</h3>
          </div>
          <div className="questions-container-box">
            <img
              src={icon2}
              alt="headphone"
            />
            <h3>{t('faq.text5')}</h3>
          </div>
        </div>
      </div>
      <FaqPage />
    </div >
  )
}

export default withTranslation()(Questions);
